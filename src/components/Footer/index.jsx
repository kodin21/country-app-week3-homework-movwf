import React from 'react';

function Footer() {
  return (
    <div className="h-1/12 mt-2">
      <span className="font-light">Created by</span>
      <a href="https://github.com/movwf" className="ml-1 text-sm">
        MOVWF
      </a>
      <span className="text-xs">{' - 2021'}</span>
    </div>
  );
}

export default Footer;
