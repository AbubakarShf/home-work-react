import React from "react";
export default class CounterClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: props.Value,
      bgColor: "",
    }
  }
  render() {
    return (
      <React.Fragment>
        <article>
          <h5 style={{backgroundColor: this.state.bgColor}}>Counter Class</h5>
          <div className='counter__class'>
            <button onClick={() => this.updateValue(1)} className='Inc__btn'>
              Inc
            </button>
            <span className='value'>{this.state.counter}</span>
            <button onClick={() => this.updateValue(-1)} className='Dec__btn'>
              Dec
            </button>
          </div>
        </article>
      </React.Fragment>
    )
  }
  updateValue(val) {
    this.setState((PrevState) => {
      return {
        counter: PrevState.counter + val,
      }
    });
    this.changeBgColor(val);
  }
  changeBgColor(Val) {
    let Color = "";
    this.setState((PrevState) => {
      if (Val ===+1) Color = "Green"
      if(Val===-1) Color = "Blue"
      return {
        bgColor: Color,
      }
    })
  }
}
