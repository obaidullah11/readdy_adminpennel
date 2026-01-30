import React from 'react';

const Header = ({ title, subtitle, onMenuClick }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 fixed top-0 right-0 left-0 lg:left-64 z-10">
      <div className="flex items-center justify-between gap-4">
        {/* Hamburger Menu for Mobile */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden text-gray-600 hover:text-gray-900 p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Empty space */}
        <div className="flex-1"></div>

        {/* Right Side - User Profile */}
        <div className="flex items-center gap-2 sm:gap-6">
          {/* User Profile */}
          <div className="flex items-center gap-3">
            <div className="text-right hidden md:block">
              <p className="text-sm font-semibold text-gray-900">Admin User</p>
              <p className="text-xs text-gray-500">admin@reddyapp.com</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
              <img 
                src="https://ui-avatars.com/api/?name=Admin+User&background=f97316&color=fff&bold=true" 
                alt="Admin User"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
