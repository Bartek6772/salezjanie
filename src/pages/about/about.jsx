import Page, { PageNoContainer } from "../../components/page/page";
import Article, { ArticleReversed, DoubleArticle } from "../../components/article/article";
import Herb from "./../../assets/herb.png";
import Button from "../../components/button/button";
import Numbers from "../../components/numbers/numbers";
import Cards from "../../components/cards/cards";
import Filary from "./../../assets/filary.png";

import "./about.scss";

const data1 = [
    { name: "Salezjan", num: "14 777" },
    { name: "Kraje", num: "132" },
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
                        Zgromadzenie Salezjańskie, znane także jako Towarzystwo św. Franciszka Salezego, zostało założone przez św. Jana Bosko w drugiej połowie XIX wieku w Turynie.
                    </p>
                    <p>
                    W 1888 roku liczyło już 774 członków i 57 wspólnot zakonnych działających w dziewięciu krajach Europy i Ameryki. Dziś salezjanie nadal realizują misję swojego założyciela, koncentrując się na towarzyszeniu młodym ludziom w ich drodze do zbawienia.
                    </p>
                    
                    <p>
                    Charyzmat salezjański przejawia się w różnorodnych formach działalności: poprzez wychowanie, pracę misyjną, ewangelizację za pośrednictwem mediów oraz prowadzenie ośrodków duszpasterskich, szczególnie w środowiskach ubogich i potrzebujących wsparcia.
                    </p>
                    <p>
                    Najważniejszym zadaniem zgromadzenia pozostaje wychowanie młodzieży. Ks. Bosko opracował w tym celu system prewencyjny — metodę wychowawczą opartą na zapobieganiu, a nie karaniu, kładąc nacisk na rozum, religię i miłość wychowawczą.
                    </p>
                    <Button to="/o-szkole/historia" dark>Historia Salezjan w Polsce</Button>
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

                <ArticleReversed title="Salezjański model wychowania" image={Filary}>
                    <p>W szkole realizowany jest salezjański model wychowania, oparty na systemie wychowawczym, stworzonym przez świętego Jana Bosko, opartym na dobroci, serdeczności, przyjaźni wzajemnym zaufaniu i zrozumieniu. Elementem tego systemu jest codzienna, wspólna modlitwa przed lekcjami oraz poranne „słówko” głoszone przez księży salezjanów. Inne elementy religijnego wychowania to uczestniczenie we Mszy świętej z okazji ważnych uroczystości szkolnych oraz świąt kościelnych. 31 stycznia każdego roku uroczyście obchodzi się dzień świętego Jana Bosco –patrona szkoły. Z tej okazji co roku organizujemy tombolę - loterię z nagrodami, w której udział bierze każdy uczeń.</p>
                </ArticleReversed>
            </div>

        </PageNoContainer>


    )
}

export default About;