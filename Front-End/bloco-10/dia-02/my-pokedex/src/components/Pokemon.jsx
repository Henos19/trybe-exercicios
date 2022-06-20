import React from "react";

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight, image} = this.props.pokemon;
    return (
      <section className="pokemonCard">
        <div className="pokemonInfo">
          <ul>
            <li>{name}</li>
            <li>{type}</li>
            <li>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</li>
          </ul>
        </div>
        <img src={image} alt={name} />
      </section>
    )
  }
}

export default Pokemon;
