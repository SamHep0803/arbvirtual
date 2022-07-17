import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-main-img bg-no-repeat bg-cover bg-center">
      <div className="flex backdrop-blur-[2px] bg-opacity-60 bg-black text-zinc-200 font-sans min-h-screen min-w-full flex-col items-center justify-center py-2">
        <Head>
          <title>Arabian Virtual Airline</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <Image
            src="/logo.png"
            alt="Arabian Virtual Airline"
            width={200}
            height={200}
          />
          <h1 className="text-6xl ">
            Welcome to{" "}
            <span className="text-[#ffcb52]">
              Arabian Virtual.
            </span>
          </h1>

          <p className="mt-3 text-2xl">
            Get started by registering below. &darr;
          </p>

          <div className="p-4 flex max-w-xs flex-wrap items-center justify-between sm:w-full">
            <a
              href="https://vamsys.io/register/arabian"
              className="mt-2 text-white rounded-xl border-2 border-[#ff9320] w-32 px-4 py-3 text-left hover:bg-[#ff9320] focus:bg-[#ff9320] transition"
            >
              <h3 className="text-2xl font-normal text-center">Register</h3>
            </a>
            <a
              href="https://vamsys.io/login/arabian"
              className="mt-2 text-white rounded-xl border-2 border-[#ff9320] w-32 px-4 py-3 text-left hover:bg-[#ff9320] focus:bg-[#ff9320] transition"
            >
              <h3 className="text-2xl font-normal text-center">Login</h3>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
