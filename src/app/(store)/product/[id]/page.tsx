import React from 'react';
import { Product } from 'src/models/product';
import { api } from 'src/services/api';
import { ProductUi } from './ui';

interface ProductPagePros {
  params: {
    id: string;
  };
}

const ProductPage: React.FC<ProductPagePros> = async ({ params }) => {
  const handleGetProduct = async (id: string): Promise<Product> => {
    const response = await api(`/products/${id}`, {
      cache: 'no-store',
      // next: {
      //   revalidate: 60 * 60,
      // },
    });

    const product = await response.json();

    return product;
  };

  const product = await handleGetProduct(params.id);

  return <ProductUi product={product} />;
};

export default ProductPage;
