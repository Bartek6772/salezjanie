import Page from "../../components/page/page";
import Article, { ArticleReversed, DoubleArticle } from "../../components/article/article";
import Logo from "./../../assets/oratorium_logo.png";

const Oratorium = () => {
    return (
        <Page title="Życie Szkoły">

            <Article title="Oratorium" image={Logo} noShadow>
                <p>
                    Przestrzeń, w której uczniowie mogą wzrastać duchowo robiąc coś dobrego dla innych.
                </p>
                <p>
                    Oratorium „Aniołów Stróżów”, działające przy naszej szkole, jest przestrzenią, w której – w myśl ks. Bosko – nasi uczniowie mogą wzrastać duchowo, znajdować warunki dla swego integralnego rozwoju, spędzać w klimacie radości czas poza lekcjami, a przy okazji – zrobić coś dobrego dla innych.
                </p>
            </Article>

            <DoubleArticle title="Kaplica szkolna">
                <div className="col">
                    <p>
                        Szkoła oferuje uczniom dostęp do kaplicy. Można przyjść pomodilić się w ciszy na przerwach lub przed lekcjami.
                    </p>
                </div>

                <div className="col">
                    
                </div>
            </DoubleArticle>
        </Page>
    )
}

export default Oratorium;