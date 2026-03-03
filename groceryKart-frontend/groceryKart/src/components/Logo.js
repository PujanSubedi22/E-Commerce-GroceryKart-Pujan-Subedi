import { FaShoppingBag } from "react-icons/fa"
const Logo = () => {
  return (
        <div className="flex items-center gap-2 justify-center">
          <FaShoppingBag className="text-green-600 text-3xl" />
          <h1 className="text-2xl font-bold text-green-600">
            GroceryKart
          </h1>
        </div>
  )
}

export default Logo