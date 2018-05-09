import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then( response => {
      this.setState({ students: response.data });
    } ).catch( () => { 
      console.log("failed to get students") } );
  }

  render() {
    const { students } = this.state;
    let studentsList = students.map( (student, i) => {
      return <Link to={`/student/${student.id}`} key={ i }>
        <h3>{student.first_name} {student.last_name}</h3>
      </Link>
    });

    return (
      <div className="box">
        <Link to='/' ><button className="btn">{ "<- back" }</button></Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        { studentsList }

      </div>
    )
  }
}
