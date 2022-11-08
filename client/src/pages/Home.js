import React, { useEffect, useState } from "react";
import clienteAxios from "../config/axios";
import Header from "../components/Header";
import CreateGroupModal from "../components/modals/CreateGroupModal";
import ModalComponent from "../components/modals/ModalComponent";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { setGroups } from "../features/teacher/teacherSlice";
import { useNavigate } from "react-router-dom";
import { Modal } from "bootstrap";

const Home = () => {
  const groupsState = useSelector((state) => state.teacher.myGroups);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [myModal, setModalData] = useState(null);

  // Asigna a "myModal" un instancia de Modal para mostrar u ocultar
  useEffect(() => {
    const getGroups = async () => {
      const user = localStorage.getItem("user");
      try {
        const myGroups = await clienteAxios.get(`/groups/${user}`);
        dispatch(setGroups(myGroups.data));
      } catch (error) {
        console.log(error);
      }
    };
    getGroups();
    setModalData(new Modal("#myModal"));
  }, []);

  const showModal = () => {
    myModal.show();
  };

  return (
    <div className="main">
      <ModalComponent data-bs-backdrop="static" data-bs-keyboard="false">
        <CreateGroupModal title="Crear grupo" myModal={myModal} />
      </ModalComponent>
      <div className="container-fluid container-xxl">
        <Header />
        <main>
          <div className="row m-0">
            <h1>Aulapplus</h1>
            <div className="col-12 col-md-3 justify-content-end m-0 p-0">
              <Card title="Crea un grupo" handleClick={showModal} />
            </div>
            {groupsState &&
              groupsState.map((item) => (
                <div
                  key={item._id}
                  className="col-12 col-md-3 justify-content-end m-0 p-0"
                >
                  <Card
                    title={`${item.grade}o "${item.group}"`}
                    subtitle={item.cicle}
                    handleClick={() => navigate(`/group/${item._id}`)}
                  />
                </div>
              ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
