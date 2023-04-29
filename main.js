console.log("Oli")
let precio
let precioBsDolar
const campoPrecio = document.getElementById('tasa');
const lastUpdate = document.getElementById('lastUpdate')
const campoDolar = document.getElementById('dolar');
const campoResultado = document.getElementById('monto');
const labelMoneda = document.getElementById('moneda')
const labelMonedaResultante = document.getElementById('monedaResultante')

let usdToBs = true
let calculado = false

function cambiarOperacion(){
    if(usdToBs){
        usdToBs = false
        labelMoneda.innerText = "Bs."
        labelMonedaResultante.innerText = "USD $"
        if(calculado){
            calcular()
        }
    }else{
        usdToBs = true
        labelMoneda.innerText = "USD $"
        labelMonedaResultante.innerText = "Bs."
        if(calculado){
            calcular()
        }
    }
    
}


function cargarDatosBCV(){
    const url = "https://v6.exchangerate-api.com/v6/572e47397575f899191f4ce2/latest/USD"
    fetch(url)
    .then(res => res.json())
    .then(data => {
    precio = data
    console.log(precio);
    let fecha = new Date(precio.time_last_update_utc);
    campoPrecio.innerHTML = precio.conversion_rates.VES;
    lastUpdate.innerHTML = fecha;
    return campoPrecio;
})
}

function cargarDatosParalelo(){
    fetch('https://s3.amazonaws.com/dolartoday/data.json').then((resp) => {
        if(resp.ok){
            return resp.json();
        }
    }).then((json) => {
        precio = json
        console.log(precio);
        campoPrecio.innerHTML = precio.USD.transferencia;
        lastUpdate.innerHTML = precio._timestamp.fecha;
        return campoPrecio;
    })
}

function calcular(){
    let price = parseFloat(campoPrecio.textContent);
    let mount = campoDolar.valueAsNumber;
    let resultBS = price * mount;
    let resultUSD = mount / price;
    if(usdToBs){
        resultBS = resultBS.toFixed(2);
        campoResultado.valueAsNumber = resultBS;
    }else{
        resultUSD = resultUSD.toFixed(2);
        campoResultado.valueAsNumber = resultUSD;
    }
    calculado = true
}


window.onload = cargarDatosParalelo();