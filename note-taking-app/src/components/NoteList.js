import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, onDelete , onEdit }) => {
    const reversedNotes = [...notes].reverse();
  return (
    <div className="note-list">
      {reversedNotes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} onEdit={onEdit}/>
      ))}
    </div>
  );
};

export default NoteList;