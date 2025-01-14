// import React, { useState, useEffect } from 'react';
// import React from 'react';

// const Age = () => {
//   const [age, setAge] = useState();

//   const tick = () => {
//     const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
//     const birthTime = new Date('1990-02-05T09:24:00');
//     setAge(((Date.now() - birthTime) / divisor).toFixed(11));
//   };

//   useEffect(() => {
//     const timer = setInterval(() => tick(), 25);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);
//   return <>{age}</>;
// };

const data = [
  // {
  //   key: 'age',
  //   label: 'Current age',
  //   value: <Age />,
  // },
  {
    key: 'US States',
    label: 'US States visited',
    value: 29,
    link: 'https://www.google.com/maps/d/u/0/edit?mid=1JFtnwx2Xmn0LXwSrUZsrqUnDvbCHmRI&ll=11.035647892249699%2C-34.1170242&z=3',
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 9,
    link: 'https://www.google.com/maps/d/u/0/edit?mid=1JFtnwx2Xmn0LXwSrUZsrqUnDvbCHmRI&ll=11.035647892249699%2C-34.1170242&z=3',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Los Angeles, CA',
  },
];

export default data;
