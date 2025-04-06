import Page, { PageNoContainer } from "../../components/page/page";
import Article, { ArticleReversed, DoubleArticle } from "../../components/article/article";
import Herb from "./../../assets/herb.png";
import Button from "../../components/button/button";
import Numbers from "../../components/numbers/numbers";
import Cards from "../../components/cards/cards";

import "./about.scss";

const data1 = [
    { name: "Salezjan", num: "14 476" },
    { name: "Kraje", num: "133" },
    { name: "Kontynentów", num: "5" },
]

const data2 = [
    {name: "Religia", text: "Pozwala traktować życie jako nieoceniony dar pochodzący od Boga. Zachęca do otwarcia się na szerokie pole stworzenia i odnajdywania tam śladów mądrości i dobroci Stwórcy."},
    {name: "Rozum", text: "Wychowanie to nade wszystko rzecz rozumu - oczywista konieczność, powinność złączona z ludzką naturą, sprawa doświadczenia oraz ludzkiej i chrześcijańskiej mądrości."},
    {name: "Miłość", text: "Najgłębsza oryginalność uczucia wynika z zasady wychowawczej - nie wystarczy kochać młodzieży, trzeba także, by młodzież wiedziała, że jest kochana i czuła się kochana."},
    {name: "Szacunek", text: "Wychowanie to także głęboki szacunek do młodego człowieka przejawiający się nieustannym wysiłkiem w udzielaniu wsparcia i okazywaniem zrozumienia dla problemów młodzieży."},
]



const About = () => {
    return (
        <PageNoContainer title="O szkole">
            <div className="container">
                <Cards data={data2}/>

                <Article title="Salezjanie" image={Herb} noShadow>
                    <p>
                        Zgromadzenie Salezjańskie czyli Towarzystwo św. Franciszka Salezego zostało założone przez św. Jana Bosko w drugiej połowie XIX w. w Turynie.
                    </p>
                    <p>
                        W roku 1888 zgromadzenie liczyło 774 członków i 57 wspólnot zakonnych w dziewięciu państwach Europy i Ameryki. Salezjanie kontynuują dzieło swojego założyciela urzeczywistniając tajemnicę zbawienia przede wszystkim w życiu młodzieży.
                    </p>
                    <p>
                        Charyzmat salezjański urzeczywistnia się w różnych formach pracy i zaangażowania duszpasterskiego: na polu wychowania, misji, ewangelizacji poprzez środki społecznego przekazu oraz prowadzenie różnych ośrodków duszpasterskich szczególnie w środowiskach ubogich.
                    </p>
                    <p>
                        Głównym posłannictwem zgromadzenia jest jednak wychowanie młodzieży. Ksiądz Bosko określił metodę wychowawczą przez siebie wypracowaną jako system prewencyjny, bądź zapobiegawczy.
                    </p>

                    <Button to="/patron" dark>Pozanj naszego patrona</Button>
                </Article>
            </div>

            <Numbers numbers={data1} />

            <div className="container">
                <DoubleArticle title="System prewencyjny">
                    <div className="col">
                        <p>
                            Pomiędzy metodami autorytatywnymi, często stosowanymi w przeszłości, a postawami libertyńskimi, cechującymi pewnego rodzaju nowoczesność, Ksiądz Bosko ukazał drogę ludzkiej i chrześcijańskiej mądrości, natchnionej humanizmem ewangelicznym świętego Franciszka Salezego: system uprzedzający oparty na rozumie, religii i miłości.
                        </p>

                        <p>
                            System ten nie odwołuje się do przymusów zewnętrznych, ale do zasobów, jakie każdy człowiek nosi w swoim wnętrzu. Jednocześnie nie pozwala na wszystko: wychowawca, w pełni szanując wolną wolę młodego człowieka, staje się jemu bliski, aby mu towarzyszyć na drodze autentycznego wzrastania.
                        </p>

                        System prewencyjny opiera się na trzech filarach:
                        <ul>
                            <li>rozumie</li>
                            <li>dobroci</li>
                            <li>religii</li>
                        </ul>
                    </div>

                    <div className="col">
                        <p>
                            Dobroć okazywana wychowankowi stanowi podstawowy „budulec” relacji przyjaźni i zaufania. Księdzu Bosko zależało, aby wychowanek sam potrafił odkrywać w wychowawcy postawę miłości i ofiarowane mu dobro.
                        </p>

                        <p>
                            Do osiągnięcia tego celu potrzeba było odwoływania się do rozumu wychowanka poprzez cierpliwe wyjaśnianie i uzasadnianie wydawanych poleceń. Zasada rozumności dotyczyła również kompetencji wychowawcy jako świadomego „reżysera” akcji wychowania.
                        </p>

                        <p>
                            W religii ks. Bosko znalazł źródło motywacji do stawiania sobie wymagań i robienia postępów w pracy nad swoją osobowością.
                        </p>
                    </div>
                </DoubleArticle>
            </div>

        </PageNoContainer>


    )
}

export default About;