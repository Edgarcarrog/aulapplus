import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="main">
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
                  <Button className="btn-main my-2">Crear grupo</Button>
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
