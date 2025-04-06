import "./numbers.scss";

const Numbers = ({numbers}) => {
    return (
        <div className="numbers">
            <div className="container">

                {numbers.map(n =>
                    <div className="number" key={n.name}>
                        <span>{n.num}</span>
                        <span>{n.name}</span>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Numbers;