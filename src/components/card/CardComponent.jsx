import "./cardStyles.css";

function CardComponent({ data }) {
    return (
        <div className="card_container">
            <div className="card_imgbox">
                <img src={data?.imageLink} className="card_img" alt="card image" />
            </div>
            <div className="card_content">
                <h2 className="card_content--heading">{data?.title}</h2>
                <p className="card_content--text">{data?.content}</p>
            </div>
            <div className="card_name">
                <p className="card_name--main">{data.author}</p>
                <p className="card_name--sub">{data.country}</p>
            </div>
            <div className="card_button">
                <button className="card_button-item">Add to Cart</button>
            </div>
        </div>
    )
}

export default CardComponent;