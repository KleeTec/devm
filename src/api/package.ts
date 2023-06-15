export interface Package {
	author: string;
	name: string;
	version: string;
}

export function exportIsPackage(exp: unknown): exp is Package {
	if (!exp) return false;
	if (typeof exp != "object") return false;
	// deno-lint-ignore no-explicit-any
	const def = (exp as any)["default"];
	if (typeof def != "object") return false;
	const { author, name, version } = def;
	if (!author || typeof author != "string") return false;
	if (!name || typeof name != "string") return false;
	if (!version || typeof version != "string") return false;
	return true;
}
