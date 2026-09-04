import React from 'react';

function Table({ columns, data, striped = false }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
      <thead>
        <tr style={{ backgroundColor: '#f2f2f2', borderBottom: '2px solid #ddd' }}>
          {columns.map((col, index) => (
            <th key={index} style={{ padding: '10px', textAlign: 'left' }}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr 
            key={rowIndex} 
            style={{ 
              borderBottom: '1px solid #ddd',
              backgroundColor: striped && rowIndex % 2 === 0 ? '#f9f9f9' : 'white' 
            }}
          >
            {Object.values(row).map((val, valIndex) => (
              <td key={valIndex} style={{ padding: '10px' }}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;