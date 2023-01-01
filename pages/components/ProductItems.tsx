import React, { ReactNode } from "react";
import Link from "next/link";
type Props = {
  product: {
    name: string;
    slug: string;
    category: string;
    image: string;
    price: number;
    brand: string;
    rating: number;
    numReviews: number;
    countInStock: number;
    description: string;
  };
};
function ProductItems({ product }: Props) {
  return (
    <div className='card'>
      <Link href={`/product/${product.slug}`} legacyBehavior>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className='rounded shadow'
          />
        </a>
      </Link>
      <div className='flex flex-col items-center justify-center p-5'>
        <Link href={`/product/${product.slug}`} legacyBehavior>
          <a>
            <h2 className='text-lg font-medium'>{product.name}</h2>
          </a>
        </Link>
        <p className='mb-2 font-medium'>{product.brand}</p>
        <p className='font-medium'>${product.price}</p>
        <button className='font-medium primary-button' type='button'>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductItems;
