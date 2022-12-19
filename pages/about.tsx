import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import People from "../components/People";
export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
      </Head>


      <div className="bg-black top-0 sm:fixed bg-fixed bg-top absolute z-50 left-0 w-screen ">

        <Nav />
      </div>
      <main className="bg-white">
        <div className="bg-[url('/dateam.jpg')] bg-center bg-fixed w-screen h-screen blur-sm"></div>
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

            <People name="Puskar Singh Dhami" imageUrl="/gensec.jpg" post="General Secretary">
              <h1>
                I am the secretary general Puskar Dhami pursuing Bachelor’s degree in business management in the 4th semester in bachelor in southwestern state college.
                I am pleased and honored to introduce you to the Southwestern State College Model United Nations (SWSC MUN). Model United Nations also known as Model UN or MUN is an educational simulation and/or academic activity in which students can learn about diplomacy, international relations, and the United Nations
                It will be a great pleasure to see you at the SWSCMUN conference.
              </h1>
            </People>
          </div>
          <div className="sm:flex justify-center sm:m-10">
            <People name="Nikita Dahal" imageUrl="/nikita.jpg" post="Under Secretary General">
              <h1>
                I am Nikita Dahal, dedicated to swscmun as Under secretary general pursuing +2 degree in Science at southwestern state college.
                I am glad to introduce you to the Southwestern State College Model United Nations (SWSC MUN).  As diplomacy, international relations, and the United Nations are burning topics,
                We will come up with logics,debates and much more fun events to learn diplomacy, International Issues and United Nations at the MUN .Hope to see you at the SWSCMUN conference.
              </h1>
            </People>
          </div>
          <div className="sm:flex justify-center sm:m-10">

            <People name="Anuja Dhital" imageUrl="/anuja.jpg" post="Under Secretary">
              <h1>
                <p>
                  I am Anuja Dhital, acting as under secretary currently studying in at southwestern state college.
                  SWSC-MUN is the platform where one can learn about the way United Nations works and how it is important for the world to be a better place.
                  We actively try to solve real-world problems and come up with solutions to them.
                </p>
              </h1>
            </People>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
