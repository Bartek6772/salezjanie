import Page from "../../components/page/page";
import Article from "../../components/article/article";
import NewClasses from "./new-classes";

import matFizIcon from "./../../assets/mat-fiz-int-ico.png";
import matChemIcon from "./../../assets/mat-chem-ico.png";
import humanIcon from "./../../assets/human-ico.png";
import biolChemIcon from "./../../assets/biol-chem-ico.png";

const Recrutation = () => {
    return (
        <Page title="Rekrutacja">
            <NewClasses/>

            <Article title="Klasa Matematyczno-Geograficzna" id="class1">
                To klasa dla tych, którzy chcą zrozumieć świat zarówno przez liczby, jak i przez mapy. Uczymy się logicznego myślenia, analizujemy zjawiska przyrodnicze i społeczne, poznajemy różne kultury i kraje. W duchu św. Jana Bosko uczymy się patrzeć na świat z szeroką perspektywą – z troską o człowieka i środowisko.
            </Article>

            <Article title="Klasa Matematyczno-Chemiczna" id="class2">
                Idealna dla umysłów ścisłych – tych, którzy lubią liczyć, badać i eksperymentować. Na lekcjach uczymy się precyzji, ale i odpowiedzialności – bo jak mówił ks. Bosko, "wiedza to dar, który należy dobrze wykorzystać". Rozwijamy talenty, które mogą przydać się w przyszłości jako inżynierowie, farmaceuci czy naukowcy.
            </Article>

            <Article title="Klasa Biologiczno-Chemiczna" id="class3">
                Dla pasjonatów życia, zdrowia i przyrody. W tej klasie łączymy wiedzę o człowieku i świecie z wrażliwością na potrzeby innych. Często angażujemy się w pomoc, akcje charytatywne i wolontariat.
            </Article>

            <Article title="Klasa Matematyczno-Fizyczno-Informatyczna" id="class4">
             Tu łączymy logikę, technologię i kreatywność. Rozwijamy umiejętności programowania, poznajemy zasady rządzące światem fizyki i uczymy się rozwiązywać problemy krok po kroku.
            </Article>
        </Page>
    )
}

export default Recrutation;