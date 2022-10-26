import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Body from "../../components/Body/Body";
import { Suspense } from "react";

function Home(props) {
  return (
    <>
      <Header />
      <Suspense fallback={<div>loading...</div>}>
        <Body />
      </Suspense>
      <Footer />
    </>
  );
}

export default Home;
