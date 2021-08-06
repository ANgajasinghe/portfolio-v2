import Head from 'next/head'
import {useTheme} from 'next-themes'
import Image from 'next/image'
import profilePic from '../../public/citywalk.jpeg';
import LandingAnimation from "../components/landing-animation";
import {MyServiceCard} from "../components/cards";
import ProfilePicture from "../components/avarat";
import Typist from "react-text-typist";
import {Button} from "@material-ui/core";


export default function Home() {
    return (
        <LandingAnimation title={'My Details'} description={'test'}>
            {/*<div className="grid sm:grid-cols-3 2xl:grid-cols-4 gap-5">*/}

            <div className='grid lg:grid-cols-3 gap-10 justify-center mt-20 ml-24 mr-24 '>
                <div className='flex lg:justify-end sm:justify-center'>
                    <ProfilePicture/>
                </div>

                <div className='lg:col-span-2 md:text-center lg:text-left'>
                        <Typist
                            sentences={[
                                "I build web systems",
                                "I do process automation tasks",
                                "I do IT consulting",
                                "I build cross-platform applications",
                            ]}
                            className='text-gray-500'
                            deletingSpeed={80}
                            loop={true}
                        />



                    <h2 className='font-openSans font-semibold mt-2 text-4xl '> AG Nayanajith </h2>

                    <p className="text-sm mt-5 text-gray-400">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    </p>

                    <div className='mt-5'>
                        <Button color="primary" variant="outlined"> <span className='p-1'> Contact Me </span>  </Button>
                    </div>

                </div>
            </div>


            <div className="">

                {/*<div className='shadow-2xl h-screen  w-full'>*/}

                {/*    <div className='relative h-screen fixed'>*/}
                {/*        <Image src={profilePic} layout="fill" className={'background-img fixed'}/>*/}
                {/*        <div className='absolute w-full bottom-20 text-center '>*/}
                {/*            <p className='font-bold text-4xl px-2 '>Akalanka Nayanajith</p>*/}
                {/*            <p className='text-green-500 text-lg font-bold mt-3'> Developer </p>*/}
                {/*            <div className='mt-3 flex justify-center gap-3'>*/}
                {/*                <i className="lab la-facebook-f text-lg"/>*/}
                {/*                <i className="lab la-linkedin-in text-lg"/>*/}
                {/*                <i className="lab la-github text-lg"/>*/}
                {/*                <i className="lab la-blogger-b text-lg"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*</div>*/}

                <div className='sm:col-span-2 2xl:col-span-3 w-full'>
                    <div className='mt-4'>
                        <p className='text-5xl font-semibold font-poppins'> about me </p>
                        <div className='mt-5 flex gap-2'>
                            <div>
                                <i className='text-sm text-green-500 font-bold mt-3'> 23 years </i> /
                            </div>
                            <div>
                                <i className='text-sm text-green-500 font-bold mt-3'> Freelancer </i> /
                            </div>
                            <div>
                                <i className='text-sm text-green-500 font-bold mt-3'> Developer </i> /
                            </div>
                            <div>
                                <i className='text-sm text-green-500 font-bold mt-3'> Designer </i>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 text-sm text-gray-400 font-openSans mb-20">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                        venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                        Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                        eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                        metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
                        ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
                        libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                        Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
                        Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                        Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                    </div>

                    <hr style={{backgroundColor:'#545454', borderColor: '#545454'}}/>

                    <div>
                        <p className="text-3xl font-poppins font-semibold mt-20" > My services  </p>

                        <div className="grid sm:grid-cols-2">
                            <MyServiceCard/>
                        </div>


                    </div>

                </div>
            </div>
        </LandingAnimation>



    )
}
