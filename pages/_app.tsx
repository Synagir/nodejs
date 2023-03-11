import { AppProps } from 'next/app';
import React from 'react';

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default app;
