import react from "react";
import "./App.css";

//componentdidMount
// export default class App extends react.Component {
//   constructor() {
//     super();
//     this.state = { data: false };
//   }
//   componentDidMount() {
//     console.log("componentDidMount");
//     { this.setState({ data: true }) };
//   }
//   render() {
//     console.log("render");
//     return (
//       <div>
//         <h1>hello world</h1>
//         {this.state.show ? <Child /> : null}
//         <button
//           onClick={() => {
//             this.setState({ show: !this.state.show });
//           }}
//         >
//           toggle button
//         </button>
//       </div>
//     );
//   }
// }

//componentWillUnmount

// export default class App extends react.Component {
//   constructor() {
//     super();
//     this.state = { show: false };
//   }
//   render() {
//     console.log("render");
//     return (
//       <div>
//         <h1>hello world</h1>
//         {this.state.show ? <Child /> : null}
//         <button
//           onClick={() => {
//             this.setState({ show: !this.state.show });
//           }}
//         >
//           toggle button
//         </button>
//       </div>
//     );
//   }
// }
// class Child extends react.Component {
//   componentWillUnmount() {
//     console.log("Component is hidden know");
//   }
//   render() {
//     return (
//       <div>
//         <h2>Umar</h2>
//       </div>
//     );
//   }
// }

//componentDidupdate
export default class App extends react.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>componentDidupdate</h1>
        <Child data={this.state.counter} />
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Update Counter {this.state.counter}
        </button>
      </div>
    );
  }
}
class Child extends react.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  componentDidUpdate(pP, pS, sS) {
    console.log("matched", pP.data, this.props.data);
  }
  render() {
    return (
      <div>
        <h1>Child Component {this.props.data}</h1>
      </div>
    );
  }
}
