let productos = [];
let totalProductos = 0
let btnAgregarProducto = document.querySelector(`#AgregarProducto`)
btnAgregarProducto.addEventListener(`click`, function () {
    let cuerpotabla = document.querySelector(`#cuerpotabla`)
    let txtCodigoProducto = document.querySelector(`#txtCodigoProducto`)
    let txtNombreProducto = document.querySelector(`#txtNombreProducto`)
    let txtDescripcionProducto = document.querySelector(`#txtDescripcionProducto`)
    let txtPrecioU = document.querySelector(`#txtPrecioU`)
    let txtCantidad = document.querySelector(`#txtCantidad`)
    let cadenaDatos = ''

    let producto = {
        codigoProducto: txtCodigoProducto.value,
        nombreProducto: txtNombreProducto.value,
        descripcionProducto: txtDescripcionProducto.value,
        precioU: txtPrecioU.value,
        cantidad: txtCantidad.value

    }
    productos.push(producto)

    for (let i = 0; i < productos.length; i++) {
        cadenaDatos = cadenaDatos + `<tr>
                <td>${parseInt(i) + 1}</td>
                <td>${productos[i].codigoProducto}</td>
                <td>${productos[i].nombreProducto}</td>
                <td>${productos[i].descripcionProducto}</td>
                <td>${productos[i].precioU}</td>
                <td>${productos[i].cantidad}</td>
                <td>${((productos[i].precioU * productos[i].cantidad) * 0.19)}</td>
                <td>${((productos[i].precioU * productos[i].cantidad) * 1.19)}</td>
                
              </tr>`

    }

    cuerpotabla.innerHTML = cadenaDatos

})


let btnCalcularTotal = document.querySelector(`#CalcularTotal`)
btnCalcularTotal.addEventListener(`click`, function () {
    let totalDetalle = 0
    for (i = 0; i < productos.length; i++) {
        totalDetalle = totalDetalle + ((productos[i].precioU * productos[i].cantidad) * 1.19)

    }
    let contenedorResultado = document.querySelector(`#contenedorResultado`)
    contenedorResultado.innerHTML = `<p class="container" > El total de la boleta es: ${totalDetalle} </p>`
})