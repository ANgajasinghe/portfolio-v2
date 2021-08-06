import Image from 'next/image';
import profilePic from '../../public/citywalk.jpeg';

export default function ProfilePicture() {
    return(
        <div className='border-8 border-gray-600 shadow-2xl transform duration-150 hover:translate-y-0 hover:scale-105 cursor-pointer rounded-full w-60 h-60'>
            <Image src={profilePic} height={250} width={250} className={'w-48 h-48 background-img fixed rounded-full'}/>
        </div>
    )
}