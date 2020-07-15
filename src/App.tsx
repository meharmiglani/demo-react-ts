import React, { Component, FormEvent } from 'react';
import Person from './Person';
import StudentList from './StudentList';
import TeacherList from './TeacherList';
import { Context, ContextType } from './Context';
import './App.css';

interface State {
  name: string;
  email: string;
  age: number;
  students: Array<Person>;
  teachers: Array<Person>;
  studentShow: boolean;
  teacherShow: boolean;
}

class App extends Component {
  state: State = {
    name: '',
    email: '',
    age: -1,
    students: [],
    teachers: [],
    studentShow: false,
    teacherShow: false,
  };

  nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ name: e.target.value });
  };

  emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ email: e.target.value });
  };

  ageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ age: +e.target.value });
  };

  addStudent = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (
      this.state.name === '' ||
      this.state.email === '' ||
      this.state.age === -1
    ) {
      alert('Fields cannot be empty / Age cannot be -1');
      return;
    }
    const updatedStudents: Array<Person> = this.state.students;
    updatedStudents.push({
      id: new Date(),
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
    });
    this.setState({ students: updatedStudents });
    this.setState({ name: '', email: '', age: +'' });
  };

  addTeacher = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (
      this.state.name === '' ||
      this.state.email === '' ||
      this.state.age === -1
    ) {
      alert('Fields cannot be empty / Age cannot be -1');
      return;
    }
    const updatedTeachers: Array<Person> = this.state.teachers;
    updatedTeachers.push({
      id: new Date(),
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
    });
    this.setState({ teachers: updatedTeachers });
    this.setState({ name: '', email: '', age: -1 });
  };

  showStudentHandler = () => {
    this.setState({ studentShow: !this.state.studentShow });
  };

  showTeacherHandler = () => {
    this.setState({ teacherShow: !this.state.teacherShow });
  };

  deleteStudentHandler = (id: Date) => {
    const updatedStudentList: Array<Person> = this.state.students.filter(
      (student) => student.id !== id
    );
    this.setState({ students: updatedStudentList });
  };

  deleteHandler: ContextType = {
    delete: this.deleteStudentHandler,
  };

  render() {
    return (
      <div className='main'>
        <form className='user-input'>
          <div className='form-control'>
            <label>Name</label>
            <input
              type='text'
              className='title'
              value={this.state.name}
              onChange={this.nameChangeHandler}
            />
          </div>
          <div className='form-control'>
            <label>Email</label>
            <input
              type='text'
              className='description'
              value={this.state.email}
              onChange={this.emailChangeHandler}
            />
          </div>
          <div className='form-control'>
            <label>Age</label>
            <input
              type='number'
              className='people'
              value={this.state.age}
              onChange={this.ageChangeHandler}
            />
          </div>
          <div className='btnContainer'>
            <button
              className='myButton'
              type='submit'
              onClick={this.addStudent}
            >
              Add Student
            </button>
            <button
              className='myButton'
              type='submit'
              onClick={this.addTeacher}
            >
              Add Teacher
            </button>
          </div>
        </form>
        <button className='myButton' onClick={this.showStudentHandler}>
          {this.state.studentShow ? (
            <span>Hide Student List</span>
          ) : (
            <span>Show Student List</span>
          )}
        </button>

        <button className='myButton' onClick={this.showTeacherHandler}>
          {this.state.teacherShow ? (
            <span>Hide Teacher List</span>
          ) : (
            <span>Show Teacher List</span>
          )}
        </button>
        <Context.Provider value={this.deleteHandler}>
          {this.state.studentShow && (
            <StudentList students={this.state.students} />
          )}
          {this.state.teacherShow && (
            <TeacherList teachers={this.state.teachers} />
          )}
        </Context.Provider>
      </div>
    );
  }
}

export default App;
