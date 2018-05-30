import React, { Component } from "react";

import * as R from "ramda";
import Selection2 from "./Selection2";
import SelectionItem2 from "./SelectionItem2";
import "./Demo.css";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selects: undefined,
      selected: []
    };
  }

  render() {
    return (
      <div>
        <h1>React Draglect</h1>
        <h3>React JS Component for drag select with mouse</h3>
        <button onClick={e => this.setState({ selects: true })}>
          select all:
        </button>
        <button onClick={e => this.setState({ selects: false })}>
          clear all:
        </button>
        <button onClick={e => this.setState({ selects: ["0", "2", "4"] })}>
          select 1 3 5
        </button>
        <div style={{ margin: 20, minHeight: 80 }}>
          {this.state.selected.join(" ")}
        </div>
        <Selection2
          selects={this.state.selects}
          onSelectionChange={x => {
            console.log(x);
            this.setState({ selected: x });
          }}
        >
          <div>
            <table>
              <tbody>
                
                            <SelectionItem2 className="item">a</SelectionItem2>
                          
              </tbody>
            </table>
          </div>
        </Selection2>
      </div>
    );
  }
}

export default Demo;
