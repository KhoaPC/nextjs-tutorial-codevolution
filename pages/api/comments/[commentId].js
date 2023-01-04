import path from "path";
import { promises as fs } from "fs";
import { getCommentsFromJSON } from "../../../lib/comments-helpers";

export default async function handler(req, res) {
  const { url, method, query, body, headers } = req;

  const jsonDirectory = path.join(process.cwd(), "json");
  const jsonFile = jsonDirectory + "/comments.json";

  switch (method) {
    case "DELETE":
      let commentsCurrent = await getCommentsFromJSON();
      const { commentId } = query;

      // Remove from comments
      const commentsNew = commentsCurrent.filter((item) => {
        return item.id != commentId;
      });

      const commentsStringified = JSON.stringify(commentsNew);
      // Write to file
      await fs.writeFile(jsonFile, commentsStringified, "utf-8");

      res.status(201).send(commentId);
      break;

    default:
      break;
  } // switch
} // handler
