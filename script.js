
const convertButton = document.querySelector("convert-button")
const currencySelect = document.querySelector("currency-select")
const currencyValue= document.querySelector ("currency-value")

function convertValues( event) {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    console.log(" currencySelect")

    const dolarToday = 5.2

    const euroToday = 6.2
    if (currencySelect.value == "dolar") {

        currencyValueConverted.innerHTML == new Intl.NumberFormat("en-US" ,{
            style: "currency",
            currency: "USD",

        }
        ).format(inputCurrencyValuE / dolarToday)
    }
}
convertButton.addEventListener("click", convertValues)


