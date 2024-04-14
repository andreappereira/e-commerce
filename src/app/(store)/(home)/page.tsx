// 'use client';

import React from 'react';
import { api } from 'src/service/api';
import HomeUi from './ui';
import { Product } from 'src/models/product';

const Home: React.FC = async () => {
  const handleGetFeaturedProducts = async (): Promise<Product[]> => {
    const response = await api('/products/featured');

    const products = await response.json();

    return products;
  };

  const [highlightedProduct, ...otherProducts] =
    await handleGetFeaturedProducts();

  return (
    <HomeUi
      highlightedProduct={highlightedProduct}
      featuredProducts={otherProducts}
    />
  );
};

export default Home;
