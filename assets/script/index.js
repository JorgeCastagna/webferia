//Se almacena una cadena de caracteres en una variable que luego sera pasada 
// al archivo HTML
var barra = `
<div>
    <input type="checkbox">
    <i class="fas fa-bars"></i>
    <i class="fas fa-times"></i>
        <nav>
            <ul>
                <li><a href="/index.html">Inicio </a></li>
                <li><a href="/assets/pantallas/productos.html">Productos</a></li>
                <li><a href="/assets/pantallas/tienda.html">Tienda</a></li>
                <li><a href="/assets/pantallas/registrarse.html">Registrarse</a></li>
                <li><a href="/assets/pantallas/contacto.html">Contacto</a></li>
                <li><a href="/assets/pantallas/sobrenosotros.html">Sobre nosotros</a></li>
                <!--<li><a href="/assets/pantallas/carrito_de_compras.html">Carrito de compras</a></li>-->
            </ul>
        </nav>
</div>`

document.getElementById("navBarId").innerHTML = barra; //Pasamos la cedena 'barra' al HTML con el metodo '.innerHTML'
