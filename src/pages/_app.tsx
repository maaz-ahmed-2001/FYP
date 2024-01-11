import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "@/store";
// import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import FullPageSpinner from "@/components/FullPageSpinner";
import { usePathname, useRouter } from "next/navigation";
import useAuth from "@/utils/hooks/useAuth";
import AppWrapper from "@/components/AppWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* <Layout> */}
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
      {/* </Layout> */}
    </Provider>
  );
}
