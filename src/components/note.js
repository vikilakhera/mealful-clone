import React from 'react';
import './common.css';

const Note = () => {
    return(
        <div className="note-container">
            <div className="note">
                <strong>Note:</strong> Slot time for lunch is from 12:30pm to 3:00pm and slot 
                time for dinner is from 6:00pm to 8:30pm. You can schedule 
                or modify your orders 4 hours prior to the slot time.
            </div>
        </div>
    );
}

export default Note;