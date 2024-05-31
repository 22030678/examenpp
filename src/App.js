import React, { useState } from 'react';
import AddStudentForm from './components/AddStudentForm.jsx';
import StudentList from './components/StudentList.jsx';
import './App.css';

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="app">
      <h1>Registro de Alumnos</h1>
      <AddStudentForm onAddStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
};

export default App;
