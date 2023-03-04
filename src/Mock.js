const listadoProductos = [
    {
       id:"001",
       nombre:"Balancin",
       marca:"Juguetes Olsen",
       origen:"Argentina",
       material:"Madera",
       cantidad:1,
       precio:12000,
       disponibilidad:true,
       img: '/img/balancin.png'
    },

    {
       id:"002",
       nombre:"Arcoiris",
       marca:"Juguetes Olsen",
       origen:"Argentina",
       material:"Madera",
       cantidad:1,
       precio:7000,
       disponibilidad:true,
       img:"/img/arcoiris.png"
    },
    {
       id:"003",
       nombre:"Casita",
       marca:"Confiture",
       origen:"Argentina",
       material:"Madera",
       cantidad:1,
       precio:4500,
       disponibilidad:true,
       img:"/img/casita.png"
    },
    {
       id:"004",
       nombre:"Bloques",
       marca:"Tak Tak",
       origen:"Argentina",
       material:"Madera",
       cantidad:1,
       precio:3000,
       disponibilidad:true,
       img:"/img/bloques.png"
    },
    {
       id:"005",
       nombre:"Torre",
       marca:"Juguetes Olsen",
       origen:"Argentina",
       material:"Madera",
       cantidad:1,
       precio:2900,
       disponibilidad:true,
       img:"/img/torre.jpg"
    },
    {
       id:"006",
       nombre:"Luna",
       marca:"Confiture",
       origen:"Argentina",
       material:"Madera",
       cantidad:1,
       precio:5900,
       disponibilidad:true,
       img:"/img/luna.png"
    }
 ]

 export const getFech = new Promise((respuesta, reject) => {
    let url = "www.vitonio.com.ar";

    if (url === "www.vitonio.com.ar") {
        setTimeout(()=> {
            respuesta(listadoProductos)}, 
            2000       
        )
    } else {
        reject("Fallo de conexión.")
    }


 })