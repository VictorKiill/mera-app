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
                    <p className="legend">Sabonete de Açafrão</p>
                </div>
                <div>
                    <img src="/imgs/sabonete2.jpg" alt="Sabonete de Argila Branca" />
                    <p className="legend">Sabonete de Argila Branca</p>
                </div>
            </Carousel>
        </div>
    );
}