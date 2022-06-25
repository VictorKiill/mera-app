import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useRouter } from 'next/router'

export default function NextJsCarousel() {
    const router = useRouter()

    const onClickProduct = id => {
        router.push(`/produtos/${id + 1}`)
    }

    return (
        <div>
            <Carousel autoPlay infiniteLoop showThumbs={false} interval={2000} showStatus={false} onClickItem={onClickProduct}>
                <div>
                    <img src="/imgs/sabonete1.png" alt="Sabonete1" />
                    <p className="legend">Sabonete 1</p>
                </div>
                <div>
                    <img src="/imgs/sabonete2.png" alt="Sabonete2" />
                    <p className="legend">Sabonete 2</p>

                </div>
                <div>
                    <img src="/imgs/sabonete3.png" alt="Sabonete3" />
                    <p className="legend">Sabonete 3</p>

                </div>
                <div>
                    <img src="/imgs/sabonete4.png" alt="Sabonete4" />
                    <p className="legend">Sabonete 4</p>
                </div>
            </Carousel>
        </div>
    );
}