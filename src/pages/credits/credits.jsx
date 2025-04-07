import Page from "../../components/page/page";
import "./credits.scss";

const Credits = () => {
    return (
        <Page title="Podziękowania">
            <div className="credits">
                <h4>Autor projektu</h4>
                <p>Bartłomiej Borowski</p>

                <br/><br/>
                <h5>Zdjęcie ze strony tytułowej</h5>
                <p>Danis Jusupow</p>

                <h5>Źródła</h5>
                <p>https://sdb.org.pl</p>
                <p>https://salezjanie.com</p>
                <p>Strony szkoł salezjańskich</p>
                <p>Wikipedia o Janie Bosco</p>
            </div>
        </Page>
    )
}

export default Credits;