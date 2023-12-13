#!/usr/bin/env zx

import { stat, readFile } from "fs/promises";
import { cwd } from "node:process";
import path from "path";

const [_nodePath, _zxPath, _scriptPath, fileOrFolderName] = process.argv;

if (!fileOrFolderName.match(/.cbr|.rar$/)) {
  throw new Error("Not a valid rar file.");
}

const targetPath = path.join(cwd(), fileOrFolderName);
const stats = await stat(targetPath);

if (stats.isFile()) {
  $`unrar ${targetPath}`;
}
