import Link from 'next/link';
import { useRouter } from 'next/router';



export default function Nav() {
  const router = useRouter();
  const path = router.pathname;

  return (
    <nav className="bg-black top-0 border-black-500 hidden sm:block">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-[80px]">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {/* Menu open: "hidden", Menu closed: "block" */}
            </button>
          </div>
          <div className="flex-1 flex items-center sm:items-stretch sm:justify-start justify-between">
            <div className="flex-shrink-0 flex items-center">
             {
//<Image
 //               className="block lg:hidden h-8 w-auto"
  //              src="/images/logo.png"
   //             alt="SWSC-MUN"
    //          />
             } 
     {
//<img
 //               className="hidden lg:block h-8 w-auto"
  //              src="/images/logo.png"
   //             alt="SWSC-MUN"
    //          />
     }         
            </div>
            <div className="sm:ml-6">
              <div className="sm:block flex flex-col items-center space-x-8 ">
                <Link
                  href="/"
                  className={path === '/' ? "active": "unactive"}
                >
                  Home
                </Link>
                <Link href="/about" className={path === '/about' ? "active": "unactive"}>
                 About 
                  </Link>
                <Link
                  href="/register"
                  className={path === '/register' ? "active": "unactive"}
                >
                  Register
                </Link>
                {/* <a
                  href="#"
                  className="text-gray-300 hover:border-orange-600 border-solid border-2 hover:text-white px-3 py-2 rounded-md text-sm font-medium"

                >
                  About
                </a> */}
                {/* <Link
                  href="#"
                  className={path === '/committees' ? "active": "unactive"}

                >
                  Committees
                </Link> */}
                <Link
                  href="/sponsors"
                  className={path === '/sponsors' ? "active": "unactive"}
                >
                  Sponsors
                </Link>
                <Link
                  href="/faq"
                  className={path === '/faq' ? "active": "unactive"}

                >
                 FAQ 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
