import Page from "../../components/page/page";
import Article, { ArticleReversed, DoubleArticle } from "../../components/article/article";
import Button from "../../components/button/button";
import JohnBosco from "./../../assets/bosco.png";
import JohnBosco2 from "./../../assets/bosco2.jpg";
import Salezy from "./../../assets/salezy.jpg";

const Patron = () => {
    return (
        <Page title="O szkole">
            <Article title="Św. Jan Bosco" image={JohnBosco}>
                <p>
                Jan Bosko urodził się 16 sierpnia 1815 roku w miejscowości Becchi na północy Włoch (dziś znanej jako Castelnuovo Don Bosco). Kiedy miał zaledwie dwa lata, zmarł jego ojciec, Franciszek.
                </p>
                <p>
                Jako kilkuletni chłopiec zafascynował się kuglarzami i cyrkowcami, którzy przyciągali uwagę tłumów. Za zgodą matki sam zaczął ich naśladować, organizując dla mieszkańców swojego otoczenia pokazy w niedziele i święta. Łączył występy z modlitwą, śpiewem religijnym i prostym „kazaniem” — powtórzeniem tego, co usłyszał w kościele.
                </p>
                <p>
                Pierwszą Komunię Świętą przyjął w wieku 11 lat. Naukę rozpoczął dopiero jako czternastolatek, ucząc się u jednego z kapłanów. Po jego śmierci musiał przerwać edukację, ale później ukończył szkołę podstawową i średnią, samodzielnie się utrzymując. Studiował w Wyższym Seminarium Duchownym w Turynie, gdzie 5 czerwca 1841 roku przyjął święcenia kapłańskie.
                </p>
            </Article>

            <ArticleReversed title="" image={JohnBosco2}>
                <p>
                Za namową św. Józefa Cafasso Jan Bosko wstąpił do konwiktu, by pogłębić swoją wiarę i wiedzę. Wkrótce potem rozpoczął działalność na rzecz młodzieży, która tłumnie przybywała do rozwijającego się miasta w poszukiwaniu pracy i lepszego życia.
                </p>
                <p>
                Za początek jego pracy z młodymi ludźmi uznaje się 8 grudnia 1841 roku — uroczystość Niepokalanego Poczęcia Najświętszej Maryi Panny. W miarę jak przybywało potrzebujących, także takich, którzy nie mieli gdzie mieszkać, ks. Bosko zaczął tworzyć specjalne domy. W ten sposób powstały oratoria i szkoły.
                </p>
                <p>
                Aby lepiej zorganizować opiekę i rozwijać swoje dzieło, założył w 1859 roku Towarzystwo św. Franciszka Salezego, a w 1872 — zgromadzenie Córek Maryi Wspomożycielki Wiernych.
                </p>

                <Button to="/o-szkole" dark>Kontynuatorzy dzieła</Button>
                <Button to="/patron/daty" dark style={{marginLeft: 20 + 'px'}}>Daty z życia</Button>
            </ArticleReversed>

            <Article title="Franciszek Salezy" image={Salezy}>
                <p>
                Św. Franciszek Salezy (1567–1622) to biskup Genewy, wybitny kaznodzieja, pisarz i duchowy przewodnik, którego życie i nauczanie stały się fundamentem duchowości salezjańskiej. Słynął z niezwykłej łagodności, cierpliwości i podejścia pełnego miłości do drugiego człowieka. Jego motto: „Wszystko z miłości, nic na siłę” do dziś inspiruje tych, którzy chcą wychowywać młodych w duchu dobroci i głębokiego zaufania Bogu.
                </p>
                <p>
                Dla św. Jana Bosko był wzorem kapłana – radosnego, obecnego wśród ludzi i oddanego młodzieży. To właśnie od niego salezjanie przyjęli nazwę i styl pracy duszpasterskiej: bliskość, delikatność i wychowanie oparte na miłości, a nie przymusie.
                </p>
                <p>
                Św. Franciszek Salezy jest patronem dziennikarzy, ludzi mediów oraz – szczególnie dla Rodziny Salezjańskiej – duchowym przewodnikiem w codziennym podążaniu drogą wiary z młodymi i dla młodych.
                </p>
            </Article>
            
        </Page>
    )
}

export default Patron;