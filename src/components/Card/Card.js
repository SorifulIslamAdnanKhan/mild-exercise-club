import './Card.css';

const Card = ({ card, handleTime }) => {
    const { name, picture, timeRequired } = card;
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card">
                <img src={picture} className="card-img-top image" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p><b>Time Required: {timeRequired}</b></p>
                    <button onClick={() => handleTime(card)} className='btn btn-warning text-white'>Add To List</button>
                </div>
            </div>  
        </div>
    );
};

export default Card;