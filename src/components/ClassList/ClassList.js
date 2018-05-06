import React, { Component } from 'react';
import axios from 'axios';

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
    let studentsList = students.map(student => {
      return <h3 studentID={student.id}>{student.first_name} {student.last_name}</h3>
    });

    return (
      <div className="box">
        <h1></h1>
        <h2>ClassList: {this.props.match.params.class}</h2>
        { studentsList }

      </div>
    )
  }
}

/*
map over the students and return an h3 tag of the students first and last name.
  Remember react requires a unique key prop on mapped elements.
Undearneath the h2 tag, render the mapped over students.
Update the h1 tag to display the page's class name.
  Hint: react-router-dom passes down a match object on a component's props.

class:"MATH1010"
email:"wpeto0@ft.com"
first_name:"Wilona"
grade:"C"
id:1
last_name:"Peto"
*/