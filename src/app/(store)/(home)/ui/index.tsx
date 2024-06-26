import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from 'src/models/product';
import { toCurrency } from 'src/utils';

interface StateProps {
  highlightedProduct: Product;
  otherProducts: Product[];
}

type HomeUiProps = StateProps;

export const HomeUi: React.FC<HomeUiProps> = ({ ...rest }) => (
  <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
    <Link
      href={`/product/${rest.highlightedProduct.id}`}
      className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
    >
      <Image
        src={rest.highlightedProduct.image}
        className="group-hover:scale-105 transition-transform duration-500"
        width={920}
        height={920}
        quality={100}
        alt=""
      />
      <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
        <span className="text-sm truncate">
          {rest.highlightedProduct.title}
        </span>
        <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
          {toCurrency(rest.highlightedProduct.price)}
        </span>
      </div>
    </Link>
    {rest.otherProducts &&
      rest.otherProducts.length !== 0 &&
      rest.otherProducts.map((product, index) => (
        <React.Fragment key={`${product.id}-${index + 1}`}>
          <Link
            href={`/product/${product.id}`}
            className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
          >
            <Image
              src={product.image}
              className="group-hover:scale-105 transition-transform duration-500"
              width={920}
              height={920}
              quality={100}
              alt=""
            />
            <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {toCurrency(product.price)}
              </span>
            </div>
          </Link>
        </React.Fragment>
      ))}
  </div>
);
