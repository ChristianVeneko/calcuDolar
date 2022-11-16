console.log("ola")

let precio
let precioBsDolar
const campoPrecio = document.getElementById('tasa');
const lastUpdate = document.getElementById('lastUpdate')
const campoDolar = document.getElementById('dolar');
const campoResultado = document.getElementById('monto');

function cargarDatosBCV(){
    const url = "https://v6.exchangerate-api.com/v6/572e47397575f899191f4ce2/latest/USD"
    fetch(url)
    .then(res => res.json())
    .then(data => {
    precio = data
    console.log(precio)
    let fecha = new Date(precio.time_last_update_utc)
    console.log(fecha)
    campoPrecio.innerHTML = precio.conversion_rates.VES
    lastUpdate.innerHTML = fecha
    return campoPrecio
})
}

function cargarDatosParalelo(){
    fetch("https://exchangemonitor.net/api/divisas?user=CHRISTIAN_121022&token=sM9OWL5mpm6e3akM0Zsv&currency=USD&filter=VES").then((resp) => {
        if(resp.ok){
            return resp.json();
        }
    }).then((json) => {
        
        precio = json.data;
        console.log(precio);
        campoPrecio.innerHTML = precio[0].data.rate;
        lastUpdate.innerHTML = precio[0].format.date
        return campoPrecio;
    })
}

function calcular(){
    let price = parseFloat(campoPrecio.textContent);
    let mount = campoDolar.valueAsNumber;
    let result = price * mount;
    result = result.toFixed(2)
    campoResultado.valueAsNumber = result;
    console.log(result);
}


window.onload = cargarDatosBCV()