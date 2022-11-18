import Head from "next/head";
import Nav from "../components/Nav";
export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
      </Head>
      <Nav />
      <main className="bg-white">
        {/* the team picture is currently not aviabale */}
        <div className="bg-[url('/team.jpg')] bg-center bg-fixed absolute w-screen h-96 blur-sm"></div>
        <div className="bg-black bg-opacity-50 relative w-screen h-96 z-50">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-5xl font-bold text-center text-white m-2">
              About
            </h1>
            <h2 className="text-2xl font-bold text-center text-white m-2">
              But what is SWSC-MUN?
            </h2>
          </div>
        </div>
        <div className="bg-white text-black p-10">
          <div className="h-full">
            <h1 className="text-5xl font-bold m-10">Who we are</h1>
            <h2 className="text-2xl font-bold m-10">But what is SWSC-MUN?</h2>
          </div>
        </div>
        <div className="bg-white text-black p-10">
          <div className="h-full">
            <h1 className="text-5xl font-bold m-10">
              The Brains behind it all
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}
