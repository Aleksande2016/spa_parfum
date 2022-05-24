import React from 'react';

const GoodsItem = ({ goods }) => {
  const { id, title, price, image, category } = goods;
  console.log(goods);

  return (
    <li className="goods__item">
      <div className="goods__item__img">
        <img src={image} alt={title} />
      </div>
      <div className="goods__caption">
        <div className="goods__caption__subname">{category}</div>
        <div className="goods__caption__price">${price} $</div>
        <button type="button" id={id} className="goods__caption__btn">
          Добавить в корзину
        </button>
      </div>
    </li>
  );
};

export default GoodsItem;
