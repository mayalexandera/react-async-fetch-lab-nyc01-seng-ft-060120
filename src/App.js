import React from 'react'

class App extends React.Component {
  async componentDidMount() {
    await fetch(" http://api.open-notify.org/astros.json")
    .then(response => response.json())
    .then(data => console.log(data));
  }
  render() {
    return (
      <div>hi</div>
    )
  }
}

export default App