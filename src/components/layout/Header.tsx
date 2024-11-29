import React from 'react';
import { Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-600" />
          </div>
          <span className="text-sm font-medium text-gray-700">Admin User</span>
        </div>
      </div>
    </header>
  );
};

export default Header;