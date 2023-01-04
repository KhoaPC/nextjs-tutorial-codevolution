import crypto from "crypto";
import { getCommentsFromJSON } from "../../../lib/comments-helpers";
import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  const { url, method, query, body, headers } = req;

  const jsonDirectory = path.join(process.cwd(), "json");
  const jsonFile = jsonDirectory + "/comments.json";

  switch (method) {
    case "GET":
      const comments = await getCommentsFromJSON();

      res.status(200).json(comments);
      break;

    case "POST":
      let commentsCurrent = await getCommentsFromJSON();

      const { comment } = body;

      // Check if valid comment
      if (!comment || comment.trim().length < 1) return res.status(400).send('hello');
      if (commentsCurrent.length >= 50) return res.status(400).send('hello');

      // ok
      const newComment = {
        id: crypto.randomUUID(),
        text: comment,
      };

      // Push to comments
      commentsCurrent.push(newComment);

      const commentsStringified = JSON.stringify(commentsCurrent);
      // Write to file
      await fs.writeFile(jsonFile, commentsStringified, "utf-8");

      res.status(201).json(newComment); // ok

      break;

    default:
      break;
  } // switch
} // handler
