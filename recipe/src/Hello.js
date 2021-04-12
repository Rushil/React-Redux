import Reach from "react"

class Hello extends Reach.Component {
    constructor(props){
        super(props);
        this.state = {
          count: 0
        };
      }
      sayHello = () => {
        this.setState({
          count : this.state.count + 1
        })
      }
      render () {
        return (
          <div>
            <h2>Welcome to the Hello component!</h2>
            <button onClick={this.sayHello}>hello</button>
            <p>{this.state.count}</p>
          </div>
        );
      }
}

export default Hello;