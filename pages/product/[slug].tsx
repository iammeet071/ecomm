import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layout";
import { data } from "../utils/data";
import Link from "next/link";
import Image from "next/image";

function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.product.find((x) => x.slug == slug);
  if (!product) {
    return <div>Product Not found</div>;
  }
  return (
    <Layout title={product.name}>
      <div className='py-2 font-medium'>
        <Link href='/'>Back</Link>
      </div>
      <div className='grid md:grid-cols-4 md:gap-3'>
        <div className='md:col-span-2'>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout='responsive'
          ></Image>
        </div>
        <div className='font-medium'>
          <ul>
            <li>
              <h1 className='text-lg'>{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div>
          <div className='p-5 font-medium card'>
            <div className='flex justify-between mb-2'>
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className='flex justify-between mb-2'>
              <div>Status</div>
              <div>{product.countInStock > 0 ? "In stock" : "Unavailable"}</div>
            </div>
            <button className='w-full primary-button'>Add to cart</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductScreen;
