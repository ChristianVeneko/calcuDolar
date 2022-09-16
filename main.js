console.log("ola")

let precio
let precioBsDolar
const campoPrecio = document.getElementById('tasa');
const campoDolar = document.getElementById('dolar');
const campoResultado = document.getElementById('monto');

function cargarDatos(){
    fetch("https://exchangemonitor.net/api/divisas?user=&token=&currency=").then((resp) => {
        if(resp.ok){
            return resp.json();
        }
    }).then((json) => {
        precio = json.data;
        console.log(precio);
        campoPrecio.innerHTML = precio[0].data.rate;
        return campoPrecio;

    })
}

function calcular(){
    let price = parseFloat(campoPrecio.textContent);
    let mount = campoDolar.valueAsNumber;
    let result  = price * mount;
    console.log(result)
    campoResultado.valueAsNumber = result;
    
}

window.onload = cargarDatos;