import Page from "../../components/page/page";
import Button from "../../components/button/button";


const Dates = () => {
    return (
        <Page title="Daty z życia Jana Bosco">
            <ul style={{fontSize: 1.1 + 'rem'}, {lineHeight: 35 + 'px'}}>
                <br/>
                <li>1815 – 16 sierpnia – narodziny</li>
                <li>1817 – śmierć ojca</li>
                <li>1825 – proroczy sen Janka o jego posłannictwie</li>
                <li>1826 – I Komunia Święta</li>
                <li>1833 – Bierzmowanie</li>
                <li>1835 – Janek wstępuje do Seminarium, wdziewa sutannę</li>
                <li>1841 – święcenia kapłańskie</li>
                <li>1841 – 8 grudnia – spotkanie Bartłomieja Garelli, początek apostolatu młodzieżowego</li>
                <li>1846 – Oratorium Wędrowne na Valdocco</li>
                <li>1853 – otwarcie pierwszej szkoły zawodowej na Valdocco</li>
                <li>1854 – ks. Bosko nadaje swoim współpracownikom nazwę Salezjanie</li>
                <li>1854 – spotkanie z Dominikiem Savio</li>
                <li>1855 – pierwszy krok do założenia Towarzystwa Salezjańskiego: kleryk Rua składa śluby na ręce ks. Bosko</li>
                <li>1856 – śmierć Matki Małgorzaty</li>
                <li>1857 – śmierć Dominika Savio</li>
                <li>1858 – pierwsza podróż do papieża</li>
                <li>1859 – ks. Bosko podejmuje publicznie decyzję o założeniu Towarzystwa Salezjańskiego</li>
                <li>1863 – otwarcie pierwszego domu poza Turynem</li>
                <li>1864 – spotkanie z Marią Dominiką Mazzarello</li>
                <li>1865 – poświęcenie kamienia węgielnego pod budowę bazyliki Matki Bożej Wspomożenia Wiernych</li>
                <li>1865 – pierwsze śluby wieczyste salezjanów</li>
                <li>1868 – konsekracja bazyliki Wspomożycielki</li>
                <li>1874 – Stolica Apostolska zatwierdza Konstytucje Zgromadzenia Salezjańskiego</li>
                <li>1875 – ks. Bosko wysyła pierwszych misjonarzy do Ameryki Południowej</li>
                <li>1881 – śmierć Marii Dominiki Mazzarello</li>
                <li>1884 – ks. Cagliero otrzymuje sakrę biskupią</li>
                <li>1887 – konsekracja bazyliki Serca Jezusowego w Rzymie</li>
                <li>1888 – 31 stycznia – śmierć ks. Bosko.</li>
                <li>1929 – beatyfikacja ks. Bosko</li>
                <li>1934 – 1 kwietnia Jan Bosko został ogłoszony świętym Kościoła katolickiego</li>
            </ul>
            <Button to="https://sdb.org.pl/sw-jan-bosco-historia/" dark>Źródło: sdb.org</Button>
        </Page>
    )
}

export default Dates;