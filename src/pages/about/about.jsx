import Page from "../../components/page/page";
import Article, { ArticleReversed } from "../../components/article/article";

import JohnBosco from "./../../assets/bosco.png";
import JohnBosco2 from "./../../assets/bosco2.jpg";

const About = () => {
    return (
        <Page title="O szkole">
            <Article title="Św. Jan Bosco" image={JohnBosco}>
                <p>
                    Urodził się 16 sierpnia 1815 r. w Becchi w północnych Włoszech (obecna nazwa tej miejscowości to Castelnuovo Don Bosco). Gdy miał zaledwie 2 lata, zmarł jego ojciec Franciszek.
                </p>
                <p>
                    Jan Bosko jako kilkuletni chłopiec, widząc jak wielkim powodzeniem cieszą się przygodni kuglarze i cyrkowcy, za pozwoleniem swej matki zaczął ich naśladować. W ten sposób zbierał mieszkańców swojego osiedla i zabawiał ich w niedziele i święta, przeplatając popisy modlitwą, pobożnym śpiewem i “kazaniem”, które było powtórzeniem wcześniej usłyszanego w kościele.
                </p>
                <p>
                    Pierwszą Komunię św. przyjął, gdy miał 11 lat. Dopiero w wieku 14 lat rozpoczął naukę u pewnego kapłana. Po przerwie spowodowanej śmiercią tego księdza, ukończył szkołę podstawową i średnią pracując na swoje utrzymanie. Ukończył Wyższe Seminarium Duchowne w Turynie, gdzie 5 czerwca 1841 roku przyjął święcenia kapłańskie.
                </p>
            </Article>

            <ArticleReversed title="Działalność" image={JohnBosco2}>
                <p>
                    Za radą św. Józefa Cafasso wstąpił do konwiktu w celu pogłębiania swojej wiary i wiedzy. Szybko rozpoczął działalność polegającą na niesieniu wszechstronnej pomocy młodzieży, która wówczas bardzo licznie napływała do szybko rozwijającego się miasta, by szukać środków na utrzymanie.
                </p>
                <p>
                    Jako datę rozpoczęcia przez ks. Bosko pracy z młodzieżą, która to praca wkrótce przerodziła się w wielkie dzieło, przyjmuje się dzień 8.12.1841 r. – uroczystość Niepokalanego Poczęcia Matki Bożej. Ponieważ ciągle przybywało tych, którym potrzebna była pomoc włącznie z udzieleniem dachu nad głową, ks. Bosko zaczął organizować specjalne domy. Tak powstały oratoria i szkoły. Dla zapewnienia lepszej opieki i w celu rozszerzania dzieła, ks. Bosko założył Towarzystwo św. Franciszka Salezego (1859) i zgromadzenie Córek Maryi Wspomożycielki Wiernych (1872).
                </p>
            </ArticleReversed>
        </Page>
    )
}

export default About;