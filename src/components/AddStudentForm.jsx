import React, { useState } from 'react';

const AddStudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && subject && score) {
      onAddStudent({ name, subject, score });
      setName('');
      setSubject('');
      setScore('');
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Materia"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type="text"
        placeholder="Calificación"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <button type="submit">Añadir Alumno</button>
    </form>
  );
};

export default AddStudentForm;