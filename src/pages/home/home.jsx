import "./home.scss";
import Image from "./../../assets/DPP_0265.jpg";
import Image1 from "./../../assets/hero1.jpg";
import Image2 from "./../../assets/hero2.jpg";
import Image3 from "./../../assets/hero3.jpg";

import Button from "../../components/button/button";
import { useRef } from "react";

import NewClasses from "../recrutation/new-classes";

const news = [
    { id: 1,name: "Nowe boisko - Odkurzone i wypolerowane", image: Image1 },
    { id: 2,name: "Nowe boisko - Odkurzone i wypolerowane", image: Image3 },
    { id: 3,name: "Nowe boisko - Odkurzone i wypolerowane", image: Image2 },
    { id: 4,name: "Nowe boisko - Odkurzone i wypolerowane", image: Image3 },
    { id: 5,name: "Nowe boisko - Odkurzone i wypolerowane", image: Image1 },
    { id: 6,name: "Nowe boisko - Odkurzone i wypolerowane", image: Image2 },
]

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

            <div className="container">
                <section className="news" ref={sectionRef}>
                        <h2>Aktualności</h2>
                        <div className="content">

                            {news.map(n => 
                                <div className="test" key={n.id}>
                                    <div className="image">
                                        <img src={n.image} alt="obrazek" />
                                    </div>
                                    <div className="text">
                                        {n.name}
                                    </div>
                                </div>
                            )}

                        </div>
                </section>

                <NewClasses/>

            </div>

            
        </div>
        
    )
}

export default Home;