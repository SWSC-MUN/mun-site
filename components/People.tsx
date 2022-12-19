import { FC } from 'react';
import Image from 'next/image';

interface PeopleProps {
    name: string;
    imageUrl: string; 
    post: string;
    children?: React.ReactNode;
}




const People: FC<PeopleProps> = (props) => {
    return (
        <div className="max-w-md border-solid border-orange-600 rounded-lg border-2 sm:py-10 py-24 sm:px-3 m-5">
            <div className='flex justify-center relative min-w-fit min-h-fit'>

                <Image src={props.imageUrl} alt="Mr. Puskar Dhami"  width={250} height={200} className='rounded-full'/>
            </div>
            <div className='m-4 mt-7 pl-3'>

            <h1 className="text-3xl text-orange-600 font-extrabold">
                {props.name}
            </h1>
            <h1 className='mt-2 text-md text-slate-400 font-bold'>
                {props.post}
            </h1>
            <h1 className='sm:p-5 p-1 text-lg font-bold'>
                {props.children}
            </h1>
            </div>
        </div>
    )
}

export default People;