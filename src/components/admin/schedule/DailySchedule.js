// DailySchedule.js
import React, { useState } from 'react';

const DailySchedule = () => {
  // Mock data for initial testing
  const teachers = [
    '劉燿宗', '白俊寧', '蕭博元', '張晞彤', '馮雪瑩', 
    '李翹楚', '王芊霓Joey', '李浩雲', '陳煒楓Dorothy', 
    '古詠君', '馮雲琳', '吳家鈺', 'Tiffany林可淇'
  ];

  const timeSlots = generateTimeSlots();
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Generate time slots from 9:00 AM to 11:15 PM
  function generateTimeSlots() {
    const slots = [];
    const start = new Date();
    start.setHours(9, 0, 0);
    const end = new Date();
    end.setHours(23, 15, 0);

    while (start <= end) {
      slots.push(new Date(start));
      start.setMinutes(start.getMinutes() + 15);
    }
    return slots;
  }

  function formatTime(date) {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  }

  return (
    <div className="flex flex-col">
      {/* Schedule Controls */}
      <div className="mb-4 flex items-center space-x-4">
        <input
          type="date"
          value={selectedDate.toISOString().split('T')[0]}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
          className="border p-2 rounded"
        />
        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Previous Day
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Next Day
          </button>
        </div>
      </div>

      {/* Schedule Legend */}
      <div className="mb-4 flex space-x-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-emerald-200 mr-2"></div>
          <span>Regular</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-pink-200 mr-2"></div>
          <span>Makeup</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-200 mr-2"></div>
          <span>Trial</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-200 mr-2"></div>
          <span>Cancel</span>
        </div>
      </div>

      {/* Schedule Grid */}
      <div className="overflow-auto">
        <div className="inline-block min-w-full shadow-sm">
          <div className="border-b border-gray-200">
            <table className="min-w-full">
              {/* Header */}
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                    Time
                  </th>
                  {teachers.map((teacher, index) => (
                    <th 
                      key={index}
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r"
                    >
                      {teacher}
                    </th>
                  ))}
                </tr>
              </thead>
              {/* Body */}
              <tbody>
                {timeSlots.map((slot, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-2 text-sm text-gray-500 border-r border-b">
                      {formatTime(slot)}
                    </td>
                    {teachers.map((teacher, tIndex) => (
                      <td 
                        key={tIndex}
                        className="px-4 py-2 text-sm border-r border-b min-h-[40px]"
                      >
                        {/* Lesson slots will go here */}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailySchedule;