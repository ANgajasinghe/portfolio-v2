import Tooltip from '@material-ui/core/Tooltip';

export function NavButton(props: {
    iconName: string
    label: string
    isActive? : boolean
}) {
    return (
        <Tooltip title={props.label} aria-label={props.label?.toLowerCase()} placement="right">

            <div className={`p-4 transform delay-150 hover:bg-gray-800 ${props.isActive ? 'active-nav' : ''}`}>
                <i className={`${props.iconName} text-2xl text-green-500`}/>
            </div>
        </Tooltip>
    )
}