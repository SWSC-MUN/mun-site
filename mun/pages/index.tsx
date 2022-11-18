import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SWSC-MUN</title>
        <meta name="description" content="SWSC Model United Nations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Nav />
      <main className={styles.main}>
        <div className="container">
          <div className="bg-[url('/home.jpg')] bg-center bg-fixed absolute w-screen h-screen blur-sm"></div>

          <div className="bg-black bg-opacity-50 relative w-screen h-screen z-50">
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className="text-5xl font-bold text-center text-white m-2">
                Welcome to the SWSC-MUN MMXXII
              </h1>
              <h2 className="text-2xl font-bold text-center text-white m-2">
                MMXXII SWSC-MUN will be held on 21th to 23th of December, 2022
              </h2>
              <h2 className="text-2xl font-bold text-center text-white m-2">
                Registration is now open!
              </h2>
              <a
                href="https://forms.gle/6Z7Z7Z7Z7Z7Z7Z7Z7"
                target="_blank"
                rel="noreferrer"
                className="bg-orange-600 hover:bg-orange-400 text-white px-5 py-2 rounded-md text-m font-medium m-10"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>

        {
          // Welcome to SWSC-MUN
        }

        {
          // Message from secretary general
        }
        <div className="bg-white -screen border-b-4 border-white p-10 pt-20">
          <div className="h-full p-5">
            <h1 className="text-5xl font-bold text-black mb-10">
              Letter from the Secretary General
            </h1>
            <h2 className="text-2xl font-bold text-black">
              Dear Delegates,
            </h2>
            <br/>
            <h2 className="text-2xl font-bold text-black">
              It is my great pleasure to welcome you to the 2022 SWSC-MUN. I am
              honored to serve as the Secretary General of this conference. I am
              confident that this conference will be a great success and will be
              a memorable experience for all of us. I am looking forward to
              meeting you all in December.
            </h2>
            <h2 className="text-2xl font-bold text-black">
              Sincerely,
            </h2>
            <h2 className="text-2xl font-bold text-white">
              Secretary General
            </h2>
          </div>
          <div></div>
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
        <div className="bg-black-900 bg-opacity-50 w-screen p-10">
          <div className="grid grid-cols-3 justify-center h-full">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-5xl font-bold text-center text-white">
                Contact Us
              </h1>
            <div className="flex mt-5">
              <a href="https://www.facebook.com/SWSCMUN">
                <Image
                  src="/facebook.svg"
                  alt="facebook"
                  width={50}
                  height={50}
                />
              </a>
              <a href="https://www.instagram.com/SWSCMUN_">
                <Image 
                  src="/instagram.svg"
                  alt="instagram"
                  width={50}
                  height={50}
                />
                </a>
            </div>
            </div>
            {/* <h2 className="text-2xl font-bold text-center text-white">
              Email:
            </h2>
            <h2 className="text-2xl font-bold text-center text-white"></h2> */}
          </div>
        </div>
      </main>
    </div>
  );
}
