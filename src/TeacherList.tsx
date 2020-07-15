import React, { Component } from "react";
import Person from "./Person";
import PersonItem from "./PersonItem";

interface TeacherPropType {
  teachers: Array<Person>;
}

class TeacherList extends Component<TeacherPropType> {
  render() {
    return (
      <div>
        {this.props.teachers.length === 0 ? (
          <div style={{ height: "100px", width: "250px", margin: "10px auto" }}>
            "No teachers to display"
          </div>
        ) : (
          <React.Fragment>
            <div
              style={{ height: "10px", width: "250px", margin: "0px auto" }}
            >
              Teachers' List
            </div>
            {this.props.teachers.map((teacher) => {
              return <PersonItem val={teacher} />;
            })}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default TeacherList;
