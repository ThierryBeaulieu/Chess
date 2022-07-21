import React from 'react';

export default () => {
  return (
    <div style={{ display: 'grid' }}>
      {Array(64).map((_, index) => (
        <div
          key={index}
          style={{
            height: 10,
            width: 10,
            backgroundColor: index % 2 ? 'blue' : 'red',
          }}
        >
          {index}
        </div>
      ))}
    </div>
  );
};
