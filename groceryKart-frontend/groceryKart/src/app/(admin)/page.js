
const AdminPage = () => {
  return (
    
  <div className="flex min-h-screen">
    {/* SIDEBAR */}
    <aside className="w-64 bg-primary text-white p-6 hidden md:block">
      <h1 className="text-2xl font-bold mb-10 text-center">GroceryKart</h1>
      <nav className="space-y-4">
        <a className="sidebar-link block px-4 py-2 rounded hover:bg-accent cursor-pointer">Dashboard</a>
        <a className="sidebar-link block px-4 py-2 rounded hover:bg-accent cursor-pointer">Product Management</a>
        <a className="sidebar-link block px-4 py-2 rounded hover:bg-accent cursor-pointer">User Management</a>
        <a className="sidebar-link block px-4 py-2 rounded hover:bg-accent cursor-pointer">Order Management</a>
        <a className="sidebar-link block px-4 py-2 rounded hover:bg-accent cursor-pointer">Log Out</a>
      </nav>
    </aside>
    
    {/* MAIN CONTENT */}
    <main id="mainContent" className="flex-1 p-6 transition-transform duration-300">

      {/* HEADER */}
      <h2 className="text-3xl font-bold mb-6">This is admin Layout.js</h2>
      
    </main>
  </div>

  )
}

export default AdminPage