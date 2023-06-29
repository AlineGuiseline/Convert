const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); //Valor em real
  const currencyValueConverted = document.querySelector(".currency-value"); //Outras moedas

  console.log(currencySelect.value);

  const dolarToday = 5.2;
  const euroToday = 6.2;
  const bitcoinToday = 145.969;
  const lbToday = 6.13;

  if (currencySelect.value === "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }
  if (currencySelect.value === "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }
  if (currencySelect.value === "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / lbToday);
  }
  if (currencySelect.value === "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "XBT",
    }).format(inputCurrencyValue / bitcoinToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")
    const currencyValues = document.querySelector(".currency-value")

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "../assets/dolar.png"
    }

    if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "../assets/euro.png"
        currencyValues.innerHTML = "0,00 €"
    }
    if (currencySelect.value === "libra") {
      currencyName.innerHTML = "Libra"
      currencyImg.src = "../assets/libra.png"
      currencyValues.innerHTML = "0,00 £"
    }
    if (currencySelect.value === "bitcoin") {
      currencyName.innerHTML = "Bitcoin"
      currencyImg.src = "../assets/bitcoin.png"
      currencyValues.innerHTML = "0,00 £"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues);
