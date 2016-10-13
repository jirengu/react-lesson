import React from 'react';
class  App extends React.Component {
 render(){
    let username = this.props.username
    let age = this.props.age
    return (
      <div>
        <h3> {username} </h3>
        <p> age is: {age} </p>
      </div>
      )
 }
}

App.propTypes = {
  username: React.PropTypes.string,
  age: React.PropTypes.number.isRequired
}

App.defaultProps = {
  username: 'jirengu',
  age: 2
}

export default App;