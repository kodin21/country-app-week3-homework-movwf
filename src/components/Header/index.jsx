import React from 'react';

function Header() {
  return (
    <div className="h-1/6 w-full flex flex-col justify-center items-center">
      <img src="/logo.gif" alt="Logo" className="w-24 h-24 mb-5 hover:opacity-50" />
    </div>
  );
}

export default Header;
