import React from 'react';

function Flag({ url, name }) {
  return (
    <div className="w-56 h-32">
      <img src={url} alt={name} />
    </div>
  );
}

export default Flag;
