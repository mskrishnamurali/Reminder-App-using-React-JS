import React, { useState } from 'react';
import './Reminder.css';

function Reminder() {
  const [reminder, setReminder] = useState([]);
  const [newReminder, setNewReminder] = useState('');

  const handleInputChange = (event) => {
    setNewReminder(event.target.value);
  };

  const handleAddReminder = () => {
    if (newReminder.trim()) {
      setReminder([...reminder, newReminder]);
      setNewReminder('');
    }
  };

  const handleDeleteReminder = (index) => {
    setReminder(reminder.filter((item, itemIndex) => itemIndex !== index));
  };

  return (
    <div className='container'>
      <h1>Reminder App</h1>
      <div className='input-container'>
        <input
          type='text'
          value={newReminder}
          placeholder='enter the reminder'
          onChange={handleInputChange}
        />
        <button className='add-btn' onClick={handleAddReminder}>
          Add reminder
        </button>
      </div>

      {

      reminder.length >0 ? (
      <ul className='reminder-list'>
        {reminder.map((reminderItem, index) => (
          <li key={index}>
            {reminderItem}
            <button
              className='Delete-btn'
              onClick={() => handleDeleteReminder(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>):
      <p> no reminders found</p>
}
    </div>
  );
}

export default Reminder;
