console.log("ola")

let precio
let precioBsDolar
const campoPrecio = document.getElementById('tasa');
const campoDolar = document.getElementById('dolar');
const campoResultado = document.getElementById('monto');

const url = "https://v6.exchangerate-api.com/v6/572e47397575f899191f4ce2/latest/USD"

fetch(url)
.then(res => res.json())
.then(data => {
    precio = data
    console.log(precio)
    campoPrecio.innerHTML = precio.conversion_rates.VES
})

function calcular(){
    let price = parseFloat(campoPrecio.textContent);
    let mount = campoDolar.valueAsNumber;
    let result = price * mount;

    campoResultado.valueAsNumber = result;
    console.log(result);
}
