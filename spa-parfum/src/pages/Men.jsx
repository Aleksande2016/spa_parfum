import React, { useEffect, useRef, useState } from 'react';

import GoodsItem from '../Components/GoodsItem';

const Men = () => {
  const ul = useRef();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/goods')
      .then((db) => db.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="goods">
      {data.length > 0 ? (
        <ul ref={ul} className="goods__items">
          {data.map((goods, id) => (
            <GoodsItem key={goods.id} goods={goods} />
          ))}
        </ul>
      ) : (
        <h3>Loading.....</h3>
      )}
    </div>
  );
};

export default Men;
