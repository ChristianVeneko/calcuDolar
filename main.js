console.log("ola")

let precio
let precioBsDolar
const campoPrecio = document.getElementById('tasa');
const campoDolar = document.getElementById('dolar');
const campoResultado = document.getElementById('monto');

function cargarDatos(){
    fetch("https://exchangemonitor.net/api/divisas?user=EDUARDO_150922&token=JHtygv65g5j8w0fy1H61&currency=USD&filter=VES").then((resp) => {
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
    let result = price * mount;

    campoResultado.valueAsNumber = result;
    console.log(result);
}

window.onload = cargarDatos;