function saludar() {
    alert("¡Bienvenidos a Essen mica_p!");
}

saludar ();

let listaProductos="Nuestros productos: \n Grill \n Cacerola \n Olla \n Sarten";
    alert(listaProductos);

const Productos=[
    {
        producto:"Sarten",
        precio: 20000
    
    },
    {
        producto:"Olla",
        precio: 15000
    
    },
    {
        producto:"Cacerola",
        precio: 35000
    
    },
    {
        producto:"Grill",
        precio: 18000
    
    }
];

for(const articulo of Productos){
    console.log(articulo.producto);
    console.log(articulo.precio);
}
let productoABuscar=prompt("Ingrese un producto de su interés y sepa su precio");
for(const articulo of Productos){
    if(articulo.producto==productoABuscar){
        let estaEnLaLista=Productos.includes(productoABuscar);
        console.log("El producto se encuentra en stock y su precio es "+articulo.precio);
        console.log(articulo);
        productoABuscar=prompt("Ingrese un producto de su interés y sepa su precio");
    }

}

let comenzarCompra="Ahora ya conoces los productos. Inicia tu compra";
    alert(comenzarCompra);

function calcular(){
    let producto = prompt ("Ingresa el producto que quieras comprar \n Grill \n Cacerola \n Olla \n Sarten \n o TOTAL para ver la suma total.");
    
    let precio=0;

    while(producto!="TOTAL"){
        switch(producto){
            case "sarten":
            case "SARTEN":
            case "Sarten":    
                console.log("El precio de la sarten Essen es $" +20000);
                precio=precio+20000;
                break;
            case "Olla":
            case "OLLA":
            case "olla":    
                console.log("El precio de la Olla es $" +15000);
                precio=precio+15000;
                break;
            case "Cacerola":
            case "cacerola":
            case "CACEROLA":    
                console.log("El precio de la Olla 24 cm Essen es $" +35000);
                precio=precio+35000;
                break;
            case "Grill":
            case "GRILL":
            case "grill":    
                console.log("El precio del Grill Essen es $" +18000);
                precio=precio+18000;
                break;
            default:
                console.log("Ese producto no está disponible");
                break;
            }
    producto=prompt("Ingresa el producto que quieras comprar \n Grill \n Cacerola \n Olla \n Sarten \n o TOTAL para ver la suma total.");
    }


console.log("Total a pagar con IVA $"+precio*1.21);
}

calcular();

let volveracomprar=prompt("Desea volver a comprar?");

if((volveracomprar=="SI")||(volveracomprar=="si")||(volveracomprar=="Si")){
    calcular ();
 
}else{
    console.log("Gracias por visitarnos");
}
