import Nav from "../components/Nav";
import Head from "next/head";
import Footer from "../components/Footer";



export default function FAQ() {

    return (
        <div className="relative">
            <Head>
                <title>FAQ</title>
                <meta name="description" content="FAQ" />
            </Head>

            <Nav />
            <main className="bg-white">
                {/* the team picture is currently not aviabale */}
                <div className="bg-[url('/qna.jpg')] bg-center bg-fixed absolute w-screen h-screen blur-sm"></div>
                <div className="bg-black bg-opacity-50 relative w-screen h-screen z-50">
                    <div className="flex flex-col justify-center items-center h-full">
                        <h1 className="text-5xl font-bold text-center text-white m-2">
                            Frequently Asked Questions
                        </h1>
                    </div>
                </div>
                <div className="bg-white text-black p-10">
                    <div className="h-full">
                        <h1 className="text-5xl font-bold m-10">What is MUN?</h1>
                        <div>
                            <p className="text-xl m-10">
                                Model United Nations (MUN) is a simulation of the United Nations
                                General Assembly. It is a forum in which students can learn about
                                diplomacy, international relations, and the United Nations. MUN
                                conferences are held all over the world and are attended by
                                thousands of students.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-black p-10">
                    <div className="h-full">
                        <h1 className="text-5xl font-bold m-10">
                            What is the purpose of MUN?
                        </h1>
                        <div>
                            <p className="text-xl m-10">
                                MUN is a platform for students to learn about international
                                relations and diplomacy. It is a great way for students to
                                develop their public speaking and debating skills. MUN is also a
                                great way for students to learn about the United Nations and
                                global issues.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-black p-10">
                    <div className="h-full">
                        <h1 className="text-5xl font-bold m-10">
                            How to fill out the registration form?
                        </h1>
                        <div>
                            <p className="text-xl m-10">
                                1) Enter your name, email, and school. 
                            </p>
                            <p className="text-xl m-10">
                                2) Select the country you would like to represent in MUN. Note that this is <b>NOT</b> your Nationality, but the country you would like to represent in MUN.
                                </p>

                            <p className="text-xl m-10">
                                3) Select the committee you would like to join.
                                The committee you select will be the topic you will be debating about.
                                The aviabale committees are listed below.
                                <br/>
                                <ul>
                                <li>-Federal Parliament Nepal(FPN)</li>
                                <li>-United Nations Security Council (UNSC)</li> 
                                <li>-Disarmament and International Security Committee (DISEC)</li>
                                <li>-World Health Organization (WHO)</li>
                                <li>-Economic and Social Council (ECOSOC)</li>
                                <li>-Food and Agriculture Organization (FAO)</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                </main>
                <Footer/>
        </div>
        // make a accordion for the questions

        
    );
}
