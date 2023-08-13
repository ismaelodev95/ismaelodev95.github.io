const baremos = {
  3: ['albacete', 'murcia', 'valencia'],
  4: ['almeria', 'castellon', 'cuenca', 'granada', 'ciudadreal'],
  5: ['barcelona', 'cordoba', 'jaen', 'madrid', 'lleida', 'malaga', 'soria', 'tarragona', 'zaragoza', 'toledo'],
  6: ['badajoz', 'burgos', 'caceres', 'girona', 'guadalajara', 'huesca', 'logroño', 'pamplona', 'salamanca', 'sevilla', 'teruel', 'vayadolid', 'merida'],
  7: ['vitoria', 'avila', 'cadiz', 'sansebastian', 'huelva', 'leon', 'asturias', 'palencia', 'santander', 'segovia', 'bilbao', 'zamora', 'jerezdelafrontera'],
  8: ['acoruna', 'lugo', 'orense', 'vigo']
};

function generarOpcion() {
  const provinciaSelect = document.getElementById('provinciaSelect');
  for (let baremo in baremos) {
    const option = new Option(baremos[baremo].join(', '), baremo);
    provinciaSelect.add(option);
  }
}

generarOpcion();

function calcularPrecio() {
  const altura = parseFloat(document.querySelector('#altura').value);
  const ancho = parseFloat(document.querySelector('#ancho').value);
  const profundidad = parseFloat(document.querySelector('#profundidad').value);
  const resultado = altura * ancho * profundidad * 200;
  const resultadoFormateado = resultado.toFixed(2);
  document.querySelector('#primerResultado').textContent = resultadoFormateado;
  console.log(resultadoFormateado);

  logSelectedBaremo();
  ajustarResultado();
}

function logSelectedBaremo() {
  const provinciaSelect = document.getElementById('provinciaSelect');
  const selectedBaremo = parseInt(provinciaSelect.value);
  console.log("Baremo seleccionado:", selectedBaremo);
}

const provinciaSelect = document.getElementById('provinciaSelect');
provinciaSelect.addEventListener('change', logSelectedBaremo);
let resultadoFinal = 0;
const ivaText = "€, SIN IVA.";

function ajustarResultado() {
  const resultadoFormateado = parseFloat(document.querySelector('#primerResultado').textContent);
  const provinciaSelect = document.getElementById('provinciaSelect');
  const selectedBaremo = parseInt(provinciaSelect.value);
  
  switch (true) {
    case resultadoFormateado >= 300 && resultadoFormateado < 350 && selectedBaremo === 3:
        resultadoFinal = (41.43 * 1.05 + 5).toFixed(2);
        break;
    case resultadoFormateado >= 350 && resultadoFormateado < 400 && selectedBaremo === 3:
        resultadoFinal = (45.02 * 1.05 + 5).toFixed(2);
        break;
    case resultadoFormateado >= 400 && resultadoFormateado < 450 && selectedBaremo === 3:
        resultadoFinal = (48.30 * 1.05 + 5).toFixed(2);
        break;
    case resultadoFormateado >= 450 && resultadoFormateado < 500 && selectedBaremo === 3:
        resultadoFinal = (51.23 * 1.05 + 5).toFixed(2);
        break;
    case resultadoFormateado >= 500 && resultadoFormateado < 600 && selectedBaremo === 3:
        resultadoFinal = (55.53 * 1.05 + 5).toFixed(2);
        break;
    case resultadoFormateado >= 600 && resultadoFormateado < 700 && selectedBaremo === 3:
        resultadoFinal = (60.94 * 1.05 + 5).toFixed(2);
        break;
    case resultadoFormateado >= 700 && resultadoFormateado < 800 && selectedBaremo === 3:
        resultadoFinal = (65.96 * 1.05 + 5).toFixed(2);
        break;
    case resultadoFormateado >= 800 && resultadoFormateado < 900 && selectedBaremo === 3:
        resultadoFinal = (70.68 * 1.05 + 5).toFixed(2);
        break;
    case resultadoFormateado >= 900 && resultadoFormateado < 1000 && selectedBaremo === 3:
        resultadoFinal = (75.15 * 1.05 + 5).toFixed(2);
        break;
    case resultadoFormateado >= 250 && resultadoFormateado < 300 && selectedBaremo === 4:
        resultadoFinal = (46.04 * 1.05 + 5).toFixed(2);
        break;
    case resultadoFormateado >= 300 && resultadoFormateado < 350 && selectedBaremo === 4:
        resultadoFinal = (51.49 * 1.05 + 5).toFixed(2);
        break;
    case resultadoFormateado >= 350 && resultadoFormateado < 400 && selectedBaremo === 4:
        resultadoFinal = (56.58 * 1.05 + 5).toFixed(2);
        break;
    case resultadoFormateado >= 400 && resultadoFormateado < 450 && selectedBaremo === 4:
        resultadoFinal = (61.35 * 1.05 + 5).toFixed(2);
        break;
    case resultadoFormateado >= 450 && resultadoFormateado < 500 && selectedBaremo === 4:
        resultadoFinal = (65.79 * 1.05 + 5).toFixed(2);
        break;
    case resultadoFormateado >= 500 && resultadoFormateado < 600 && selectedBaremo === 4:
        resultadoFinal = (72.48 * 1.05 + 5).toFixed(2);
        break;
    case resultadoFormateado >= 600 && resultadoFormateado < 700 && selectedBaremo === 4:
        resultadoFinal = (80.68 * 1.05 + 5).toFixed(2);
        break;
    case resultadoFormateado >= 700 && resultadoFormateado < 800 && selectedBaremo === 4:
        resultadoFinal = (88.54 * 1.05 + 5).toFixed(2);
        break;
    case resultadoFormateado >= 800 && resultadoFormateado < 900 && selectedBaremo === 4:
        resultadoFinal = (96.14 * 1.05 + 5).toFixed(2);
        break;
    case resultadoFormateado >= 900 && resultadoFormateado < 1000 && selectedBaremo === 4:
        resultadoFinal = (103.55 * 1.05 + 5).toFixed(2);
        break;
    case resultadoFormateado >= 250 && resultadoFormateado < 300 && selectedBaremo === 5:
        resultadoFinal = (50.16 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 300 && resultadoFormateado < 350 && selectedBaremo === 5:
        resultadoFinal = (56.29 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 350 && resultadoFormateado < 400 && selectedBaremo === 5:
        resultadoFinal = (62.07 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 400 && resultadoFormateado < 450 && selectedBaremo === 5:
        resultadoFinal = (67.53 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 450 && resultadoFormateado < 500 && selectedBaremo === 5:
        resultadoFinal = (72.68 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 500 && resultadoFormateado < 600 && selectedBaremo === 5:
        resultadoFinal = (80.55 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 600 && resultadoFormateado < 700 && selectedBaremo === 5:
        resultadoFinal = (90.12 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 700 && resultadoFormateado < 800 && selectedBaremo === 5:
        resultadoFinal = (99.36 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 800 && resultadoFormateado < 900 && selectedBaremo === 5:
        resultadoFinal = (108.33 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 900 && resultadoFormateado < 1000 && selectedBaremo === 5:
        resultadoFinal = (117.10 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 250 && resultadoFormateado < 300 && selectedBaremo === 6:
        resultadoFinal = (54.18 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 300 && resultadoFormateado < 350 && selectedBaremo === 6:
        resultadoFinal = (61.01 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 350 && resultadoFormateado < 400 && selectedBaremo === 6:
          resultadoFinal = (67.48 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 400 && resultadoFormateado < 450 && selectedBaremo === 6:
        resultadoFinal = (73.61 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 450 && resultadoFormateado < 500 && selectedBaremo === 6:
        resultadoFinal = (79.42 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 500 && resultadoFormateado < 600 && selectedBaremo === 6:
        resultadoFinal = (88.48 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 600 && resultadoFormateado < 700 && selectedBaremo === 6:
        resultadoFinal = (99.41 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 700 && resultadoFormateado < 800 && selectedBaremo === 6:
        resultadoFinal = (109.98 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 800 && resultadoFormateado < 900 && selectedBaremo === 6:
        resultadoFinal = (120.29 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 900 && resultadoFormateado < 1000 && selectedBaremo === 6:
        resultadoFinal = (130.41 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 250 && resultadoFormateado < 300 && selectedBaremo === 7:
        resultadoFinal = (58.08 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 300 && resultadoFormateado < 350 && selectedBaremo === 7:
        resultadoFinal = (65.57 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 350 && resultadoFormateado < 400 && selectedBaremo === 7:
        resultadoFinal = (72.70 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 400 && resultadoFormateado < 450 && selectedBaremo === 7:
        resultadoFinal = (79.48 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 450 && resultadoFormateado < 500 && selectedBaremo === 7:
        resultadoFinal = (85.94 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 500 && resultadoFormateado < 600 && selectedBaremo === 7:
        resultadoFinal = (96.13 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 600 && resultadoFormateado < 700 && selectedBaremo === 7:
        resultadoFinal = (108.35 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 700 && resultadoFormateado < 800 && selectedBaremo === 7:
        resultadoFinal = (120.23 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 800 && resultadoFormateado < 900 && selectedBaremo === 7:
        resultadoFinal = (131.83 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 900 && resultadoFormateado < 1000 && selectedBaremo === 7:
        resultadoFinal = (143.24 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 250 && resultadoFormateado < 300 && selectedBaremo === 8:
        resultadoFinal = (64.11 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 300 && resultadoFormateado < 350 && selectedBaremo === 8:
        resultadoFinal = (72.62 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 350 && resultadoFormateado < 400 && selectedBaremo === 8:
        resultadoFinal = (80.77 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 400 && resultadoFormateado < 450 && selectedBaremo === 8:
        resultadoFinal = (88.77 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 450 && resultadoFormateado < 500 && selectedBaremo === 8:
        resultadoFinal = (96.07 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 500 && resultadoFormateado < 600 && selectedBaremo === 8:
        resultadoFinal = (107.99 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 600 && resultadoFormateado < 700 && selectedBaremo === 8:
        resultadoFinal = (122.25 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 700 && resultadoFormateado < 800 && selectedBaremo === 8:
        resultadoFinal = (136.13 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 800 && resultadoFormateado < 900 && selectedBaremo === 8:
        resultadoFinal = (149.75 * 1.05 + 5).toFixed(2);
          break;
    case resultadoFormateado >= 900 && resultadoFormateado < 1000 && selectedBaremo === 8:
        resultadoFinal = (163.21 * 1.05 + 5).toFixed(2);
          break;
    default:
      console.log("No se ha insertado ningún valor");
      break; }
  document.querySelector('#primerResultado').textContent = resultadoFinal + ivaText; }

  function botonIva() {
    const botonPulsado = document.getElementById("flexCheckDefault");
    botonPulsado.addEventListener('change', () => {
        if (botonPulsado.checked) {
            console.log("Ha pulsado el checkbox");
            resultadoFinal = Number(resultadoFinal * 1.21);
            document.querySelector('#primerResultado').textContent = resultadoFinal.toFixed(2) + "€, IVA incluido.";
        } else {
            console.log("Lo ha quitado ;(");
            resultadoFinal = Number(resultadoFinal / 1.21);
            document.querySelector('#primerResultado').textContent = resultadoFinal + ivaText;
        }
        console.log("Nuevo valor de resultadoFinal:", resultadoFinal.toFixed(2));
    });
}
botonIva();
  