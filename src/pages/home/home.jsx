import "./home.scss";
import Image from "./../../assets/DPP_0265.jpg"

const Home = () => {
    return(
        <div className="home">
            <section className="landing">
                <h1>Publiczne <br/>Salezjańskie Liceum Ogólnokształcące<br/>W Krakowie</h1>
                <div className="black"></div>
                <div className="image"></div>
            </section>

            <section className="news">
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