import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

  handleInputChange = e => {
    console.log(e.target.value);
  }
  
  render() {
    return (
      <>
        <ul>
          {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
        <input type="text" onChange={this.handleInputChange} />
      </>
    );
  }
}

export default TechList;