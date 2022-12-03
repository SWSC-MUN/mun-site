import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import  People  from "../components/People";
export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
      </Head>

 
      <div className="bg-black top-0 sm:fixed bg-fixed bg-center absolute z-50 left-0 w-screen ">

        <Nav />
      </div>
      <main className="bg-white">
        {/* the team picture is currently not aviabale */}
        <div className="bg-[url('/team.jpg')] bg-center bg-fixed w-screen h-screen blur-sm"></div>
        <div className="bg-black bg-opacity-50 absolute top-0 w-screen h-screen z-20">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-5xl font-bold text-center text-white m-2">
              But what is SWSC-MUN?
            </h1>
          </div>
        </div>
        <div className="bg-white text-black sm:p-10 p-2">
          <div className="h-full">
            <h1 className="text-5xl font-bold sm:m-10 m-5 mb-10 sm:text-center">
              Who we are
            </h1>
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
        <div className="bg-white text-black sm:p-10 p-5">
          <div className="h-full">
            <h1 className="text-5xl font-bold sm:m-10 mb-10 sm:text-center">
              The Brains behind it all
            </h1>
          </div>
          <div className="flex justify-center"> 

            <People name="Puskar Dhami" imageUrl="/gensec.jpg" post="General Secretary">
              <h1>
                Mr. Puskar is a BBA 3rd year student at Southwestern State College. 
                He is the current Secretary General of SWSC-MUN. He is a kind and energic soul
                who loves to help people. He is a very good debater and has won many awards in debate competitions.
              </h1>
              </People>
          </div>
          <div className="sm:flex justify-center sm:m-10">
              <People name="Usha Lama" imageUrl="/space-bg.jpg" post="Secretary">
              <h1>
                <p>Mr. Sushant is a BBA 3rd year student at Southwestern State College.</p>
                He is the current Deputy Secretary General of SWSC-MUN. He is a kind and energic soul
                who loves to help people. He is a very good debater and has won many awards in debate competitions.
              </h1>
              </People>
          </div>
          <div className="sm:flex justify-center m-10">
            <People name="Nikita Dahal" imageUrl="/space-bg.jpg" post="Under Secretary General">
              <h1>
                Mr. Sushant is a BBA 3rd year student at Southwestern State College.
                He is the current Deputy Secretary General of SWSC-MUN. He is a kind and energic soul
                who loves to help people. He is a very good debater and has won many awards in debate competitions.
              </h1>
              </People>

              <People name="Anuja Dhital" imageUrl="/space-bg.jpg" post="Under Secretary">
              <h1>
                <p>Mr. Sushant is a BBA 3rd year student at Southwestern State College.</p>
                He is the current Deputy Secretary General of SWSC-MUN. He is a kind and energic soul
                who loves to help people. He is a very good debater and has won many awards in debate competitions.
              </h1>
              </People>


          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
