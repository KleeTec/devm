import { fmt, Format, FormatTemplate } from "./colors.ts";

export function read_prompt(location: string): string {
	return Deno.readTextFileSync(location)
		.replaceAll("<info>", fmt(FormatTemplate.info))
		.replaceAll("<debug>", fmt(FormatTemplate.debug))
		.replaceAll("<warn>", fmt(FormatTemplate.warn))
		.replaceAll("<error>", fmt(FormatTemplate.error))
		.replaceAll("\n", fmt(Format.reset) + "\n") +
		fmt(Format.reset);
}
