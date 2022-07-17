import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex bg-opacity-60 bg-black text-zinc-200 min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Arabian Virtual Airline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Image
          src="/logo.png"
          alt="Arabian Virtual Airline"
          width={400}
          height={200}
        />
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-yellow-500" href="https://nextjs.org">
            Arabian Virtual.
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by registering below. &darr;
        </p>

        <div className="p-8 flex max-w-xs flex-wrap items-center justify-between sm:w-full">
          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-2  rounded-xl bg-yellow-600 px-4 py-3 text-left hover:bg-yellow-700 focus:bg-yellow-700 transition"
          >
            <h3 className="text-2xl font-bold">Register</h3>
          </a>
          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-2 rounded-xl bg-yellow-600 px-4 py-3 text-left hover:bg-yellow-700 focus:bg-yellow-700 transition"
          >
            <h3 className="text-2xl font-bold">Login</h3>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
