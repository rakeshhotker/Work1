import {
  Fifth,
  First,
  Fourth,
  Navbar,
  Sixth,
  Third,
  Second,
} from "@/components";
import Head from "next/head";
function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
    </>
  );
}

export default Home;
