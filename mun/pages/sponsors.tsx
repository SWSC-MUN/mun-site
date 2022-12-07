import Head from 'next/head'
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Sponsors() {
    return (
        <div> 
        <Head>
            <title>Sponsors</title>
            <meta name="description" content="Sponsors" />
        </Head>
    
        <Nav />
        <main className="top-0 m-0 pb-5 bg-white sm:h-[55vh]">


            {/* TO ANY FUTURE MF WORKING ON THIS PROJECT(PROLLY ME) DONOT REMOVE THIS
                When there are sponsors, uncomment this and add the sponsors
            */}

            {/* <div className="bg-[url('/team.jpg')] bg-center bg-fixed absolute w-screen h-screen blur-sm"></div>
            <div className="bg-black bg-opacity-50 relative w-screen h-screen z-50">
            <div className="flex flex-col justify-center items-center h-full">
                <h1 className="text-5xl font-bold text-center text-white m-2">
                Sponsors
                </h1>
            </div>
            </div> */}
            {/* <div className="bg-white text-black sm:p-10 p-2"> */}
            {/* <div className="h-full">
                <h1 className="text-5xl font-bold sm:m-10 m-5 mb-10 sm:text-center">
                Our Sponsors
                </h1>
                <div className="flex justify-center">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold text-center text-white">
                    Platinum
                    </h2>
                    <div className="flex flex-col text-lg p-5 text-slate-400 ">
                    <Link href="https://www.facebook.com/SWSCMUN">
                        <Image
                        src="/facebook.svg"
                        alt="facebook"
                        width={50}
                        height={50}
                        />
                    </Link>
                    <Link href="https://www.instagram.com/SWSCMUN_">
                        <Image
                        src="/instagram.svg"
                        alt="instagram"
                        width={50}
                        height={50}
                        />
                    </Link>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold text-center text-white">
                    Gold
                    </h2>
                    <div className="flex flex-col text-lg p-5 text-slate-400 ">
                    <Link href="https://www.facebook.com/SWSCMUN">
                        <Image
                        src="/facebook.svg"
                        alt="facebook"
                        width={50}
                        height={50}
                        />
                    </Link>
                    <Link href="https://www.instagram.com/SWSCMUN_">
                        <Image src="/instagram.svg" alt="instagram" width={50} height={50} />
                    </Link>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold text-center text-white">
                    Silver
                    </h2>
                    <div className="flex flex-col text-lg p-5 text-slate-400 ">
                    <Link href="https://www.facebook.com/SWSCMUN">
                        <Image
                        src="/facebook.svg"
                        alt="facebook"
                        width={50}
                        height={50}
                        />
                    </Link>
                    <Link href="https://www.instagram.com/SWSCMUN_">
                        <Image src="/instagram.svg" alt="instagram" width={50} height={50} />
                    </Link>
                    </div>
                </div>
                </div>
            </div>*/}
            {/* <div>  */}
                <div className="h-full p-10">

                <h1 className="font-pop text-5xl font-bold sm:m-10 m-5 mb-10 sm:text-center">
                    Sponsor Us
                </h1>
                <div className="flex flex-col justify-center items-center">
                    <div className='flex justify-center items-center'>

                    <h1 className='w-full text-3xl m-10 text-black'>
                        If you want to sponsor us, please contact us through our email <code className='cursor-pointer hover:text-slate-600'>swscmun@gmail</code>
                        </h1>
                    </div>
                    <button className='bg-[#e46d36] text-white hover:bg-orange-700 font-bold py-2 px-4 rounded-full m-10'>
                        <a href="mailto:
                        swscmun@gmail.com">Get in Touch</a>
                    </button>

                </div>
            </div>
        </main>
        <Footer/>
        </div>
    );  
}
