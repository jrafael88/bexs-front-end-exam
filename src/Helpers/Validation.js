export default function validation(values) {
  let errors = {};

  if (values.number.length < 19) {
    errors.number = "Número do cartão inválido";
  }

  if (values.name === "") {
    errors.name = "Preencha o titular";
  } else if (!/[A-Za-z]$/.test(values.name)) {
    errors.name = "Titular inválido";
  }

  if (values.validity.length < 5) {
    errors.validity = "Data de validade inválida";
  } else if (new Date(`20${values.validity.slice(3)}`, values.validity.slice(0, 2) - 1) < new Date()) {
    errors.validity = "Data de validade inválida";
  }

  if (values.cvv.length < 3) {
    errors.cvv = "CVV inválido";
  }

  if (!values.parcel) {
    errors.parcel = "Insira o número de parcelas";
  }

  return errors;
}
