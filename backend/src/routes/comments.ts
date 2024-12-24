import express from "express";
import commentService from "../services/comments"; 

const commentsRouter: express.Router = express.Router();

commentsRouter.get("/:postId", async (req: express.Request, res: express.Response) => {
  const postId = parseInt(req.params.itemId); // Get postId from URL params
  if (isNaN(postId)) {
    res.status(400).json({ errMessage: "Invalid item ID" }); // Handle invalid ID
  }

  try {
    const comments = await commentService.fetchCommentsByItem(postId); // Fetch comments by postId
    res.status(200).json(comments);
  } catch (e) {
    res.status(500).json({ errMessage: e });
  }
});

// Add a comment (assuming comment data is in the request body)
commentsRouter.post("/", async (req: express.Request, res: express.Response) => {
  const { content, userId, postId } = req.body; // Extract data from request body

  if (!content || !userId || !postId) { // Check for required fields
    res.status(400).json({ errMessage: "Missing required fields" });
  }

  try {
    const newComment = await commentService.addComment(content, userId, postId);
    res.status(201).json(newComment);
  } catch (e) {
    res.status(500).json({ errMessage: e });
  }
});

commentsRouter.delete("/:commentId", async (req, res) => {
  const commentId = parseInt(req.params.commentId);
  if (isNaN(commentId)) {
    res.status(400).json({ errMessage: "Invalid comment ID" });
  }

  try {
    await commentService.deleteComment(commentId);
    res.status(204).send();
  } catch (e) {
    res.status(500).json({ errMessage: e });
  }
});

export default commentsRouter;