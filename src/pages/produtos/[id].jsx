import Layout from "../../components/layout";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import Product from "../../components/product";

export default function ProductPage() {
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
                <div className="animate-spin bg-whithish p-8 w-40 h-40 rounded-full">
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
            <Product
                image={product.image}
                alt={product.alt}
                legenda={product.legenda}
                price={product.price}
                description={product.description}
                benefits={product.benefits}
                counters={product.counters}
            />
        </Layout>
    )
}