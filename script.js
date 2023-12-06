function crearTabla(data) {
    const todasFilas = data.split(/\r?\n|\r/);  // Separa cada línea
    let tabla = '<table>';
        for(let fila = 0; fila<todasFilas.length; fila++) {
            if (fila === 0) {
                tabla += '<head>';
                tabla += '<tr>';
            } else {
                tabla += '<tr>';
            }

            const celdasFila = todasFilas[fila].split('#');
            for (let rowCell = 0; rowCell < celdasFila.length; rowCell ++){
                if (fila === 0){
                    tabla += '<th>';
                    tabla += celdasFila[rowCell];
                    tabla += '</th>';
                } else {
                    tabla += '<td>';
                    tabla += celdasFila[rowCell];
                    tabla += '</td>';
                }
            }

            if (fila === 0){
                    tabla += '</tr>';
                    tabla += '</thead>';
                    tabla += '<tbody>';
                } else {
                    tabla += '</tr>';
                }

        }

        tabla += '</tbody>';
        tabla += '</table>';
        document.querySelector('#tablaRes').innerHTML = tabla;

}


function leerArchivo(evt) {
    let file = evt.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
    // Cuando el archivo se termine de cargar
    crearTabla(e.target.result)
    };
// Se lee el contenido del archivo
reader.readAsText(file);
}


document.querySelector('#archivo')
.addEventListener('change', leerArchivo, false);
