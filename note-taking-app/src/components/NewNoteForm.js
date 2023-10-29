import React, { useState } from 'react';
import Swal from 'sweetalert2';
const NewNoteForm = ({ onAddNote }) => {
    const [newNote, setNewNote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(newNote.length === 0){
            Swal.fire({
                title: `Please Enter something!`,
                confirmButtonText: 'OK',
                icon: 'error',
            });
        }

        if (newNote.trim()) {
            onAddNote(newNote);
            setNewNote('');
            Swal.fire({
                title: `Note added ...`,
                confirmButtonText: 'OK',
                icon: 'success',
            });
        }
    };

    return (
        <div>
            <form id="myForm" onSubmit={handleSubmit}>
                <label htmlFor="content">Add Your Notes:</label>
                <textarea id="content" name="content" placeholder="Enter your note..."
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}></textarea>
                <button className='savebtn' type="submit">Add</button>
            </form>
        </div>
    );
};

export default NewNoteForm;