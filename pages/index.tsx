import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SWSC-MUN | Model United Nations</title>
        <meta name="description" content="SWSC Model United Nations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black top-0 sm:fixed absolute z-50 left-0 w-screen ">

        <Nav />
      </div>
      <main>
        <div className="container">
          <div className="bg-[url('/home.jpg')] bg-center bg-fixed w-screen h-screen blur-sm"></div>

          <div className="bg-black bg-opacity-50 absolute top-0 w-screen h-screen z-20">
            <div className="flex flex-col justify-center items-center h-full mt-5">
              <h1 className="text-5xl font-bold font-900 text-center text-white m-2 font-pop">
                Welcome to the SWSC-MUN MMXXIII
              </h1>
              <h2 className="text-2xl font-bold text-center text-white m-2">
                SWSC-MUN MMXXIII  will be held on 19th to 21th of January, 2023
              </h2>
              <h2 className="text-2xl font-bold text-center text-white m-2">
                Registration is now open!
              </h2>
              <Link
                href="/register"
                className="bg-orange-600 hover:bg-orange-400 text-white px-5 py-2 rounded-md text-m font-medium m-10"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>

        {
          // Welcome to SWSC-MUN
        }

        {
          // Message from secretary general
        }
        <div className="bg-white w-screen border-b-4 border-white p-10 pt-20">
          <div className="grid sm:grid-cols-2">
          <div className="w-full h-full flex items-center justify-center mb-8 p-10">
            <Image src="/gensec.jpg" alt="home" width={300} height={300} className="rounded-full"/>
          </div>
            <div className="h-full p-2">
              <h1 className="text-2xl sm:text-4xl font-bold text-blue-600 mb-10">
                Letter from the Secretary General
              </h1>
              <h2 className="text-lg font-bold text-orange-600">Dear Delegates,</h2>
              <br />
              <h2 className="text-lg font-bold text-black">
                It is with great pride and
                excitement that we formally invite you to the Southwestern State
                College’s annual Model United Nations Conference! <br /> <br />
              SWSCMUN is a premier Model UN conference in which students from
              all over the Nepal come together to solve the most pressing issues
              facing society. <br /> 
               This year’s conference will be held from 21th to
              23th January, 2023, in-person.
              </h2>
            </div>
          </div>
          <div className="h-full sm:p-10">
            <h2 className="text-lg font-bold text-black">
              <p> At its core, SWSCMUN is planned,
              organized, and directed by a passionate and ambitious team of SWSC
              students that collectively form a diverse family of academic
              backgrounds and experiences. Our chairs and staff coordinate
              SWSCMUN’s committees from the ground up, posing questions and
              controversies that even the most experienced delegates will find
              challenging. Our dedicated Secretariat members complement the
              chairs and staff by overseeing all conference preparations, months
              in advance of the conference in order to ensure that our delegates
              walk away with one of the greatest experiences of their lives. In
              previous years, SWSCMUN delegates grappled with complicated human
              rights, economic, and environmental topics such as the
              placeholder argued the pros and cons of nuclear energy in the
              International Atomic Energy Agency. This year, the debate are going to even even intense. With
              the Russian-Ukraine conflict, the ongoing pandemic, and the rise of powerful Artificial Intelligence systems, delegates 
              will have a lot to discuss. 
              </p>
             <br/> 
             <p>
              SWSCMUN offers participants truly unique opportunity to immerse themselves in a demanding
              intellectual environment, exposed to the ideas of others and
              tasked to employ the art of negotiation to pass meaningful
              resolutions. Having experienced SWSCMUN as chairs, then as
              Secretariat members and Secretaries-General, we are both humbled
              and thrilled to guide SWSCMUN into its best conference yet. I now
              invite you to explore our brand new website to learn more about
              our conference. Do not hesitate in contacting us should you
              encounter any doubts along the way. Best of luck in the path
              ahead! Sincerely, Puskar Dhami Secretary-General
              SWSC Model United Nations Conference MMXXII 
              </p>
            </h2>
            <div className="flex flex-col items-end mt-10 text-blue-600">

              <h2 className="text-2xl font-bold">Sincerely,</h2>
              <h2 className="text-2xl font-bold">Secretary General</h2>
            </div>
          </div>

        </div>
        {
          // About
        }
        {/* <div className="bg-black w-screen h-screen border-b-4 border-white">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-5xl font-bold text-center text-white">About</h1>
            <h2 className="text-2xl font-bold text-center text-white">
              SWSC-MUN is a Model United Nations conference organized by the
              students of the School of World Studies and Culture, Shanghai
              International Studies University. The conference is held annually
              in December. The conference is a great opportunity for students to
              learn about the United Nations and international relations. The
              conference is also a great opportunity for students to meet new
              friends from all over the world.
            </h2>
          </div>
        </div> */}
        {
          // Contact
        }
        <Footer/>
      </main>
    </div>
  );
}