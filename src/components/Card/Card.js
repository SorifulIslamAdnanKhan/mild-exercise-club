import './Card.css';

const Card = ({card}) => {
    const { name, picture, timeRequired } = card;
    
    return (
        <div className="col-md-6 col-lg-4">
            <div class="card">
                <img src={picture} class="card-img-top image" alt="" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p><b>Time Required: {timeRequired}</b></p>
                    <button className='btn btn-warning text-white'>Add To List</button>
                </div>
            </div>  
        </div>
        
    );
};

export default Card;