import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Link from "next/link";


export default function Register() {
  return (
    <div className="">
      <Head>
        <title>Register | SWSCMUN MMXXII</title>
      </Head>
      <div className="bg-black top-0 hidden sm:block sm:fixed z-10 left-0 w-screen">

        <Nav />
      </div>


      <div className="flex flex-col justify-center items-center bg-[url('/space-bg.jpg')] bg-center bg-fixed p-2 sm:p-20 w-screen sm:mt-10 bg-white h-screen">
        <h1 className="font-bold sm:text-center text-xl sm:text-5xl text-white mb-10">
          Register for SWSC-MUN MMXXII
        </h1>
          <Link
            href="/register"
            className="w-h-[100] bg-orange-600 hover:bg-orange-400 text-white px-5 py-2 rounded-md text-m sm:text-3xl font-medium m-10"
            target={"_blank"}
          >
            Register Now
          </Link>
      </div >
      <Footer />
    </div >
  );
}
