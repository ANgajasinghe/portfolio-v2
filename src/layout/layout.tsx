import SidNav from '../layout/side-nav';

export default function Layout(props: any) {
    return (
        <div className='h-screen'>
            <div className="sm:hidden">
                Hi My name is jjj
            </div>

            <div className="flex gap-1">
                <div className='hidden sm:block w-14 bg-red-700'>
                    <SidNav/>
                </div>
                <div className="col-span-1 bg-red-700"> {props.children} </div>
            </div>

        </div>
    )
}