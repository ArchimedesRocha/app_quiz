import React from "react";
import { HomeStyle } from "./style";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import imgHome from "../../assets/images/moc-img-02.png";

export default function Home() {
  return (
    <HomeStyle>
      <Helmet>
        <title>Quiz App</title>
      </Helmet>
      <div className="container-center">
        <div id="home">
          <section>
            <div className="header-card">
              <img src={imgHome} alt="" />
              <h1>Quiz</h1>
              <h2>Estude até passar</h2>
            </div>
            <ul className="buttons-card">
              <li className="init">
                <Link to="/play/instructions">Iniciar</Link>
              </li>
              <li className="login">
                <Link to="/play/instructions">Logar</Link>
              </li>
              <li className="create">
                <span>Ainda não tem sua conta?</span>
                <Link to="/play/instructions"> Criar conta</Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </HomeStyle>
  );
}
