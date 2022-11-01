import React, { useEffect, useState } from "react";
import clienteAxios from "../config/axios";
import { Modal } from "bootstrap";
import Button from "../components/Button";
import Header from "../components/Header";
import CreateGroupModal from "../components/modals/CreateGroupModal";
import ModalComponent from "../components/modals/ModalComponent";

const Home = () => {
  const [myModal, setModalData] = useState(null);

  // Asigna a "myModal" un instancia de Modal para mostrar u ocultar
  useEffect(() => {
    //TODO:TERMINAR FUNCIÓN
    const getGroups = async () => {
      const user = localStorage.getItem("user");
      try {
        const myGroups = await clienteAxios.get(`/groups/${user}`);
        console.log(myGroups);
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
      <div className="container-fluid container-lg">
        <Header />
        <main>
          <div className="row m-0">
            <div className="col-12 justify-content-end m-0 p-0">
              <h1>Aulapplus</h1>
              <section className="welcome-card">
                <div className="welcome-card__img"></div>
                <div className="welcome-card__body p-2">
                  <p className="m-0">Crea un grupo para empezar</p>
                  <Button className="btn-main my-2" handleClick={showModal}>
                    Crear grupo
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
