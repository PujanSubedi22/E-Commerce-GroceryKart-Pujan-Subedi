
import navlinks from "@/constants/navlinks"
import { HOME_ROUTE } from "@/constants/routes"
import Link from "next/link";
import { FaAppleAlt, FaApplePay, FaBars, FaBox, FaMoon, FaShoppingBag, FaShoppingBasket, FaShoppingCart, FaStore, FaUser} from 'react-icons/fa';


const Header = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 sticky top-0 shadow-md">
  <div className="container mx-auto py-4 px-4">
    <div className="flex items-center justify-between">
      <h1 className="text-Xl font-bold text-primary">   
        <Link href={HOME_ROUTE} className="flex items-center gap-1">
        <FaShoppingBag /> Grocerykart
        </Link>
      </h1>
      
      {/*navbar*/}
      <nav className="hidden md:flex gap-5">
        {navlinks.map((navlink) => (
            <Link 
            key={navlink.route}
            href={navlink.route}
            className="text-gray-700 font-medium hover:text-primary dark:text-gray-300 dark:hover:text-primary">
                {navlink.label}
            </Link>

        ))}
      </nav>
      
      {/*-logo on navs*/}
      <div className="flex items-center">
        <button className="block md:hidden">
          <FaBars />
        </button>
        <button className="text-gray-700 p-1 dark:text-gray-300 hover:text-primary">
          <FaMoon/>
        </button>
        <button className="text-gray-700 p-1 dark:text-gray-300 hover:text-primary">
          <FaShoppingCart />
        </button>
        <button className="text-gray-700 p-1 dark:text-gray-300 hover:text-primary">
          <FaUser />
        </button>
      </div>
    </div>
  </div>
</header>

  )
}

export default Header