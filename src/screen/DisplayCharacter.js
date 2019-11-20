import React, { Component } from "react"
import axios from "axios"

class DisplayCharacter extends Component {
  state = {
    character: []
  }
  componentDidMount() {
    console.log(this.props.match.params.id)
    const id = this.props.match.params.id
    axios
      .get(`https://harrypotterapi20.herokuapp.com/characters/${id}`)
      .then(res => this.setState({ character: res.data }))
  }
  render() {
    const { character } = this.state
    return (
      <div>
        {character.map((info, index) => {
          return (
            <div key={index}>
              <p>{info.name}</p>
              <img src={info.image} alt={info.name} />
              <p>{info.house}</p>
            </div>
          )
        })}
      </div>
    )
  }
}
export default DisplayCharacter
