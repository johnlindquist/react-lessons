import React from "react"
import { render } from "react-dom"

class Demo extends React.Component {
  render() {
    return (
      <h2>
        {this.props.greeting}, {this.props.name}
      </h2>
    )
  }
}

const greeting = "hello"
const name = "John"

const App = () => <Demo {...{ greeting, name }} />

render(<App />, document.getElementById("root"))
