import React from 'react';
import { BarChart3, PieChart, TrendingUp } from 'lucide-react';
import { mockInvoices } from '../lib/mock-data';

const Reports = () => {
  const totalRevenue = mockInvoices.reduce((sum, invoice) => sum + invoice.total, 0);
  const paidInvoices = mockInvoices.filter(invoice => invoice.status === 'paid').length;
  const pendingInvoices = mockInvoices.filter(invoice => invoice.status === 'pending').length;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Reports</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Revenue</p>
              <h3 className="text-2xl font-bold mt-1">${totalRevenue.toFixed(2)}</h3>
            </div>
            <div className="p-3 rounded-full bg-blue-100">
              <TrendingUp className="w-6 h-6 text-blue-500" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Paid Invoices</p>
              <h3 className="text-2xl font-bold mt-1">{paidInvoices}</h3>
            </div>
            <div className="p-3 rounded-full bg-green-100">
              <BarChart3 className="w-6 h-6 text-green-500" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Pending Invoices</p>
              <h3 className="text-2xl font-bold mt-1">{pendingInvoices}</h3>
            </div>
            <div className="p-3 rounded-full bg-yellow-100">
              <PieChart className="w-6 h-6 text-yellow-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Revenue Overview</h2>
        <div className="h-64 flex items-center justify-center">
          <p className="text-gray-500">Chart visualization will be implemented here</p>
        </div>
      </div>
    </div>
  );
};

export default Reports;