import Layout from "../components/layout";
import Product from "../components/product";

export default function Produtos() {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-evenly px-20">
                <Product text="Produto" />
                <Product text="Produto" />
                <Product text="Produto" />
                <Product text="Produto" />
            </div>
        </Layout>
    )
}