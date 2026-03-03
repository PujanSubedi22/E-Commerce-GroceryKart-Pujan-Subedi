"use client";

const ProductForm = () => {
  return (
    <div><form className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
    {/* Product Name */}
    <div className="sm:col-span-2">
      <label className="block mb-2 text-sm font-semibold text-gray-700">Product Name *</label>
      <input 
        type="text" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none block w-full p-2.5 transition duration-200" 
        placeholder="Type product name" 
        required 
      />
    </div>

    {/* Brand */}
    <div className="w-full">
      <label className="block mb-2 text-sm font-semibold text-gray-700">Brand *</label>
      <input 
        type="text" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none block w-full p-2.5 transition duration-200" 
        placeholder="Product brand" 
        required 
      />
    </div>

    {/* Price */}
    <div className="w-full">
      <label className="block mb-2 text-sm font-semibold text-gray-700">Price *</label>
      <input 
        type="number" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none block w-full p-2.5 transition duration-200" 
        placeholder="Rs. 100" 
        required 
      />
    </div>

    {/* Category */}
    <div>
      <label className="block mb-2 text-sm font-semibold text-gray-700">Category *</label>
      <input 
        type="text" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none block w-full p-2.5 transition duration-200" 
        placeholder="e.g. Vegetables" 
        required 
      />
    </div>

    {/* Stock */}
    <div>
      <label className="block mb-2 text-sm font-semibold text-gray-700">Stock</label>
      <input 
        type="number" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none block w-full p-2.5 transition duration-200" 
        placeholder="10" 
      />
    </div>

    {/* Image Upload - Green Hover State */}
    <div className="sm:col-span-2">
      <label className="block mb-2 text-sm font-semibold text-gray-700">Product Images</label>
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center rounded-lg w-full bg-gray-50 border-2 border-dashed border-gray-300 cursor-pointer hover:bg-green-50 hover:border-green-400 transition duration-200 py-10">
          <svg className="w-8 h-8 mb-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"></path>
          </svg>
          <p className="mb-2 text-sm text-gray-500"><span className="font-semibold text-green-600">Click to upload</span> or drag and drop</p>
          <p className="text-xs text-gray-400">PNG, JPG (Max 5MB)</p>
        </div>
      </div>
    </div>

    {/* Description */}
    <div className="sm:col-span-2">
      <label className="block mb-2 text-sm font-semibold text-gray-700">Description</label>
      <textarea 
        rows="4" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none block w-full p-2.5 transition duration-200" 
        placeholder="Enter product details..."
      ></textarea>
    </div>
  </div>

  {/* Themed Submit Button */}
  <button 
    type="submit" 
    className="inline-flex items-center px-6 py-3 mt-6 text-sm font-bold text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-200 transition duration-200 active:scale-95"
  >
    Add Product
  </button>
</form></div>
  )
}

export default ProductForm