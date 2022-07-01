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
                        <li><span className="font-semibold">Maria Luísa</span> - Diretora de Produção</li>
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
                    <p className="text-center">Ser reconhecida no mercado como uma marca de qualidade e referência na saboaria.</p>
                </div>
                <div className="bg-whithish p-3 rounded-lg mb-3 flex flex-col items-center">
                    <h2 className="text-center text-2xl font-bold mb-2">Valores</h2>
                    <ul className="list-disc">
                        <li>Sustentabilidade</li>
                        <li>Diversidade</li>
                        <li>Valorização das pessoas e das relações</li>
                        <li>Responsabilidade com os fatos</li>
                        <li>Ética</li>
                        <li>Saúde</li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}
