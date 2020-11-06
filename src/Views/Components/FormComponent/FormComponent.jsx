import React from "react";

import { maskDate, maskCard } from "../../../Helpers/Mask";
import validation from "../../../Helpers/Validation";
import ServicePay from "../../../Services/ServicePay";
import Loading from "../Loading/Loading";

import "./FormComponent.scss";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      values: {
        number: "",
        name: "",
        validity: "",
        cvv: "",
        parcel: "",
      },
      errors: {},
      installments: [
        "1x R$12.000,00 sem juros",
        "4x R$3.000,00 sem juros",
        "8x R$1.500,00 sem juros",
        "12x R$1.000,00 sem juros",
      ],
    };
  }

  onSelectParcel = (value) => {
    const values = {
      ...this.state.values,
      parcel: value,
    };
    this.setState({ values });
  };

  toggleCard = (rotateCard) => {
    this.props.rotate(rotateCard);
  };

  handleChange = (e, mask) => {
    const value = mask ? mask(e.target.value) : e.target.value;
    const values = { ...this.state.values, [e.target.id]: value };
    this.setState({ values });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { values } = this.state;

    const errors = validation(values);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      ServicePay.pay(values, (response) => {
        this.setState({ loading: false });
      });
    }
  };

  render() {
    const {
      values: { number, name, validity, cvv },
      errors,
      loading,
    } = this.state;

    return (
      <div>
        {loading && <Loading />}
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="row">
            <div
              className={`form-field form-field--input ${
                errors.number ? "form-field--invalid" : ""
              }`}
            >
              <input
                name="number"
                id="number"
                autoComplete="off"
                value={number}
                onChange={(e) => this.handleChange(e, maskCard)}
              />
              <label className="form-field--label" htmlFor="number">
                Número do cartão
              </label>
              {errors.number && (
                <span className="form-field--error">{errors.number}</span>
              )}
            </div>
          </div>

          <div className="row">
            <div
              className={`form-field form-field--input ${
                errors.name ? "form-field--invalid" : ""
              }`}
            >
              <input
                name="name"
                id="name"
                autoComplete="off"
                value={name}
                onChange={(e) => this.handleChange(e)}
              />
              <label className="form-field--label" htmlFor="name">
                Nome (igual ao cartão)
              </label>
              {errors.name && (
                <span className="form-field--error">{errors.name}</span>
              )}
            </div>
          </div>

          <div className="row">
            <div
              className={`form-field form-field--input ${
                errors.validity ? "form-field--invalid" : ""
              }`}
            >
              <input
                name="validity"
                id="validity"
                autoComplete="off"
                value={validity}
                maxLength={5}
                onChange={(e) => this.handleChange(e, maskDate)}
              />
              <label className="form-field--label" htmlFor="validity">
                Validade
              </label>
              {errors.validity && (
                <span className="form-field--error">{errors.validity}</span>
              )}
            </div>
            <div
              className={`form-field form-field--input ${
                errors.cvv ? "form-field--invalid" : ""
              }`}
            >
              <input
                name="cvv"
                id="cvv"
                autoComplete="off"
                value={cvv}
                maxLength={3}
                onChange={(e) => this.handleChange(e)}
              />
              <label className="form-field--label" htmlFor="cvv">
                CVV <i onMouseEnter={() => this.toggleCard(true)} onMouseOut={() => this.toggleCard(false)}>i</i>
              </label>
              {errors.cvv && (
                <span className="form-field--error">{errors.cvv}</span>
              )}
            </div>
          </div>

          <div className="row">
            <div
              className={`form-field form-field--input form-field--arrow ${
                errors.parcel ? "form-field--invalid" : ""
              }`}
            >
              <input
                type="text"
                value={this.state.values.parcel}
                name="parcel"
                id="parcel"
                autoComplete="off"
                readOnly="readonly"
              />
              <label className="form-field--label" htmlFor="parcel">
                Número de parcelas
              </label>
              <ul className="dropdown">
                {this.state.installments.map((installment) => (
                  <li
                    key={installment}
                    onClick={() => this.onSelectParcel(installment)}
                  >
                    {installment}
                  </li>
                ))}
              </ul>
              {errors.parcel && (
                <span className="form-field--error">{errors.parcel}</span>
              )}
            </div>
          </div>

          <div className="row">
            <button className="btn btn__red">Continuar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormComponent;
