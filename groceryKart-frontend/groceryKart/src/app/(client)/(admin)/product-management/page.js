import React from "react";
import Link from "next/link";
import { FaPlus, FaUpload, FaEdit, FaTrash, FaSearch } from "react-icons/fa";

const GroceryKartProductPage = ({ products = [] }) => {
  return (
    /* sm:ml-64 accounts for your fixed sidebar width */
    <main className="sm:ml-64 min-h-screen bg-gray-50 dark:bg-gray-950 transition-all duration-300">
      <div className="p-6 lg:p-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Product Inventory</h1>
            <p className="text-sm text-gray-500 mt-1">Manage and track your GroceryKart stock levels.</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 transition-sm">
              <FaUpload className="text-xs" />
              Export
            </button>
            <Link 
              href="/product-management/add" 
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors shadow-sm"
            >
              <FaPlus className="text-xs" />
              Add Product
            </Link>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm overflow-hidden">
          
          {/* Search Toolbar */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="relative w-full max-w-sm">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
              <input 
                type="text" 
                placeholder="Search inventory..." 
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-green-500 outline-none dark:bg-gray-800 dark:text-gray-200 transition-all"
              />
            </div>
          </div>

          {/* Product Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 font-medium border-b border-gray-200 dark:border-gray-800">
                <tr>
                  <th className="px-6 py-4 font-semibold">Product Name</th>
                  <th className="px-6 py-4 font-semibold">Category</th>
                  <th className="px-6 py-4 font-semibold">Price</th>
                  <th className="px-6 py-4 font-semibold">Stock Status</th>
                  <th className="px-6 py-4 text-right font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                
                {/* 1. Noodles Category */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Instant Egg Noodles (5-Pack)</td>
                  <td className="px-6 py-4">
                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-400">Noodles</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300 font-medium">Rs. 180.00</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span className="text-gray-600 dark:text-gray-400">120 Units</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3 text-gray-400">
                      <button className="hover:text-green-600 transition-colors"><FaEdit /></button>
                      <button className="hover:text-red-600 transition-colors"><FaTrash /></button>
                    </div>
                  </td>
                </tr>

                {/* 2. Bakery Category */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Whole Grain Sliced Bread</td>
                  <td className="px-6 py-4">
                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-400">Bakery</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300 font-medium">Rs. 95.00</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span className="text-gray-600 dark:text-gray-400">45 Units</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3 text-gray-400">
                      <button className="hover:text-green-600 transition-colors"><FaEdit /></button>
                      <button className="hover:text-red-600 transition-colors"><FaTrash /></button>
                    </div>
                  </td>
                </tr>

                {/* 3. Beverages Category */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Fresh Orange Juice 1L</td>
                  <td className="px-6 py-4">
                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-400">Beverages</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300 font-medium">Rs. 320.00</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      <span className="text-gray-600 dark:text-gray-400">8 Units (Low)</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3 text-gray-400">
                      <button className="hover:text-green-600 transition-colors"><FaEdit /></button>
                      <button className="hover:text-red-600 transition-colors"><FaTrash /></button>
                    </div>
                  </td>
                </tr>

                {/* 4. Meat Category */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Frozen Chicken Breast 1kg</td>
                  <td className="px-6 py-4">
                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-400">Meat</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300 font-medium">Rs. 850.00</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span className="text-gray-600 dark:text-gray-400">32 Units</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3 text-gray-400">
                      <button className="hover:text-green-600 transition-colors"><FaEdit /></button>
                      <button className="hover:text-red-600 transition-colors"><FaTrash /></button>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">Showing 1 to 4 of 120 products</p>
            <div className="flex items-center gap-1">
              <button className="px-3 py-1 text-xs border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400 transition-colors">Prev</button>
              <button className="px-3 py-1 text-xs bg-green-600 text-white rounded font-medium">1</button>
              <button className="px-3 py-1 text-xs border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400 transition-colors">2</button>
              <button className="px-3 py-1 text-xs border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400 transition-colors">Next</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GroceryKartProductPage;