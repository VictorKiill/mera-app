import Layout from "../components/layout";

export default function Sobre() {
    return (
        <Layout>
            <div className="flex flex-col p-6">
                <div className="bg-whithish p-3 rounded-lg mb-3">
                    <h2 className="text-center text-2xl font-bold mb-2">Sobre Nós</h2>
                    <p className="text-center">Uma empresa focada na produção de cosméticos dermatológicos usando ingredientes naturais, sempre visando pela qualidade e eficácia.</p>
                </div>
                <div className="bg-whithish p-3 rounded-lg mb-3 flex flex-col items-center">
                    <h2 className="text-center text-2xl font-bold mb-2">Equipe</h2>
                    <ul>
                        <li><span className="font-semibold">Aryellen Soares</span> - Diretora de Marketing Digital</li>
                        <li><span className="font-semibold">Eduarda Beatriz</span> - Diretora de Pesquisa</li>
                        <li><span className="font-semibold">Laiza Pereira</span> - Assessora de Marketing</li>
                        <li><span className="font-semibold">Maria Luísa</span> - Diretora de Produtoção</li>
                        <li><span className="font-semibold">Sara Coelho</span> - Designer Gráfica</li>
                        <li><span className="font-semibold">Victor Kiill</span> - Chefe de TI</li>
                    </ul>
                </div>
                <div className="bg-whithish p-3 rounded-lg mb-3">
                    <h2 className="text-center text-2xl font-bold mb-2">Missão</h2>
                    <p className="text-center">Dar o que a natureza tem de melhor para a saúde dermatológica.</p>
                </div>
                <div className="bg-whithish p-3 rounded-lg mb-3">
                    <h2 className="text-center text-2xl font-bold mb-2">Visão</h2>
                    <p className="text-center">Garantir a qualidade de nossos produtos</p>
                </div>
                <div className="bg-whithish p-3 rounded-lg mb-3 flex flex-col items-center">
                    <h2 className="text-center text-2xl font-bold mb-2">Valores</h2>
                    <ul className="list-disc">
                        <li>Sustentabilidade</li>
                        <li>Ética</li>
                        <li>Saúde</li>
                        <li>Responsabilidade com os fatos</li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}
