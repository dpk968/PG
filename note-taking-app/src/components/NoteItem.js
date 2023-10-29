import React, { useState } from 'react';

const NoteItem = ({ note, onDelete, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleEdit = () => {
    onEdit(note.id, editedContent);
    setEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <div className='note-content'>
          <input
            type="text"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <div className='note-btn'>
          <button className='savebtn' onClick={handleEdit}>Save</button>
          </div>
        </div>
      ) : (
        <div className='note-content'>
          <p>{note.content}</p>
          <div className='note-btn'>
          <button className='deletebtn' onClick={() => onDelete(note.id)}>Delete</button>
          <button className='editbtn' onClick={() => setEditing(true)}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteItem;