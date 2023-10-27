import React, { useState } from 'react';
import { IoIosSend } from 'react-icons/io'
import { ImBin } from 'react-icons/im'
import { AiFillEdit } from 'react-icons/ai'



interface Notification {
  content: string;
  recipients: string[];
}

const NoticeBoard: React.FC = () => {
  const [content, setContent] = useState('');
  const [recipients, setRecipients] = useState<string[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleRecipientChange = (recipient: string) => {
    if (recipients.includes(recipient)) {
      // Remove recipient if already selected
      setRecipients(recipients.filter((r) => r !== recipient));
    } else {
      // Add recipient if not selected
      setRecipients([...recipients, recipient]);
    }
  };

  const handlePushNotification = () => {
    if (content && recipients.length > 0) {
      const newNotification: Notification = {
        content,
        recipients,
      };
      setNotifications([...notifications, newNotification]);
      setContent('');
      setRecipients([]);
    }
  };

  return (
    <div className="relative p-4 ">
      <h2 className="text-xl font-semibold mb-4">Notice Board</h2>
      <div className="bg-white p-4 rounded-md shadow-md h-[30rem]">
        <div className="my-4 px-2 text-wrap h-[20rem] overflow-y-auto">
          <h3 className="text-lg font-semibold mb-2">Notifications:</h3>
          <ul>
            {notifications.map((notification, index) => (
              <li key={index} className='mb-4 border-b-2 flex flex-col w-full '>
                <span className='text-xs flex items-center justify-between gap-1'>(To: {notification.recipients.join(', ')})
                <div className='flex gap-2'>
                <span className='rounded-full transition duration-500 ease-in w-8 h-8 flex items-center justify-center cursor-pointer text-green-600  hover:bg-green-600 hover:text-white text-lg'><AiFillEdit/></span>
                  <span className='rounded-full transition duration-500 ease-in w-8 h-8 flex items-center justify-center cursor-pointer text-red-600  hover:bg-red-600 hover:text-white'><ImBin/></span>   
                  </div>
                </span>
                {notification.content} 
              </li>
            ))}
          </ul>
        </div>

        <div className='absolute bottom-3 right-10 left-10'>
          <div className="mb-4">
            <div className="flex gap-3">
              <input
                type="text"
                id="content"
                placeholder="Please type your message here"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-blue-400"
                value={content}
                onChange={handleContentChange}
              />
              <div
                onClick={handlePushNotification}
                className=" bg-slate-200 hover:text-blue-700 flex items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-110  text-blue-500 text-3xl font-bold cursor-pointer w-12 h-12 p-2 rounded-full"
              >
                <IoIosSend />
              </div>
            
            </div>
          </div>
          <div className="mb-4 flex items-center space-x-4">
            <label className="text-sm font-semibold block">Recipients:</label>
            <div className="flex items-center space-x-4">
              <button
              style={{
                backgroundColor: recipients.includes('teachers') ? '#4D4DFF' : '#ccd9ff', // Use your desired colors
              }}
                className={`bg-blue-100 rounded-full px-4   text-xs font-bold focus:outline-none leading-none ${
                  recipients.includes('teachers') ? 'text-white' : ''
                }`}
                onClick={() => handleRecipientChange('teachers')}
              >
                Teachers
              </button>
              <button
                style={{
                  backgroundColor: recipients.includes('students') ? '#00CC00' : '#99FF99', // Use your desired colors
                }}
                className={`bg-green-100 rounded-full px-4 text-xs font-bold focus:outline-none leading-none ${
                  recipients.includes('students') ? 'text-white' : ''
                }`}
                onClick={() => handleRecipientChange('students')}
              >
                Students
              </button>
              <button
                 style={{
                  backgroundColor: recipients.includes('parents') ? '#ff9400' : '#FFDB99', // Use your desired colors
                }}
                className={`bg-orange-100 rounded-full px-4 py-2 text-xs font-bold focus:outline-none leading-none ${
                  recipients.includes('parents') ? 'text-white' : ''
                }`}
                onClick={() => handleRecipientChange('parents')}
              >
                Parents
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
