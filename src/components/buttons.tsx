import Tooltip from '@material-ui/core/Tooltip';
import Link from "next/link";
import {useRouter} from "next/router";

export function NavButton(props: {
    iconName: string
    label: string
    href : string
}) {
    const router = useRouter();
    return (

            <Link href={props.href} passHref={true} >

                <div className={`p-4 transform delay-150 hover:bg-gray-800 ${router.pathname == props.href ? 'active-nav' : ''}`}>
                    <i className={`${props.iconName} text-2xl text-green-500`}/>
                </div>

            </Link>

    )
}