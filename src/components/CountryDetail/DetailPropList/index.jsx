import React from 'react';

function DetailPropList({ title, list, spreadKey }) {
  return (
    <span className="text-md font-semibold">
      {title} :
      <ul className="list-disc list-inside">
        {list?.map((element) => (
          <li key={spreadKey !== undefined ? element[spreadKey] : element} className="font-normal">
            {spreadKey !== undefined ? element[spreadKey] : element}
          </li>
        ))}
      </ul>
    </span>
  );
}

export default DetailPropList;
