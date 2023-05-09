export { parse } from "$flags";

type InstallOptions = { i: string } & { install: string };
type RemoveOptions = { r: string } & { remove: string };

export type Args = InstallOptions & RemoveOptions & { _: string[] };
