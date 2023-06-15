export function exitWithError(str: string) {
	console.error(new Error(str).message);
	Deno.exit(1);
}
