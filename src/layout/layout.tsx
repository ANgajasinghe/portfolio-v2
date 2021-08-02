import SidNav from '../layout/side-nav';
import {AnimatePresence, motion} from "framer-motion";

export default function Layout(props: any) {
    const duration = 0.35

    const variants = {
        initial: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
            transition: {
                duration: duration,
                delay: duration,
                when: "beforeChildren",
            },
        },
        exit: {
            opacity: 0,
            transition: { duration: duration },
        },
    }
    return (
        <div className='h-screen'>
            <div className="sm:hidden">
                Hi My name is jjj
            </div>

            <div className="flex gap-1">
                <div className='hidden sm:block w-14 bg-red-700'>
                    <SidNav/>
                </div>
                <div className='w-full'>
                    <div>
                       <main>{props.children}</main>
                    </div>
                </div>
            </div>



        </div>
    )
}