import React, { useContext } from 'react';
import Head from 'next/head';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  const { state, sumTotal, formattedDate } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles['Checkout-container']}>
          <h1 className={styles['title-checkout']}>My order checkout</h1>
          <div className={styles['Checkout-content']}>
            <div className={styles['order-checkout']}>
              <p>
                <span>{formattedDate}</span>
                <span>{state.cart.length} Articulos</span>
              </p>
              <p>${sumTotal()}</p>
            </div>
          </div>
          {state.cart.map((product) => (
            <OrderItem product={product} key={`orderItem-${product.id}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Checkout;
