export function maskPrice(value) {
  const newValue = parseFloat(value).toFixed(2).split(".");
  newValue[0] = newValue[0].split(/(?=(?:...)*$)/).join(".");
  return newValue.join(",");
}

export function maskDate(value) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d{4})$/, "$1/$2");
}

export function maskCard(value) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d{1,2})/, "$1 $2")
    .replace(/(\d{4})\d/, "$1");
}
