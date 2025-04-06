import "./recrutation.scss";

import Button from "./../../components/button/button";

import matFizIcon from "./../../assets/mat-fiz-int-ico.png";
import matChemIcon from "./../../assets/mat-chem-ico.png";
import humanIcon from "./../../assets/human-ico.png";
import biolChemIcon from "./../../assets/biol-chem-ico.png";

const classes = [
    {
        id: 1,
        name: "Klasa A",
        subjects: ["Matematyka", "Geografia", "Angielski"],
        image: humanIcon
    },
    {
        id: 2,
        name: "Klasa B",
        subjects: ["Biologia", "Chemia"],
        image: biolChemIcon
    },
    {
        id: 3,
        name: "Klasa C",
        subjects: ["Matematyka", "Chemia"],
        image: matChemIcon
    },
    {
        id: 4,
        name: "Klasa D",
        subjects: ["Matematyka", "Fizyka", "Informatyka"],
        image: matFizIcon
    }
]


const NewClasses = () => {

    return (
        <div className="new-classes">

            {classes.map(c => 
                <div className="class" key={c.id}>
                    <img src={c.image} alt="class profile image"/>
                    <span>{c.name}</span>
                    <ul>
                        {c.subjects.map(s => <li key={s}>{s}</li>)}
                    </ul>
                    <Button to="/rekrutacja" dark>O klasie</Button>
                </div>
            )}

        </div>
    )
}

export default NewClasses