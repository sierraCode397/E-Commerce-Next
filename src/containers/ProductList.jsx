import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import styles from '@styles/ProductList.module.scss';

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
	const products = useGetProducts(API);

	return (
		<section className={styles["main-container"]}>
			<div className={styles.ProductList}>
				{products.map((product) => (
						<ProductItem producth={product} key={product.id} />
					))}
			</div>
		</section>
	);
};

export default ProductList;


/* EN CASO DE SER NECESARIO, RESUELVE EL PROBLEMA DE ITEMS SIN IMAGENES*/

/* 
import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import styles from '@styles/ProductList.module.scss';

const API = "https://api.escuelajs.co/api/v1/products"

const ProductList = () => {
	const products = useGetProducts(API)

	return (
		<section className={styles["main-container"]}>
			<div className={styles.ProductList}>
				{products.map((product) => {
					if (product.images.length > 0 && product.images[0] !== "") {
						return	<ProductItem producth={product} key={product.id} />
					}
				})}	
			</div>
		</section>
	);
}

export default ProductList; */