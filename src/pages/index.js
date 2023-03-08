/* import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] }) */
import ProductList from '@containers/ProductList';

export default function Home() {
  return (
    <>
      <ProductList />
    </>
  );
}
