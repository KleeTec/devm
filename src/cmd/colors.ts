export enum Format {
	reset = 0,
	bold,
	faint,
	italic,
	underline,
	blink,
	black = 30,
	red,
	green,
	yellow,
	blue,
	magenta,
	cyan,
	white,
}

export function fmt(...format: Format[]): string;
export function fmt(format: Format[]): string;

export function fmt(format: Format[] | Format): string {
	let codes;
	if (Array.isArray(format)) codes = format.join(";");
	else codes = format;
	return "\x1B[" + codes + "m";
}

export function custom_log(caption: string, s: unknown[], format: Format[]): void;
export function custom_log(caption: string, s: unknown[], format: Format): void;

export function custom_log(caption: string, s: unknown[], format: Format[] | Format) {
	if (!Array.isArray(format)) format = [format];
	const str = fmt(format) + "[" + caption + "] " + s.join(" ") + fmt([Format.reset]);
	console.log(str);
}

export const FormatTemplate = {
	info: Format.green,
	debug: Format.cyan,
	warn: Format.yellow,
	error: [Format.red, Format.bold],
};
