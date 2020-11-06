import React from "react";

import breadcrumb from "../../../images/breadcrumb-active.svg";
import "./BreadcrumbComponent.scss";

function BreadcrumbComponent() {
  return (
    <ul className="breadcrumb d-sm-none">
      <li className="breadcrumb__item">
        <i>
          <img src={breadcrumb} alt="Carrinho" />
        </i>{" "}
        Carrinho
      </li>
      <li className="breadcrumb__item">
        <i>2</i> Pagamento
      </li>
      <li className="breadcrumb__item">
        <i>3</i> Confirmação
      </li>
    </ul>
  );
}

export default BreadcrumbComponent;

