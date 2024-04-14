// 'use client';

import React from 'react';
import { api } from 'src/services/api';
import { HomeUi } from './ui';
import { Product } from 'src/models/product';

const Home: React.FC = async () => {
  const handleGetFeaturedProducts = async (): Promise<Product[]> => {
    const response = await api('/products/featured', {
      cache: 'no-store',
    });
    const products = await response.json();

    return products;
  };

  const [highlightedProduct, ...otherProducts] =
    await handleGetFeaturedProducts();

  return (
    <HomeUi
      highlightedProduct={highlightedProduct}
      otherProducts={otherProducts}
    />
  );
};

export default Home;
