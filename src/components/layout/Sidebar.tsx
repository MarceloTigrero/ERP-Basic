import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Users, 
  Package, 
  FileText, 
  BarChart3, 
  Settings,
  LayoutDashboard
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Customers', path: '/customers' },
    { icon: Package, label: 'Products', path: '/products' },
    { icon: FileText, label: 'Invoices', path: '/invoices' },
    { icon: BarChart3, label: 'Reports', path: '/reports' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="w-64 bg-gray-900 min-h-screen p-4">
      <div className="text-white text-2xl font-bold mb-8 px-4">ERP System</div>
      <nav>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center text-gray-300 px-4 py-2 rounded-lg mb-2 hover:bg-gray-800 transition-colors ${
                isActive ? 'bg-gray-800 text-white' : ''
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;