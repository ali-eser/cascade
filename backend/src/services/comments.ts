import { Comment } from "../utils/db";

const addComment = async (content: string, userId: number, postId: number) => {
  try {
    return await Comment.create({
      content,
      userId,
      postId,
    });
  } catch (e) {
    console.error("Error adding comment:", e);
    return null; 
  }
};

const deleteComment = async (id: number) => {
  try {
    const deletedCount = await Comment.destroy({ where: { id } });
    if (deletedCount === 0) {
      console.log(`Comment with ID ${id} not found.`);
      return false; 
    }
    return true; 
  } catch (e) {
    console.error("Error deleting comment:", e);
    return false; 
  }
};

const fetchCommentsByItem = async (itemId: number) => {
  try {
    return await Comment.findAll({ where: { itemId } });
  } catch (e) {
    console.error("Error fetching comments:", e);
    return null
  }
}

export default { addComment, deleteComment, fetchCommentsByItem };