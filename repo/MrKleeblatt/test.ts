import { Package } from "../../src/api/package.ts";

const name = prompt("Please tell my name :)") as string;

const pack: Package = {
	author: "MrKleeblatt",
	name: name,
	version: "0.1.0",
};
export default pack;
