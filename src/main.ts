import { custom_log, FormatTemplate } from "./cmd/mod.ts";

/*
 For better logging we use custom log functions that color code according to the log type
*/
console.info = (...s) => custom_log("INFO", s, FormatTemplate.info);
console.debug = (...s) => custom_log("DEBUG", s, FormatTemplate.debug);
console.warn = (...s) => custom_log("WARN", s, FormatTemplate.warn);
console.error = (...s) => custom_log("ERROR", s, FormatTemplate.error);

