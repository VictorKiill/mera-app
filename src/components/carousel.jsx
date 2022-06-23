import style from "../styles/carousel.module.css"
import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class NextJsCarousel extends Component {
    render() {
        return (
            <div>
                <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} interval={2000} showStatus={false}>
                    <div>
                        <img src="/imgs/sabonete1.png" alt="image1" />
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
}