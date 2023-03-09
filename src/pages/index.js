/* import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] }) */
import ProductList from '@containers/ProductList';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Commerce</title>
      </Head>
      <ProductList />
    </>
  );
}
