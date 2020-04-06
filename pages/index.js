import Head from "next/head";
import Hero from "../components/hero";

const Home = () => (
  <div className="text-sans">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="w-full text-gray-900">
      <Hero />

      <div className="max-w-4xl mx-auto pt-20 py-auto pb-8 flex flex-row flex-wrap justify-around">
        <a
          href="/projects"
          className="pt-4 px-5 pb-6 w-64 text-left no-underline text-gray-800 border border-gray-400 hover:border-blue-500"
        >
          <h3 className="m-0 text-brand text-lg font-bold">Projects &rarr;</h3>
          <p className="m-0 pt-3 py-0 pb-0 text-sm text-gray-500">
            Find out about my projects.
          </p>
        </a>
      </div>
    </div>
  </div>
);

export default Home;
