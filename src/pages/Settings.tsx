import React from 'react';
import { Save } from 'lucide-react';

const Settings = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Company Information</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Enter company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Enter email address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <textarea
                className="w-full border rounded-lg px-3 py-2"
                rows={3}
                placeholder="Enter company address"
              />
            </div>
          </div>

          <div className="mt-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
              <Save className="w-5 h-5 mr-2" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;