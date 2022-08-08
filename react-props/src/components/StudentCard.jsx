import React from "react";

export default function StudentCard({ student }) {
  return (
    <section>
      <h2>
        {student.name}
        <p>Age: {student.age}</p>
        <p>Id: {student.id}</p>
        <p>Term: {student.term}</p>
      </h2>
    </section>
  );
}
