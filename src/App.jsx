import "./App.css";
import { Component } from "react";
import Box from "./components/Box";

console.log("working?")

class App extends Component {
  constructor(props) {
    super(props);

    // set default state
    const boxes = [];
    const numBoxes = 24;

    for (let i = 0; i < numBoxes; i++) {
      boxes.push({
        id: i,
        color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`,
      });
    }
    this.state = { boxes, };
    this.handleBoxClick=this.handleBoxClick.bind(this);
  } 
  handleBoxClick(e) {
      
    const newBoxes = this.state.boxes.map((box) => { // populates new array with function results in every box (new color)
      if (box.id == e.target.id) {  // e.target represents DOM object.
        box.color = `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`;
      }
      return box;
    });
    this.setState({ boxes:newBoxes}); // boxes 
  }
  getRandomColor() {
    const rgb = Math.round(Math.random() * 255); // variable "rgb" gets random number, called when boxes are clicked
    return rgb;
  }
  // bind methods to this

  render() {
    const renderBoxes = this.state.boxes.map((box) => (// Maps through "boxes"
        <Box
          key={box.id}
          id={box.id} // creates/returns box component for each box in the array
          color={box.color}
          handleBoxClick={this.handleBoxClick}
        />
      )
    );
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1> React: State and Props </h1>{" "}
        <div className="App"> {renderBoxes} </div>{" "}
      </main>
    );
}
}

export default App;
