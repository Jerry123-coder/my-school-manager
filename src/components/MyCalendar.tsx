import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {

  const [eventModal, setEventModal] = useState<boolean>(false)
  const [events, setEvents] = useState([
    {
      title: 'Meeting',
      start: new Date(2023, 10, 18, 10, 0),
      end: new Date(2023, 10, 18, 12, 0),
    },
    {
      title: 'Appointment',
      start: new Date(2023, 10, 20, 14, 0),
      end: new Date(2023, 10, 20, 15, 0),
    },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: '',
    start: new Date(),
    end: new Date(),
  });

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ title: '', start: new Date(), end: new Date() });
    setEventModal(false)
  };

  const handleEventModal = () => {
    setEventModal(true)
  }

  const handleEventModalClose = () => {
    setEventModal(false)
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">My Calendar</h2>
      <div className="bg-white p-4 rounded-md shadow-md h-[25rem]">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 330 }}
          className="mt-4 h-[23.5rem]"
        />

        
      {
        eventModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-10 rounded-lg">
        <div className=" flex flex-col top-10 left-20 p-4 mt-4 w-[25rem] h-[25rem] glass-dark z-10 rounded-lg">
          <div className='flex justify-between mb-6'>
          <h3 className="text-white text-lg font-semibold mb-2">Add An Event Here </h3>
          <div onClick={handleEventModalClose}
          
          className='flex items-center justify-center font-bold text-white cursor-pointer w-7 h-7 bg-red-500 rounded-full text-sm'>X</div>
          </div>
          <input
            type="text"
            placeholder="Event Title"
            className="border border-gray-300 w-full p-2 mb-2 rounded-md focus:outline-none"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          />
          <input
            type="datetime-local"
            className="border border-gray-300 p-2 mb-2 rounded-md focus:outline-none"
            value={moment(newEvent.start).format('YYYY-MM-DDTHH:mm')}
            onChange={(e) => setNewEvent({ ...newEvent, start: new Date(e.target.value) })}
          />
          <input
            type="datetime-local"
            className="border border-gray-300 p-2 mb-2 rounded-md focus:outline-none"
            value={moment(newEvent.end).format('YYYY-MM-DDTHH:mm')}
            onChange={(e) => setNewEvent({ ...newEvent, end: new Date(e.target.value) })}
          />
          <button onClick={handleAddEvent} className="bg-blue-500 text-white mt-5 p-2 rounded-md">
            Add Event
          </button>
        </div>
        </div>
        )
      }
      </div>
      <div onClick={handleEventModal}
        className='flex justify-center text-white font-bold text-lg rounded-md mt-8 p-2 cursor-pointer bg-[#331707] hover:bg-blue-500 transition duration-300 ease-in'
        >Schedule Event</div>

    </div>
  );
};

export default MyCalendar;
