import Head from "next/head";
import Nav from "../components/Nav";
export default function About() {
  return (
    <div className="relative">
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
      </Head>

      <Nav />
      <main className="bg-white">
        {/* the team picture is currently not aviabale */}
        <div className="bg-[url('/team.jpg')] bg-center bg-fixed absolute w-screen h-screen blur-sm"></div>
        <div className="bg-black bg-opacity-50 relative w-screen h-screen z-50">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-5xl font-bold text-center text-white m-2">
              But what is SWSC-MUN?
            </h1>
          </div>
        </div>
        <div className="bg-white text-black p-10">
          <div className="h-full">
            <h1 className="text-5xl font-bold m-10">Who we are</h1>
            {/* <h2 className="text-2xl font-bold m-10">But what is SWSC-MUN?</h2> */}
            <div>
              <p className="text-xl m-10">
                SWSC-MUN is a Model United Nations conference hosted by the
                Southwest Student Council. We are a student-run organization
                dedicated to providing a platform for students to learn about
                international relations and diplomacy. We are a non-profit
                organization that is run by students, for students.
              </p>



            </div>
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
