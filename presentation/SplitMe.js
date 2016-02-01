import React from "react";
import Toggle from "material-ui/lib/toggle";
import {Motion, spring} from "react-motion";

export default class SplitMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 100
    };
  }

  handleToggle = (event, value) => {
    this.setState({
      width: value ? 45 : 100
    });
  };

  render() {
    return (
      <div>
        <Motion defaultStyle={{x: 100}} style={{x: spring(this.state.width)}}>
          {(value) => (
            <iframe
              width={`${value.x}%`}
              height="600px"
              frameBorder="0"
              style={{background: "#4caf50"}}
              src="https://splitme.net/"
            />
        )}
        </Motion>
        <div style={{fontSize: 18, width: 150}}>
          <Toggle
            label="Mobile"
            labelStyle={{color: "#255527"}}
            onToggle={this.handleToggle}
          />
        </div>
      </div>
    );
  }
}
