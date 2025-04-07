import "./home.scss";
import Image from "./../../assets/DPP_0265.jpg";
import Image1 from "./../../assets/DPP_0257.jpg";
import Image2 from "./../../assets/agh2.jpg";
import Image3 from "./../../assets/agh.jpg";
import Image4 from "./../../assets/bosco3.jpg";
import Image5 from "./../../assets/bosco2.jpg";
import Image6 from "./../../assets/629754fa4d539_o_large.jpg";

import Button from "../../components/button/button";
import { useRef } from "react";

import NewClasses from "../recrutation/new-classes";
import Numbers from "../../components/numbers/numbers";

const news = [
    { id: 1,name: "Dzień otwarty", image: Image6 },
    { id: 3,name: "Zajęcia sportowe na boisku szkolnym", image: Image1 },
    { id: 2,name: "Olimpiada o diamentowy indeks AGH", image: Image3 },
    { id: 4,name: "Tombola - wspomnienie Jana Bosco", image: Image4 },
    { id: 5,name: "Wizyta na akademi górniczo-hutnicznej", image: Image2 },
    { id: 6,name: "Fakty i ciekawostki o Janie Bosco", image: Image5 },
]

const nums = [
    {name: "Lat", num: "20+"},
    {name: "Absolwentów", num: "2100+"},
    {name: "Stypedystów", num: "356"},
    {name: "Nauczycieli", num: "47+"},
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

                <Button to="#news">Dowiedz się więcej</Button>
                
                <div className="black"></div>
                <div className="image"></div>
            </section>

            <div className="container">
                <section className="news" id="news">
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


            </div>

            <Numbers numbers={nums}/>

            <div className="container">
                <NewClasses/>

                <div className="contact">
                    <h2>Skontaktuj się z nami</h2>
                    <div className="content">
                        <div className="col">
                            <p>os. Piastów 34, 31-624 Kraków</p>
                            <p><b>Telefon Kontaktowy:</b> <br/>12 648 04 89</p>
                            <p><b>Adres Email: </b><br/>szkolanh@salezjanie.com</p>
                            <p><b>NIP:</b> <br/> 6782861965</p>
                        </div>
                        <div className="col">
                            <p>Godziny pracy sekretariatu</p>
                            <p>sekretariat@salezjanie.com</p>
                            <p><b>Poniedziałek, wtorek, środa, piątek</b><br/>7:45 - 14:45</p>
                            <p><b>Czwartek </b><br/>11:00 - 18:00</p>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
        
    )
}

export default Home;