export class InstallOptions {
	author!: string;
	name!: string;
	version!: string;
	repo: URL = new URL("");
}
export async function install(options: InstallOptions): Promise<void> {
}
