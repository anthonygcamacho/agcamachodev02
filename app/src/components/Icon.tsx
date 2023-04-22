import { FunctionComponent } from "react"
import tw from "twin.macro"

const IconLink = tw.a`block px-5 py-4 duration-300 bg-gray-600 rounded-full hover:bg-gray-500 mx-3`

const I = tw.i`text-2xl leading-6 text-gray-400 group-hover:text-gray-100 duration-300`

const Icon: FunctionComponent<{
    href: string
    faType: string
    faIcon: string
}> = ({ href, faType, faIcon }) => {
    return (
        <>
            <IconLink
                href={href}
                className="group"
                target="_blank"
                rel="noreferrer"
            >
                <I className={`${faType} ${faIcon}`}></I>
            </IconLink>
        </>
    )
}

export default Icon
