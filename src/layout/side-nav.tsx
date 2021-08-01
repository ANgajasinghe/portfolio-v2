import {useRouter} from "next/router";
import Link from "next/link";
import {NavButton} from "../components/Button";


export default function SideNav() {
    const router = useRouter();
    return (
        <div className="bg-gray-900 relative shadow-lg h-screen">
            <div className='bg-green-400 absolute flex justify-center flex-wrap content-center h-14 w-14'>
                <div className='font-bold text-black'> AG</div>
            </div>

            <div className="flex justify-center flex-wrap content-center cursor-pointer"  style={{height: '100%'}}>
                <div>
                    <Link href="/"  passHref={true}>
                      <NavButton
                          iconName="las la-user"
                          isActive={router.pathname == "/"}
                          label="My Profile"/>
                    </Link>
                    <NavButton iconName="las la-phone"  label="Contact Me"/>
                    <NavButton iconName="las la-briefcase"  label="Projects"/>
                    <NavButton iconName="las la-glasses"  label="Testimonials"/>
                </div>
            </div>

        </div>
    )
}