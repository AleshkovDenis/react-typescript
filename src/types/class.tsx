import React from "react";
type CounterState = {
  readonly count: number;
};

type CounterProps = {
  readonly title: string;
};

class ClassComponent extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  static defaultProps: CounterProps = {
    title: "Default counter: ",
  };

  static getDerivedStateFroProps(props: CounterProps, state: CounterState) {}

  componentDidMount() {}

  shouldComponentUpdate(
    nextProps: Readonly<CounterProps>,
    nextState: Readonly<CounterState>,
    nextContext: any
  ): boolean {
    return true;
  }

  handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    console.log("clientX", e.clientX);
    console.log("clientY", e.clientY);
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>+1</button>
        <a onClick={this.handleClick}>+1</a>
      </div>
    );
  }
}

export default ClassComponent;
