import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return(
        <div className="bg-black-900 bg-opacity-50 w-screen p-10 sm:pt-20">
          <div className="grid sm:grid-cols-3 grid-rows-3 justify-center items-center sm:h-20">
            <div className="flex flex-col justify-center items-center m-5">
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
            <div className="flex flex-col justify-center items-center m-5">
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
                  href="phone:9862485491"
                  className="text-lg text-blue-600 hover:text-blue-900">123456</Link>
              </h2>
            </div>

            <div className="flex justify-center items-center m-5">
              <h2 className="text-2xl font-bold text-center text-white">
                Links
                <div className="sm:hidden flex flex-col text-lg p-5 text-slate-400 ">
                <Link href="/home" className="hover:text-slate-200">Home</Link>
                <Link href="/sponsors" className="hover:text-slate-200">Sponsors</Link>

                <Link href="/committees" className="hover:text-slate-200">Committee</Link>
                <Link href="/about" className="hover:text-slate-200">About Us</Link>
                </div>

                <div className="hidden sm:flex flex-col text-lg p-5 text-slate-400 ">
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
          <pre className="text-slate-300 text-center text-sm">
            <h1>© 2021 SWSC-MUN. All rights reserved.</h1>

            <h1>
              <pre className="text-slate-300 text-center text-sm">
                #[derived] with ❤️ by <Link  className="hover:text-white" href="https://github.com/CroxxN" target="_blank" rel='noopener'>Sarad</Link>
                </pre>
            </h1>

          </pre>
        </div>
    )
        }