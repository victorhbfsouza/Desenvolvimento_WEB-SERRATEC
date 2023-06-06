import React from "react";
import './style.css'

class Card extends React.Component {

 render() {
        return (
            <div>
                <div className="cardContainer">
                    <img src={this.props.picture} alt={this.props.name} />
                    <h3>{this.props.name}</h3>
                </div>
            </div>
        )
    }
}

export default Card;