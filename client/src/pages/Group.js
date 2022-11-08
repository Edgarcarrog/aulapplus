import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentGroup } from "../features/teacher/teacherSlice";
import clienteAxios from "../config/axios";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import AddSubjects from "../components/AddSubjects";
import Input from "../components/Input";
import ModalComponent from "../components/modals/ModalComponent";
import { Modal } from "bootstrap";
import AddStudentModal from "../components/modals/AddStudentModal";

const Group = () => {
  const dispatch = useDispatch();
  const currentGroup = useSelector((state) => state.teacher.currentGroup);
  console.log(currentGroup);

  const { groupId } = useParams();

  const [loading, setLoading] = useState(true);
  const [subjects, setSubjects] = useState(null);
  const [myModal, setModalData] = useState(null);

  //const currentGroup = useSelector((state) => state.teacher.currentGroup);

  useEffect(() => {
    const getOneGroup = async () => {
      try {
        const currentGroup = await clienteAxios.get(
          `/groups/oneGroup/${groupId}`
        );
        //agrega el grupo al state global
        dispatch(setCurrentGroup(currentGroup.data));
        setSubjects(currentGroup.data.subjects);
        setModalData(new Modal("#myModal"));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getOneGroup();
  }, []);

  return (
    <div className="main">
      <ModalComponent data-bs-backdrop="static" data-bs-keyboard="false">
        <AddStudentModal title="Agregar alumno" myModal={myModal} />
      </ModalComponent>
      <div className="container-fluid container-xxl">
        <Header />
        {loading ? (
          <Spinner />
        ) : subjects.length === 0 ? (
          <AddSubjects />
        ) : (
          <>
            <main>
              <div className="row m-0">
                <div className="col-12 col-md-4 justify-content-end m-0 p-0">
                  <h1>{`${currentGroup.grade}° "${currentGroup.group}" ${currentGroup.cicle}`}</h1>
                  <ul className="list-group">
                    {subjects &&
                      subjects.map((item, index) => (
                        <li key={index} className="list-group-item">
                          <Link to="/home" className="list-group__link">
                            {item}
                          </Link>
                        </li>
                      ))}
                  </ul>
                  <Input
                    className="btn-main"
                    type="submit"
                    value="Agregar alumno"
                    handleClick={() => myModal.show()}
                  />
                </div>
              </div>
            </main>
          </>
        )}
      </div>
    </div>
  );
};

export default Group;
