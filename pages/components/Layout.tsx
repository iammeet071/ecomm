import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
type Props = {
  children: ReactNode;
  title: ReactNode;
};

export default function Layout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Ecommerce" : "Ecommerce"}</title>
        <meta name='description' content='Ecommerce Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col justify-between min-h-screen '>
        <header>
          <nav className='flex items-center justify-between h-12 px-4 shadow-md'>
            <Link legacyBehavior href='/'>
              <a className='text-lg font-bold'>Ecomm</a>
            </Link>
            <div>
              <Link href='/cart' className='p-2 font-bold'>
                Cart
              </Link>
              <Link href='/login' className='p-2 font-bold'>
                Login
              </Link>
            </div>
          </nav>
        </header>

        <main className='container m-auto mt-4'>{children}</main>
        <footer className='flex items-center justify-center h-10 font-medium shadow-inner '>
          Copyright © 2023 Ecommerce
        </footer>
      </div>
    </>
  );
}
