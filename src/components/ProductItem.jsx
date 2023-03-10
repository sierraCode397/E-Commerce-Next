import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import Image from 'next/image';
import addTo from '@icons/bt_add_to_cart.svg';
import addEnd from '@icons/bt_added_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ producth }) => {
  const { addToCart, removeFromCart, state } = useContext(AppContext);

  const handleClick = (item) => {
    !state.cart.includes(item) ? addToCart(item) : removeFromCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      <Image loader={() => producth.images[0]} src={producth.images[0]} alt={producth.title} width={240} height={240} />
      <div className={styles['product-info']}>
        <div>
          <p>${producth.price}</p>
          <p>{producth.title}</p>
        </div>
        <button
          onClick={() => handleClick(producth)}
          className={styles['container-Addto']}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleClick(producth);
            }
          }}
        >
          {state.cart.includes(producth) ? <Image src={addEnd} alt="add-to-card" /> : <Image src={addTo} alt="add-to-card" />}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
