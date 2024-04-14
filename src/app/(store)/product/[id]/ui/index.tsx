import React from 'react';
import Image from 'next/image';
import { Product } from 'src/models/product';
import { toCurrency } from 'src/utils';

interface stateProps {
  product: Product;
}

type ProductUiProps = stateProps;

export const ProductUi: React.FC<ProductUiProps> = ({ ...rest }) => (
  <div className="relative grid max-h-[860px] grid-cols-3">
    <div className="col-span-2 overflow-hidden">
      <Image
        className="relative"
        src={rest.product.image}
        alt=""
        width={1000}
        height={1000}
      />
    </div>
    <div className="flex flex-col justify-center px-12">
      <h1 className="text-3xl font-bold leading-tight">{rest.product.title}</h1>
      <p className="mt-2 leading-relaxed text-zinc-400">
        {rest.product.description}
      </p>
      <div className="mt-8 flex items-center gap-3">
        <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
          {toCurrency(rest.product.price)}
        </span>
        <span className="text-sm text-zinc-400">{`Em 12x s/ juros de ${toCurrency(rest.product.price / 12)}`}</span>
      </div>
      <div className="mt-8 space-y-4">
        <span className="block font-semibold">Tamanhos</span>
        <div className="flex gap-2">
          <button
            type="button"
            className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
          >
            P
          </button>
          <button
            type="button"
            className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
          >
            M
          </button>
          <button
            type="button"
            className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
          >
            G
          </button>
          <button
            type="button"
            className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
          >
            GG
          </button>
          <button
            type="button"
            className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
          >
            XL
          </button>
        </div>
      </div>
      <button
        type="button"
        className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      >
        Adicionar ao carrinho
      </button>
    </div>
  </div>
);
