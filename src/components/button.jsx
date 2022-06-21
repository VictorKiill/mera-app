import Link from "next/link"

export default function Button(props) {
    return (
        <Link href={props.route}>
            <a className="bg-whithish py-2 px-6 border-4 border-brand rounded-md text-brand text-3xl font-buttonText font-bold cursor-pointer whitespace-nowrap">
                {props.text}
            </a>
        </Link>
    )
}