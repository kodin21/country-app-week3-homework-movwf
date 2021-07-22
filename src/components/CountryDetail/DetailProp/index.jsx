import React from 'react';

function DetailProp({ title, value }) {
  return (
    <span className="text-md font-semibold">
      {title} : <span className="font-normal">{value}</span>
    </span>
  );
}

export default DetailProp;
