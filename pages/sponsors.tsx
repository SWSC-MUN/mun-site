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
