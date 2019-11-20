import React from "react"
import axios from "axios"
import Card from "../components/Card"

class Characters extends React.Component {
  state = {
    characters: []
  }

  componentDidMount() {
    axios
      .get("https://harrypotterapi20.herokuapp.com/characters")
      .then(res => this.setState({ characters: res.data }))
  }
  render() {
    return (
      <div>
        Characters
        {this.state.characters.map((character, index) => (
          <Card
            key={index}
            name={character.name}
            image={character.image}
            id={character.id}
          />
        ))}
      </div>
    )
  }
}

export default Characters
