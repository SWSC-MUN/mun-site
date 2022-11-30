import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Link from "next/link";

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
              <h1 className="text-5xl font-bold font-900 text-center text-white m-2 font-pop">
                Welcome to the SWSC-MUN MMXXII
              </h1>
              <h2 className="text-2xl font-bold text-center text-white m-2">
                MMXXII SWSC-MUN will be held on 21th to 23th of December, 2022
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
          <div className="grid grid-cols-2">
            <div className="h-full p-5">
              <h1 className="text-5xl font-bold text-black mb-10">
                Letter from the Secretary General
              </h1>
              <h2 className="text-2xl font-bold text-black">Dear Delegates,</h2>
              <br />
              <h2 className="text-2xl font-bold text-black">
                Dear delegates and advisors, It is with great pride and
                excitement that we formally invite you to the Southwestern State
                College's annual Model United Nations Conference! <br /> <br />
              SWSCMUN is a premier Model UN conference in which students from
              all over the Nepal come together to solve the most pressing issues
              facing society. <br /> 
               This year’s conference will be held from 21th to
              23th January, 2023, in-person.today.
              </h2>
            </div>
          <div className="w-full h-full flex items-center justify-center mb-24">
            <Image src="/space-bg.jpg" alt="home" width={1000} height={1000} className="rounded-xl"/>
          </div>
          </div>
          <div className="h-full p">
            <h2 className="text-2xl font-bold text-black">
              <br /> <br />  At its core, SWSCMUN is planned,
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
              "placeholder" argued the pros and cons of nuclear energy in the
              International Atomic Energy Agency, and even reacted to a flurry
              of assassinations witnessed in the Historical Committee! Attendees
              also enjoyed inspiring keynote addresses by Nazli Choucri,
              Professor of Political Science at MIT and leading researcher in
              international relations and cyber politics, as well as Richard B.
              Freeman, Faculty co-Director of the Labor and Worklife Program at
              the Harvard Law School. Delegates also enjoyed a well-deserved
              respite at the Delegate Dance social night. We pride ourselves in
              hosting smaller committee sizes. This allows our attendees more
              freedom to contribute and distinguish themselves in their
              individual committee sessions. MITMUNC offers its attendees a
              truly unique opportunity to immerse themselves in a demanding
              intellectual environment, exposed to the ideas of others and
              tasked to employ the art of negotiation to pass meaningful
              resolutions. Having experienced MITMUNC as chairs, then as
              Secretariat members and Secretaries-General, we are both humbled
              and thrilled to guide MITMUNC into its best conference yet. I now
              invite you to explore our brand new website to learn more about
              our conference. Do not hesitate in contacting us should you
              encounter any doubts along the way. Best of luck in the path
              ahead! Sincerely, Jo Nikolova and Diane Zhang Secretaries-General
              MIT Model United Nations Conference XV 2023
            </h2>
            <h2 className="text-2xl font-bold text-black">Sincerely,</h2>
            <h2 className="text-2xl font-bold text-white">Secretary General</h2>
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
        <div className="bg-black-900 bg-opacity-50 w-screen p-10">
          <div className="grid grid-cols-3 justify-center h-full">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl font-bold text-center text-white">
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
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold text-center text-white">
                Email:{" "}
                <Link
                  href="mailto:swscmun@gmail.com"
                  className="text-blue-600 hover:text-blue-900"
                >
                  swscmun@gmail.com
                </Link>
              </h2>

              <h2 className="text-2xl font-bold text-center text-white mt-4">
                Phone: {""}
                <Link
                  href="phone:123456789"
                  className="text-lg text-blue-600 hover:text-blue-900">123456</Link>
              </h2>
            </div>

            <div className="flex justify-center items-center">
              <h2 className="text-2xl font-bold text-center text-white">
                Links
                <div className="flex flex-col text-lg p-5 text-slate-400 ">

                <Link href="/sponsors" className="hover:text-slate-200">Sponsors</Link>

                <Link href="/committees" className="hover:text-slate-200">Committee</Link>
                </div>
              </h2>
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
