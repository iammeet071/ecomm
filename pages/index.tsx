import React from "react";
import Layout from "./components/Layout";
import ProductItems from "./components/ProductItems";
import { data } from "./utils/data";

function Home() {
  return (
    <Layout>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {data.product.map((product) => (
          <ProductItems product={product} key={product.slug}></ProductItems>
        ))}
      </div>
    </Layout>
  );
}

export default Home;
