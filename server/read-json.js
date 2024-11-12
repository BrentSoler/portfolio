import { readFileSync } from "fs";

export default function readJson(path) {
  const file = readFileSync(path);
  const read_file = file.toString();

  return JSON.parse(read_file);
}
