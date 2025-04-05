import "./recrutation.scss";

import Button from "./../../components/button/button";

import matFizIcon from "./../../assets/mat-fiz-int-ico.png";


const NewClasses = () => {
    return (
        <div className="new-classes">

            <div className="class">
                <img src={matFizIcon} alt="class profile image"/>

                <span>Matematyczno-fizyczno-informatyczna</span>

                <ul>
                    <li>Matematyka</li>
                    <li>Fizyka</li>
                    <li>Informatyka</li>
                </ul>

                <Button>O klasie</Button>
            </div>

        </div>
    )
}

export default NewClasses