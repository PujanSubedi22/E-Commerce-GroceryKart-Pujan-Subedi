
const Footer = () => {
  return (
  <footer className="bg-[#0F3938] text-gray-300 mt-20 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-teal-800 pb-12">
        {/* Branding */}
        <div className="space-y-4">
          <h3 className="text-2xl font-extrabold text-white">Grocery<span className="text-accent">Kart</span></h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Your one-stop shop for all household provisions. From authentic spices to daily staples, quality guaranteed.
          </p>
          <div className="flex space-x-4 pt-4">
            {/* Facebook */}
            <a href="#" className="w-10 h-10 bg-teal-900 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition">
              <i className="fa-brands fa-facebook-f text-xl" />
            </a>
            {/* Instagram */}
            <a href="#" className="w-10 h-10 bg-teal-900 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition">
              <i className="fa-brands fa-instagram text-xl" />
            </a>
            {/* Twitter (X) */}
            <a href="#" className="w-10 h-10 bg-teal-900 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition">
              <i className="fa-brands fa-x-twitter text-xl" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-accent  transition">Home</a></li>
            <li><a href="#" className="hover:text-accent  transition">About Us</a></li>
            <li><a href="#" className="hover:text-accent  transition">Shop Products</a></li>
            <li><a href="#" className="hover:text-accent  transition">Our Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6">Support</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-accent transition">Track Order</a></li>
            <li><a href="#" className="hover:text-accent transition">Return Policy</a></li>
            <li><a href="#" className="hover:text-accent transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-accent transition">Terms of Use</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Subscribe for offers on new arrivals.</p>
          <div className="flex flex-col space-y-3">
            <input type="email" placeholder="Email Address" className="px-4 py-3 bg-teal-900 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-accent border border-teal-800" />
            <button className="bg-accent hover:bg-yellow-600 text-white px-4 py-3 rounded-lg font-bold transition">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2025 GroceryKart. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">Cash on Delivery</span>
          <span className="hover:text-white cursor-pointer">Khalti</span>
          <span className="hover:text-white cursor-pointer">Credit Card</span>
        </div>
      </div>
    </div>
  </footer>

  )
}

export default Footer