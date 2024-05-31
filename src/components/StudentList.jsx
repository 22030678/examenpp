import React from 'react';

const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Lista de Alumnos</h2>
      {students.length === 0 ? (
        <p>No hay alumnos registrados.</p>
      ) : (
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              <p><strong>Nombre:</strong> {student.name}</p>
              <p><strong>Materia:</strong> {student.subject}</p>
              <p><strong>Calificación:</strong> {student.score}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;