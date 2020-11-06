import "@testing-library/jest-dom/extend-expect";
import validation from "../Helpers/Validation";

describe("Payment form validation", () => {
  test("Test that all data is true", async () => {
    const payment = validation({
      number: "5263 9223 8448 5286",
      name: "joao macedo",
      validity: "03/21",
      cvv: "645",
      parcel: "1x R$12.000,00 sem juros",
    });

    expect(payment).toEqual({});
  });

  test("Test if the credit card is false", async () => {
    const payment = validation({
      number: "5263 9223 8448",
      name: "joao macedo",
      validity: "03/21",
      cvv: "645",
      parcel: "1x R$12.000,00 sem juros",
    });

    expect(payment).toEqual({number: "Número do cartão inválido"});
  });

  test("Test if the name is empty", async () => {
    const payment = validation({
      number: "5263 9223 8448 5286",
      name: "",
      validity: "03/21",
      cvv: "645",
      parcel: "1x R$12.000,00 sem juros",
    });
    expect(payment).toEqual({ name: "Preencha o titular" });
  });

  test("Test if the name has no number", async () => {
    const payment = validation({
      number: "5263 9223 8448 5286",
      name: "5263",
      validity: "03/21",
      cvv: "645",
      parcel: "1x R$12.000,00 sem juros",
    });
    expect(payment).toEqual({ name: "Titular inválido" });
  });

  test("Test if date has month and year", async () => {
    const payment = validation({
      number: "5263 9223 8448 5286",
      name: "joao macedo",
      validity: "01/2",
      cvv: "645",
      parcel: "1x R$12.000,00 sem juros",
    });

    expect(payment).toEqual({ validity: "Data de validade inválida" });
  });

  test("test if date is greater than current date", async () => {
    const payment = validation({
      number: "5263 9223 8448 5286",
      name: "joao macedo",
      validity: "01/20",
      cvv: "645",
      parcel: "1x R$12.000,00 sem juros",
    });

    expect(payment).toEqual({ validity: "Data de validade inválida" });
  });

  test("Test if the cvv is false", async () => {
    const payment = validation({
      number: "5263 9223 8448 5286",
      name: "joao macedo",
      validity: "03/21",
      cvv: "64",
      parcel: "1x R$12.000,00 sem juros",
    });

    expect(payment).toEqual({ cvv: "CVV inválido" });
  });

  test("Test if the parcel is empty", async () => {
    const payment = validation({
      number: "5263 9223 8448 5286",
      name: "joao macedo",
      validity: "03/21",
      cvv: "645",
      parcel: "",
    });
    expect(payment).toEqual({ parcel: "Insira o número de parcelas" });
  });
});
