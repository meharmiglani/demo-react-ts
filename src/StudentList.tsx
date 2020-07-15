import React, { Component } from "react";
import Person from "./Person";
import PersonItem from "./PersonItem";

interface StudentPropType {
  students: Array<Person>;
}

class StudentList extends Component<StudentPropType> {
  render() {
    return (
      <div>
        {this.props.students.length === 0 ? (
          <div style={{ height: "100px", width: "250px", margin: "10px auto" }}>
            "No students to display"
          </div>
        ) : (
          <React.Fragment>
            <div style={{ height: "10px", width: "250px", margin: "0px auto" }}>
              Students' List
            </div>
            {this.props.students.map((student) => {
              return <PersonItem val={student} />;
            })}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default StudentList;
