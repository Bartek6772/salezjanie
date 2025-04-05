import "./home.scss";
import Image from "./../../assets/DPP_0265.jpg"

import Button from "../../components/button/button";
import { useRef } from "react";

const Home = () => {
    const sectionRef = useRef(null);

    return(
        <div className="home">
            <section className="landing">

                <h1>
                    <span className="">Publiczne Salezjańskie</span>
                    <span>Liceum Ogólnokształcące</span>
                </h1>

                <Button scrollTo={sectionRef}>Dowiedz się więcej</Button>
                
                <div className="black"></div>
                <div className="image"></div>
            </section>

            <section className="news" ref={sectionRef}>
                <div className="container">
                    <h2>Aktualności</h2>
                    <div className="content">

                        <div className="test">
                            <div className="image">
                                <img src={Image} alt="obrazek" />
                            </div>
                            <div className="text">
                                Nowe boisko - Odkurzone i wypolerowane
                            </div>
                        </div>

                        <div className="test">
                            <div className="image">
                                <img src={Image} alt="obrazek" />
                            </div>
                            <div className="text">
                                Nowe boisko - Odkurzone i wypolerowane
                            </div>
                        </div>

                        <div className="test">
                            <div className="image">
                                <img src={Image} alt="obrazek" />
                            </div>
                            <div className="text">
                                Nowe boisko - Odkurzone i wypolerowane
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
        
    )
}

export default Home;