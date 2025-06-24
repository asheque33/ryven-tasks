import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '../ui/button';

const EditClientModal = ({ isOpen, onClose, client, onEditClient }) => {
  const [formData, setFormData] = useState({
    marketer: '',
    date: '',
    time: '',
    duration: '',
    status: '',
  });

  // Convert time between formats
  const convertTime = (time, to24 = true) => {
    if (!time) return '';

    try {
      if (to24) {
        const [timeStr, period] = time.toLowerCase().split(' ');
        let [h, m] = timeStr.split(':');
        h = parseInt(h);
        if (period === 'PM' && h !== 12) h += 12;
        if (period === 'AM' && h === 12) h = 0;
        return `${h.toString().padStart(2, '0')}:${m}`;
      } else {
        let [h, m] = time.split(':');
        h = parseInt(h);
        const period = h >= 12 ? 'PM' : 'AM';
        if (h > 12) h -= 12;
        if (h === 0) h = 12;
        return `${h}:${m} ${period}`;
      }
    } catch (e) {
      console.error('Time conversion error:', e);
      return time;
    }
  };

  // Load data on open
  useEffect(() => {
    if (client && isOpen) {
      setFormData({
        marketer: client.marketer || '',
        date: client.date || '',
        time: convertTime(client.time || '', true),
        duration: client.duration || '',
        status: client.status || '',
      });
    }
  }, [client, isOpen]);

  // Handle changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Save data
  const handleSave = () => {
    // Check each field explicitly
    if (
      !formData.marketer ||
      !formData.date ||
      !formData.time ||
      !formData.duration ||
      !formData.status
    ) {
      alert('Please fill all fields');
      return;
    }

    onEditClient({
      ...client,
      marketer: formData.marketer,
      date: formData.date,
      time: convertTime(formData.time, false),
      duration: formData.duration,
      status: formData.status,
    });
    onClose();
  };

  if (!isOpen) return null;

  const inputClass =
    'w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34CCEB]';

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg p-6 w-96 shadow-xl'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-xl font-semibold'>Edit Client</h2>
          <button onClick={onClose} className='p-1 hover:bg-gray-100 rounded'>
            <X size={20} />
          </button>
        </div>

        <div className='space-y-4'>
          <div>
            <label className='text-sm font-medium'>Marketer NAMe</label>
            <input
              type='text'
              name='marketer'
              value={formData.marketer}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className='grid grid-cols-2 gap-3'>
            <div>
              <label className='text-sm font-medium'>Date</label>
              <input
                type='text'
                name='date'
                value={formData.date}
                onChange={handleChange}
                placeholder='DD/MM/YYYY'
                className={inputClass}
              />
            </div>
            <div>
              <label className='text-sm font-medium'>Time</label>
              <input
                type='time'
                name='time'
                value={formData.time}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className='text-sm font-medium'>Duration</label>
            <select
              name='duration'
              value={formData.duration}
              onChange={handleChange}
              className={inputClass}
            >
              <option value=''>Select duration</option>
              <option value='30 Minutes'>30 Minutes</option>
              <option value='1 Hour'>1 Hour</option>
              <option value='2 Hours'>2 Hours</option>
              <option value='6 Hours'>6 Hours</option>
            </select>
          </div>

          <div>
            <label className='text-sm font-medium'>Status</label>
            <select
              name='status'
              value={formData.status}
              onChange={handleChange}
              className={inputClass}
            >
              <option value=''>Select status</option>
              <option value='Active'>Active</option>
              <option value='Closed'>Closed</option>
            </select>
          </div>
        </div>

        <div className='flex gap-3 mt-6'>
          <Button onClick={onClose} variant='outline' className='flex-1'>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className='flex-1 bg-[#34CCEB] hover:bg-[#34CCEB]/90'
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditClientModal;
