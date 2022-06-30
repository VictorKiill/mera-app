import Layout from "../../components/layout";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

export default function Product() {
    const router = useRouter()
    const { id } = router.query
    const [products, setProducts] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/api/db')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return (
        <Layout>
            <div className="flex justify-center items-center">
                <div className="animate-spin bg-whithish p-8 border-4 border-whithish w-40 h-40 rounded-full">
                    <img src="/imgs/LogoM.png" alt="Loading" />
                </div>
            </div>
        </Layout>
    )
    if (!products) return (
        <Layout>
            <p></p>
        </Layout>
    )

    const product = products[id]

    if (!product) return (
        <Layout>
            <p></p>
        </Layout>
    )

    return (
        <Layout>
            <div className="flex justify-center items-center py-6 px-3">
                <div className="bg-whithish p-8 rounded-lg flex flex-col items-center">
                    <img src={product.image} alt={product.alt} className="rounded-md max-h-40" />
                    <h1 className="text-xl font-bold my-3">{product.legenda}</h1>
                    <p className="max-w-5xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis orci sit amet ante gravida sodales. Sed consectetur nunc eget enim viverra aliquet. Etiam posuere ante et velit tincidunt, nec semper ligula dapibus. Vestibulum eleifend elementum scelerisque. Etiam id orci sodales, iaculis elit in, laoreet enim. Suspendisse nec dapibus lorem. Vestibulum id elit sit amet quam convallis convallis. Nam eget mollis nulla.

                        Nulla malesuada porttitor leo. Phasellus blandit nec leo in facilisis. Mauris rhoncus diam vel massa rutrum ullamcorper. Nam egestas ipsum non faucibus varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In commodo ex et ex dignissim dictum. Mauris fermentum nulla massa, at ornare ipsum feugiat ac. Etiam dapibus ornare risus. Aenean viverra arcu ligula, sit amet facilisis eros ultricies ac. Donec enim risus, maximus vitae lacinia a, gravida nec urna.
                    </p>
                </div>
            </div>
        </Layout>
    )
}
