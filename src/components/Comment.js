import React from "react"
import { Comment } from "../utils/Comment"

const commentNodeId = "comments"

const Comments = () => {
  Comment(commentNodeId)
  return (
    <div className="text-center">
      <h2 className="text-2xl mb-6">Komentar</h2>
      <div id={commentNodeId} />
    </div>
  )
}

export default Comments
