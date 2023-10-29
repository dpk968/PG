import React, { useState } from 'react';
import './App.css';
import NoteList from './components/NoteList';
import NewNoteForm from './components/NewNoteForm';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddNote = (content) => {
    const newNote = {
      id: Date.now(),
      content,
    };
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleEditNote = (id, content) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, content } : note
    );
    setNotes(updatedNotes);
  };

  const filteredNotes = notes.filter((note) =>
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App App-header">
      <h1>Note Taking App</h1>
      <div className='note-form'>
        <NewNoteForm onAddNote={handleAddNote} />

      <input className='input-search'
        type="text"
        placeholder="Search notes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      </div>
      <div className='all-notes'>
      <NoteList
        notes={filteredNotes}
        onDelete={handleDeleteNote}
        onEdit={handleEditNote}
      />
      </div>
    </div>
  );
}

export default App;