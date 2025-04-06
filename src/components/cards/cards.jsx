import "./cards.scss";

const Cards = ({data}) => {
    return (
        <div className="cards">
            {data.map(item => 
                <div className="card" key={item.name}>
                    <h5>{item.name}</h5>
                    <p>{item.text}</p>
                </div>
            )}
        </div>
    )
}

export default Cards;