import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav';

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
          <div className="bg-[url('/home.jpg')] bg-center absolute w-screen h-screen blur-sm">

        </div>

        <div className="bg-black bg-opacity-50 relative w-screen h-screen z-50">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-5xl font-bold text-center text-white">
              Welcome to the  SWSC-MUN MMXXII
            </h1>
            <h2 className="text-2xl font-bold text-center text-white">
               MMXXII SWSC-MUN will be held on 21th to 23th of December, 2022
            </h2>
            <h2 className="text-2xl font-bold text-center text-white">
              Registration is now open!
            </h2>
            <a href="https://forms.gle/6Z7Z7Z7Z7Z7Z7Z7Z7" target="_blank" rel ="noreferrer" className="bg-orange-600 text-white px-5 py-2 rounded-md text-sm font-medium">
              Register Now
            </a>
          </div>
        </div>
        </div>
        

       { // Welcome to SWSC-MUN 
}       
       
 {
          // Message from secretary general
        }
        <div className="bg-black -screen border-b-4 border-white grid-cols-2 p-10 pt-20">
          <div className="flex flex-col items-center h-full">
            <h1 className="text-5xl font-bold text-center text-white">
              Message from the Secretary General
            </h1>
            <h2 className="text-2xl font-bold text-center text-white">
              Dear Delegates,
            </h2>
            <h2 className="text-2xl font-bold text-center text-white">
              It is my great pleasure to welcome you to the 2022 SWSC-MUN. I am honored to serve as the Secretary General of this conference. I am confident that this conference will be a great success and will be a memorable experience for all of us. I am looking forward to meeting you all in December.
            </h2>
            <h2 className="text-2xl font-bold text-center text-white">
              Sincerely,
            </h2>
            <h2 className="text-2xl font-bold text-center text-white">
              Secretary General
            </h2>
          </div>
        </div>
        {
          // About
        }
        <div className="bg-black w-screen h-screen border-b-4 border-white">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-5xl font-bold text-center text-white">
              About
            </h1>
            <h2 className="text-2xl font-bold text-center text-white">
              SWSC-MUN is a Model United Nations conference organized by the students of the School of World Studies and Culture, Shanghai International Studies University. The conference is held annually in December. The conference is a great opportunity for students to learn about the United Nations and international relations. The conference is also a great opportunity for students to meet new friends from all over the world.
            </h2>
          </div>
        </div>
        {
          // Contact
        }
        <div className="bg-white bg-opacity-50 absolute w-screen h-screen">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-5xl font-bold text-center text-white">
              Contact
            </h1>
            <h2 className="text-2xl font-bold text-center text-white">
              Email:
            </h2>
            <h2 className="text-2xl font-bold text-center text-white">
              </h2>
          </div>
          </div>
      </main>
    </div>
  )
}
