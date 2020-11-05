import React from "react";

import card from "../../../images/icon-card.svg";
import visa from "../../../images/visa.png";
import "./BoxCardComponent.scss";

function BoxCardComponent({ rotateCard, form }) {

  return (
    <aside className="box-card">
      <div className="box-card__content">
        <div className="change-payment">
          <i className="change-payment__arrow"></i>
          <p className="d-sm-none">Alterar forma de pagamento</p>
          <p className="d-sm-block">
            <strong>Etapa 2</strong> de 3
          </p>
        </div>

        <div className="title">
          <h1>
            <img
              src={card}
              className="title__icon"
              alt="Adicione um novo cartão"
            />
            Adicione um novo
            <br /> cartão de crédito
          </h1>
        </div>

        <div className={`credit-card ${rotateCard ? "credit-card__rotate" : ""}`}>
          <div className="credit-card__front credit-card__flip">
            <img
              src={visa}
              className="credit-card__front--flag"
              alt="Cartão de credito"
            />
            <div className="credit-card__front--number">
              {form && form.number ? form.number : '**** **** **** ****'}
            </div>
            <div className="credit-card__front--bottom">
              <div className="credit-card__front--name">{form && form.name ? form.name : 'nome do titular'}</div>
              <div className="credit-card__front--validity">{form && form.validity ? form.validity : '00/00'}</div>
            </div>
          </div>

          <div className="credit-card__back credit-card__flip">
            <div className="credit-card__back--code">{form && form.cvv ? form.cvv : '***'}</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default BoxCardComponent;
