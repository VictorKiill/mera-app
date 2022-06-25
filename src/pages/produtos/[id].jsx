import Layout from "../../components/layout";
import { useRouter } from 'next/router'
import db from '../../../backend/db.json'

export default function Product() {
    const router = useRouter()
    const { id } = router.query

    return (
        <Layout>
            <p>Produto {id}</p>
        </Layout>
    )
}