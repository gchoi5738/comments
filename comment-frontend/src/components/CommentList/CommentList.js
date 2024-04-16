import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CommentList.css';

const API_URL = process.env.REACT_APP_API_URL;

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editCommentId, setEditCommentId] = useState(null);
  const [editCommentText, setEditCommentText] = useState('');

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`${API_URL}/comments/`);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleNewCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleNewCommentSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/comments/`, {
        text: newComment,
      });
      setComments([...comments, response.data]);
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleEditClick = (comment) => {
    setEditCommentId(comment.id);
    setEditCommentText(comment.text);
  };

  const handleEditCommentChange = (event) => {
    setEditCommentText(event.target.value);
  };

  const handleEditCommentSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`${API_URL}/comments/${editCommentId}/`, {
        text: editCommentText,
      });
      setComments(comments.map((comment) => (comment.id === editCommentId ? response.data : comment)));
      setEditCommentId(null);
      setEditCommentText('');
    } catch (error) {
      console.error('Error editing comment:', error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`${API_URL}/comments/${commentId}/`);
      setComments(comments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div className="comment-list">
      <h2>Comments</h2>
      <form onSubmit={handleNewCommentSubmit} className="new-comment-form">
        <textarea
          value={newComment}
          onChange={handleNewCommentChange}
          placeholder="Add a new comment"
          required
        ></textarea>
        <button type="submit">Add Comment</button>
      </form>
      {comments.map((comment) => (
        <div key={comment.id} className="comment-item">
          <div className="comment-content">
            {editCommentId === comment.id ? (
              <form onSubmit={handleEditCommentSubmit} className="edit-comment-form">
                <textarea
                  value={editCommentText}
                  onChange={handleEditCommentChange}
                  required
                ></textarea>
                <button type="submit">Save</button>
                <button type="button" onClick={() => setEditCommentId(null)}>
                  Cancel
                </button>
              </form>
            ) : (
              <>
                <p className="comment-text">{comment.text}</p>
                <p className="comment-author">Author: {comment.author}</p>
                <p className="comment-date">Date: {new Date(comment.date).toLocaleString()}</p>
                <p className="comment-likes">Likes: {comment.likes}</p>
                {comment.image && <img src={comment.image} alt="Comment" className="comment-image" />}
                <div className="comment-actions">
                  <button onClick={() => handleEditClick(comment)}>Edit</button>
                  <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;