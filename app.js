class Header extends React.Component {
  render () {
    return (
      <h1> Michael "Jake" Rick </h1>
    )
  }
}

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
