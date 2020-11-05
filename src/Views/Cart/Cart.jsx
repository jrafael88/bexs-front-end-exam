import React from "react";
import HeaderComponent from "../Components/HeaderComponent/HeaderComponent";
import BoxCardComponent from "../Components/BoxCardComponent/BoxCardComponent";

import "./Cart.scss";

class Cart extends React.Component {
  
  state = {
    rotateCard: false,
    formControls: null,
  };

  receivesRotation = (rotateCard) => {
    this.setState({ rotateCard });
  };

  receiveForm = (formControls) => {
    this.setState({ formControls });
  };

  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="container">
          <div className="content">
            <BoxCardComponent
              rotateCard={this.state.rotateCard}
              form={this.state.formControls}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
