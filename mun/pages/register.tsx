import Head from "next/head";
import Nav from "../components/Nav";

export default function Register() {
  return (
    <div className="relative">
        <Head>
          <title>Register | SWSCMUN MMXXII</title>
        </Head>
        <div className="bg-black top-0 fixed z-10 left-0 w-screen h-100">

        <Nav />
        </div>


      <div className="bg-white p-2 sm:p-10 w-screen mt:80 sm:mt-0">
        <h1 className="font-bold text-lg sm:text-5xl text-black mb-10">
          Register for SWSC-MUN MMXXII
        </h1>
        <div className="flex justify-center w-screen items-center bg-black m-0.5 p-2 sm:m-10 sm:p-10 rounded-md border-slate-700 max-w-fit">
            <form action="/send-data-here" className="flex flex-col justify-between" method="post">
                <div className="sm:flex justify-center items-center m-5">

              <label className="block mr-10 text-base" htmlFor="first">First name *</label>
              <input type="text" placeholder="First Name" required className="focus:outline-none p-2 rounded mt-2" name="first" />
                </div>

                <div className="sm:flex justify-center items-center m-5">
                <label className="block mr-10 text-base" htmlFor="last">Last name *</label>
                <input type="text" placeholder="Last Name" required className="focus:outline-none p-2 rounded mt-2" name="last" />
                </div>

                <div className="sm:flex justify-center items-center m-5">
                <label className="block mr-10 text-base" htmlFor="email">Email *</label>
                <input type="email" placeholder="Email" required className="focus:outline-none p-2 rounded mt-2" name="email" />
                </div>

                <div className="sm:flex justify-center items-center m-5">
                <label className="block mr-10 text-base" htmlFor="school">School *</label>
                <input type="text" placeholder="School" required className="focus:outline-none p-2 rounded mt-2" name="school" />
                </div>

                <div className="sm:flex justify-center items-center m-5">
                <label className="block mr-10 text-base" htmlFor="country">Country *</label>
                <input type="text" placeholder="Country" required className="focus:outline-none p-2 rounded mt-2" name="country" />
                </div>

                <div className="sm:flex justify-center items-center m-5">
                <label className="block mr-10 text-base" htmlFor="committee">Committee *</label>
                <input type="text" placeholder="Committee" required className="focus:outline-none p-2 rounded mt-2" name="committee" />
                </div>

                <div className="sm:flex justify-center items-center m-5">
                <label className="block mr-10 text-base" htmlFor="position">Position *</label>
                <input type="text" placeholder="Position" required className="focus:outline-none p-2 rounded mt-2" name="position" />
                </div>

                <div className="sm:flex justify-center items-center m-5">
                <label className="block mr-10 text-base" htmlFor="phone">Phone Number *</label>
                <input type="tel" placeholder="Phone Number" required className="focus:outline-none p-2 rounded mt-2" name="phone" />
                </div>


              <button type="submit">Submit</button>
            </form>
        </div>
      </div>
      </div>
  );
}
