import { useState } from "react";
import useForm from "../hooks/useForm";
import Input from "./Input";
import { useSelector } from "react-redux";
import clienteAxios from "../config/axios";

//Componente que agrega materias al grupo
const AddSubjects = () => {
  const currentGroup = useSelector((state) => state.teacher.currentGroup);
  console.log(currentGroup._id);

  const [subjectsArray, setSubjectsArray] = useState([]);

  const [subject, handleChange, resetDataForm] = useForm({
    subjectName: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (subject.subjectName.trim()) {
      console.log([...subjectsArray, subject.subjectName]);
      setSubjectsArray([...subjectsArray, subject.subjectName]);
      resetDataForm();
    }
  };

  const setSubject = async () => {
    try {
      await clienteAxios.put(`/groups/addSubjects/${currentGroup._id}`, {
        subjects: subjectsArray,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <div className="row m-0 justify-content-center">
        <div className="col-12 col-md-6 m-0 p-0">
          <h3>Agrega las materias</h3>
        </div>
      </div>
      <div className="row m-0 justify-content-center">
        <div className="col-12 col-md-3 m-0 px-1">
          <form onSubmit={handleSubmit}>
            <Input
              className="m-0"
              id="subjectName"
              label="Nombre de la materia"
              handleChange={handleChange}
              value={subject.subjectName}
            />
            <Input
              className="btn-main"
              type="submit"
              value="Insertar materia"
            />
          </form>
        </div>
        <div className="col-12 col-md-3 m-0 p-0">
          <ul className="list-group">
            {subjectsArray &&
              subjectsArray.map((item, index) => (
                <li key={index} className="list-group-item">
                  {item}
                </li>
              ))}
          </ul>
          <Input
            className="btn-main"
            type="submit"
            value="Agregar materias"
            handleClick={setSubject}
          />
        </div>
      </div>
    </main>
  );
};

export default AddSubjects;
