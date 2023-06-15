import { custom_log, FormatTemplate } from "./cmd/mod.ts";
import { install, remove } from "./package_manager/mod.ts";

/*
 For better logging we use custom log functions that color code according to the log type
*/
console.info = (...s) => custom_log("INFO", s, FormatTemplate.info);
console.debug = (...s) => custom_log("DEBUG", s, FormatTemplate.debug);
console.warn = (...s) => custom_log("WARN", s, FormatTemplate.warn);
console.error = (...s) => custom_log("ERROR", s, FormatTemplate.error);

/*
 At first, we parse the arguments given by the user.
*/
for (let i = 0; i < Deno.args.length; ++i) {
	switch (Deno.args[i]) {
		case "--install": {
			const pack_id = Deno.args[++i];
			await install(pack_id);
			break;
		}
		case "--remove": {
			const pack_id = Deno.args[++i];
			await remove(pack_id);
			break;
		}
	}
}
