import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Body from "../../components/Body/Body";
import { Suspense } from "react";
import Spiner from "../../helprs/Spinner/Spiner";

function Home(props) {
  return (
    <>
      <Header />
      <Suspense fallback={<Spiner />}>
        <Body />
      </Suspense>
      <Footer />
    </>
  );
}

export default Home;
