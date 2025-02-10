import pngs from "../../assets/images/grommet-icons_figma.svg";
import svg2 from "../../assets/icons/Group 1378.png";
import "./card.css";
function Cards(props) {
    
    return (
        <div className='cards'>
            <div className="card">
                <div className="card-title">
                    <img className="card-img" src={pngs} alt="figma" />
                    <div>
                        <b>{props.title}</b>
                        <p>{props.price}</p>
                    </div>
                </div>
                <div className="card-content">
                    <p>{props.description}</p>
                    <div className="visit" >
                        <img className="visit-img" src={svg2} alt="visit" />
                        <button>Visit</button>
                    </div>
                </div>
            </div>

        </div>
    )

}
export default Cards;
