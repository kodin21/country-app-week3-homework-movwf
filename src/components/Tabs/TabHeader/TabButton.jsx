/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function TabButton({ setCurrentTab, tabName, tabSelector }) {
  return (
    <div
      className="w-32 h-full border-r-2 flex flex-col items-center justify-end rounded-tl-lg hover:bg-gray-100 cursor-pointer outline-none"
      role="tab"
      tabIndex="0"
      onClick={() => setCurrentTab(tabSelector)}
    >
      <span className="h-10 flex flex-col justify-center">{tabName}</span>
      <div className={`h-1 w-full bg-${"red"}-500`}> </div>
    </div>
  );
}

export default TabButton;
