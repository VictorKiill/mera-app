export default function handler(req, res) {
    res.status(200).json({
        1: {
            image: "/imgs/sabonete1.png",
            alt: "Sabonete 1",
            legenda: "Sabonete 1"
        },
        2: {
            image: "/imgs/sabonete2.png",
            alt: "Sabonete 2",
            legenda: "Sabonete 2"
        },
        3: {
            image: "/imgs/sabonete3.png",
            alt: "Sabonete 3",
            legenda: "Sabonete 3"
        },
        4: {
            image: "/imgs/sabonete4.png",
            alt: "Sabonete 4",
            legenda: "Sabonete 4"
        }
    })
}
