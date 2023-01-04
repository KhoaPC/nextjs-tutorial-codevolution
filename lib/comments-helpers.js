import path from "path";
import { promises as fs } from "fs";

export async function getCommentsFromJSON() {
  const jsonDirectory = path.join(process.cwd(), "json");
  const jsonFile = jsonDirectory + "/comments.json";
  const fileContents = await fs.readFile(jsonFile, "utf8");

  return await JSON.parse(fileContents);
} // getCommentsFromJSON
