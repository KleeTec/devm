import { exitWithError } from "../error.ts";
import { exportIsPackage, Package } from "../api/mod.ts";
import * as Cmd from "../cmd/mod.ts";


// const DEFAULT_REPO = new URL("https://raw.githubusercontent.com/KleeTec/devm/master/repo");
const DEFAULT_REPO = new URL("file:///home/mrkleeblatt/Programmieren/Deno/devm/repo");

export async function install(pack_id:string): Promise<void> {
	// if the user wants to use another repo then it would be there: repo#author/name/version
	let repo: URL;
	let packDescriptor: string;
	const splitted = pack_id.split("#");
	// check if a repo was given, otherwise use the default
	if (splitted[1]) {
		// TODO: Index repos in local file so that the user must first declare where to find the repo and then can use something like myRepoName#my/pack/42.0.0
		repo = new URL(splitted[0]);
		packDescriptor = splitted[1];
	} else {
		repo = DEFAULT_REPO;
		packDescriptor = splitted[0];
	}
	// get the important information and ensure that all we need is there
	const [author, name, version] = packDescriptor.split("/");
	if (!author) exitWithError("please provide an author");
	if (!name) exitWithError("please provide a name");
	if (!version) exitWithError("please provide a version");

	// generate the pack url
	const packURL = repo.href + "/" + author + "/" + name + ".ts";

	// prompt the user
	const answer = prompt(Cmd.readMessage("./src/installer/you_sure_prompt.txt").replace("$packURL", packURL), "y/n");
	if (answer != "y") {
		console.error("\n%c--> cancelled\n", "color:red;");
		return;
	}
	const pack = await import(packURL) as { default: Package };
	if (!exportIsPackage(pack)) exitWithError(`${packURL} is not a devm package!`);
}
