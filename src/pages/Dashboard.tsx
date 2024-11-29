import React from 'react';
import { Users, Package, FileText, DollarSign } from 'lucide-react';
import { mockCustomers, mockProducts, mockInvoices } from '../lib/mock-data';

const DashboardCard = ({ title, value, icon: Icon, color }: any) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
      </div>
      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const totalRevenue = mockInvoices.reduce((sum, invoice) => sum + invoice.total, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Customers"
          value={mockCustomers.length}
          icon={Users}
          color="bg-blue-500"
        />
        <DashboardCard
          title="Total Products"
          value={mockProducts.length}
          icon={Package}
          color="bg-green-500"
        />
        <DashboardCard
          title="Total Invoices"
          value={mockInvoices.length}
          icon={FileText}
          color="bg-purple-500"
        />
        <DashboardCard
          title="Total Revenue"
          value={`$${totalRevenue.toFixed(2)}`}
          icon={DollarSign}
          color="bg-yellow-500"
        />
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <p className="text-gray-600">No recent activity to display.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;