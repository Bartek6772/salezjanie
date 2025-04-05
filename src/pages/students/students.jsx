import Page from "../../components/page/page";
import Article from "../../components/article/article";

import "./students.scss";

const Students = () => {
    return (
        <Page title="Dla uczniów">
            <section className="organization">
                <h3>Organizacja roku szkolnego 2024/2025</h3>

                <div className="content">

                    <div className="list">
                        <h4>Dni Wolne</h4>
                        Przewidywane dni wolne
                        <ul>
                            <li>Zimowa przerwa świąteczna: 23 grudnia 2024 - 1 stycznia 2025</li>
                            <li>Ferie zimowe: 20 stycznia - 2 litu 2025</li>
                            <li>Rekolekcje szkole: 14 - 16 kwietnia 2025</li>
                            <li>Wiosenna przerwa świąteczna: 17 - 22 kwietnia 2025</li>
                            <li>Ferie letnie: 28 czerwca - 31 sierpnia 2025</li>
                        </ul>
                    </div>

                    <div className="list">
                        <h4>Dodatkowe dni wolne</h4>
                        <ul>
                            <li>2-3 stycznia 2025</li>
                            <li>25 kwietnia 2025</li>
                            <li>2 maja 2025</li>
                            <li>5-9 maja 2025</li>
                            <li>20 czerwca 2025</li>
                        </ul>
                    </div>

                    <div className="list">
                        <h4>Egzamin maturalny</h4>
                        Zakończenie zajęć w klasach maturalnych: 25 kwietnia 2025 <br/>
                        Egzamin maturalny: 5-23 maja 2025
                    </div>

                </div>
            </section>
        </Page>
    )
}

export default Students;