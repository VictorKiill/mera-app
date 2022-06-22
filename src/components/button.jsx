import Link from "next/link"

export default function Button(props) {
    return (
        <Link href={props.route}>
            <a className="bg-whithish sm:py-2 sm:px-4 sm:text-2xl py-1 px-2 text-base border-4 border-brand rounded-md text-brand font-buttonText font-bold cursor-pointer whitespace-nowrap">
                {props.text}
            </a>
        </Link>
    )
}