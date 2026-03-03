import Sidebar from "@/components/admin/Sidebar"

const AdminLayout = ({children}) => {
  return (
    <div>
        {children}
        <Sidebar/>
        
        </div>
  )
}

export default AdminLayout