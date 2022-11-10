export default function Nav() {
    return (
        <nav className='bg-gray-800'>   
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='relative flex items-center justify-between h-16'>
                    <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                        {/* Mobile menu button*/}
                        <button type='button' className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' aria-controls='mobile-menu' aria-expanded='false'>
                            <span className='sr-only'>Open main menu</span>
                            {/* Icon when menu is closed. */}
                            {/* Menu open: "hidden", Menu closed: "block" */}   
    </button>
                    </div>
                    <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                        <div className='flex-shrink-0 flex items-center'>
                            <img className='block lg:hidden h-8 w-auto' src='/images/logo.png' alt='SWSC-MUN' />
                            <img className='hidden lg:block h-8 w-auto' src='/images/logo.png' alt='SWSC-MUN' />
                        </div>
                        <div className='hidden sm:block sm:ml-6'>
                            <div className='flex space-x-4'>   
                                <a href='#' className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Home</a>
                                <a href='#' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>About</a>
                                <a href='#' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Committees</a>
                                <a href='#' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Resources</a>
                                <a href='#' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}