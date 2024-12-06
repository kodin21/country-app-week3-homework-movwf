/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function BackButton({ setCurrentTab }) {
  return (
    <span
      className="w-16 text-lg font-bold mb-4 outline-none"
      role="button"
      tabIndex="0"
      onClick={() => {
        setCurrentTab('country-list');
      }}
    >
      {'< Back'}
    </span>
  );
}

export default BackButton;
