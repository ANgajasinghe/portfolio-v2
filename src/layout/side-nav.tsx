import {useRouter} from "next/router";
import {NavButton} from "../components/buttons";
import {Tooltip} from "@material-ui/core";


export default function SideNav() {
    const router = useRouter();
    return (
        <div className="bg-gray-900 relative shadow-lg h-screen">
            <div className='bg-green-400 absolute flex justify-center flex-wrap content-center h-14 w-14'>
                <div className='font-bold text-black'> AG</div>
            </div>

            <div className="flex justify-center flex-wrap content-center cursor-pointer"  style={{height: '100%'}}>
                <div>


                        <NavButton
                            iconName="las la-user"
                            href={'/'}
                            label="My Profile"/>





                      <NavButton iconName="las la-phone" href={'/project'} label="Contact Me"/>


                    <NavButton iconName="las la-briefcase" href={'/'}  label="Projects"/>
                    <NavButton iconName="las la-glasses" href={'/'}  label="Testimonials"/>
                </div>
            </div>

        </div>
    )
}