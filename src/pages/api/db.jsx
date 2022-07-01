export default function handler(req, res) {
    res.status(200).json({
        1: {
            image: "/imgs/sabonete1.png",
            alt: "Sabonete de Açafrão",
            legenda: "Sabonete de Açafrão",
            price: 'R$6,99',
            description: 'Sabonete feito a base de glicerina e açafão, com um aroma doce e muitos benefícios para pele.',
            benefits: [
                'Ação antioxidante',
                'Ação anti-inflamatória',
                'Ação cicatrizante',
                'Ação ant-bacteriana',
                'Auxilia no tratamento da pele oleosa',
                'Retarda o crescimento dos pelos',
                'Macies e brilho à pele',
            ],
            counters: [
                'Gestantes',
                'Alérgicos à açafrão-da-terra'
            ]
        },
        2: {
            image: "/imgs/sabonete2.jpg",
            alt: "Sabonete de Argila Branca",
            legenda: "Sabonete de Argila Branca (Projeto Futuro)",
            price: 'R$-,--',
            description: 'Sabonete feito a base de glicerina e argila branca, ideal para todos os tpos de pele, inclusive as mais sensiveis.',
            benefits: [
                'Ação cicatrizante', 'Ação ant-inflamatória', 'Ação calmante'
            ],
            counters: []
        },
        3: {
            image: "/imgs/sabonete3.png",
            alt: "Sabonete 3",
            legenda: "Sabonete 3",
            price: 'R$6,99',
            description: '',
            benefits: [],
            counters: []
        },
        4: {
            image: "/imgs/sabonete4.png",
            alt: "Sabonete 4",
            legenda: "Sabonete 4",
            price: 'R$6,99',
            description: '',
            benefits: [],
            counters: []
        }
    })
}
