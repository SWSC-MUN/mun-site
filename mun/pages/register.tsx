import axios from "axios";
import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";


export default function Register() {
// the field's in the form
// has to be typed because of the way the form is handled

interface RegistrationElements extends HTMLFormElement {
  first: HTMLInputElement;
  middle?: HTMLInputElement;
  last: HTMLInputElement;
  email: HTMLInputElement;
  school: HTMLInputElement;
  country: HTMLInputElement;
  committee: HTMLInputElement;
  position: HTMLInputElement;
  phone: HTMLInputElement;
}

const handleSubmit = (props: HTMLFormElement) => {
  const regEl = props as RegistrationElements;
  const obj = {
    first: regEl.first.value,
    middle: regEl.middle?.value,
    last: regEl.last.value,
    email: regEl.email.value,
    school: regEl.school.value,
    country: regEl.country.value,
    committee: regEl.committee.value,
    position: regEl.position.value,
    phone: regEl.phone.value,
  }
  let result = JSON.stringify(obj);
  axios.post("https://croxxn-improved-goggles-v7qw9q795vpfxgqq-8000.preview.app.github.dev/", result)
  .then((res) => {
    console.log(res);
  }
  )
  .catch((err) => {
    console.log(err);
  }
  )
}


  return (
    <div className="sm:relative">
      <Head>
        <title>Register | SWSCMUN MMXXII</title>
      </Head>
      <div className="bg-black top-0 sm:fixed z-10 left-0 w-screen ">

        <Nav />
      </div>


      <div className="flex flex-col justify-center items-center bg-[url('/space-bg.jpg')] bg-center bg-fixed p-2 sm:p-20 w-screen mt-10 bg-white">
        <h1 className="font-bold self-start text-lg sm:text-5xl text-white mb-10">
          Register for SWSC-MUN MMXXII
        </h1>
        <div className="flex justify-center w-screen items-center bg-black m-0.5 p-2 sm:m-10 sm:p-10 rounded-md border-slate-700 max-w-fit">
          <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e.currentTarget)
          }} className="flex flex-col justify-between items-center" method="post">
            <div className="m-5">

              <label className="block mr-10 text-base" htmlFor="first">First name *</label>
              <input type="text" placeholder="First Name" required className="focus:outline-none p-2 rounded mt-2 sm:w-96" name="first" />
            </div>

            <div className="m-5">
              <label className="block mr-10 text-base" htmlFor="middle">Middle name</label>
              <input type="text" placeholder="Middle name" className="focus:outline-none p-2 rounded mt-2 sm:w-96" name="middle" />
            </div>

            <div className="m-5">
              <label className="block mr-10 text-base" htmlFor="last">Last name *</label>
              <input type="text" placeholder="Last Name" required className="focus:outline-none p-2 rounded mt-2 sm:w-96" name="last" />
            </div>

            <div className="m-5">
              <label className="block mr-10 text-base" htmlFor="email">Email *</label>
              <input type="email" placeholder="Email" required className="focus:outline-none p-2 rounded mt-2 sm:w-96" name="email" />
            </div>


            <div className="m-5">
              <label className="block mr-10 text-base" htmlFor="school">School *</label>
              <input type="text" placeholder="School" required className="focus:outline-none p-2 rounded mt-2 sm:w-96" name="school" />
            </div>

            <div className="m-5">
              <label className="block mr-10 text-base" htmlFor="country">Country *</label>
              <input type="text" placeholder="Country" required className="focus:outline-none p-2 rounded mt-2 sm:w-96" name="country" />
            </div>

            <div className="m-5">
              <label className="block mr-10 text-base" htmlFor="committee">Committee *</label>
              <input type="text" placeholder="Committee" required className="focus:outline-none p-2 rounded mt-2 sm:w-96" name="committee" />
            </div>

            <div className="m-5">
              <label className="block mr-10 text-base" htmlFor="position">Position *</label>
              <input type="text" placeholder="Position" required className="focus:outline-none p-2 rounded mt-2 sm:w-96" name="position" />
            </div>

            <div className="m-5">
              <label className="block mr-10 text-base" htmlFor="phone">Phone Number *</label>
              <input type="number" placeholder="Phone Number" required className="focus:outline-none p-2 rounded mt-2 sm:w-96" name="phone" />
            </div>




            <div className="m-5 self-start">
              <h1 className="block text-lg text-red-600">
                Fields marked with * are required
              </h1>
            </div>
            <button className="rounded border-black-400 bg-orange-600 max-w-fit p-3 hover:bg-orange-400 text-lg" type="submit">Submit</button>
          </form>
        </div>
      </div >
      <Footer />
    </div >
  );
}