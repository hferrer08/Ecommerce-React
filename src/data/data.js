const data=[{
        
    nombre: "God of war4",
    categoria: "ps4",
    id: 1,
    image: "https://home.ripley.cl/store/Attachment/WOP/D172/2000369090375/2000369090375_2.jpg",
    precio: 1000,
    stock: 15,
    initial: 1
    

},
{
    nombre: "Sony Dragon Quest Xi: Echoes Of An Elusive Age",
    categoria: "ps4",
    id: 2,
    image: "https://www.hites.com/dw/image/v2/BDPN_PRD/on/demandware.static/-/Sites-mastercatalog_HITES/default/dw474d6dd1/images/original/pim/845304001/845304001_1.jpg?sw=1000&sh=1000",
    precio: 1000,
    stock: 15,
    initial: 1
},
{
    nombre: "Dragon Ball Fighterz Standard Edition",
    categoria: "ps4",
    id: 3,
    image: "https://i.linio.com/p/0162f86bd3c5e0a3fc3088fe1c061575-product.webp",
    precio: 1000,
    stock: 15,
    initial: 1
},
{
    nombre: "Pokemon Tournament",
    categoria: "switch",
    id: 4,
    image: "https://http2.mlstatic.com/D_NQ_NP_816429-MLA45732121224_042021-O.webp",
    precio: 1000,
    stock: 15,
    initial: 1
}
]


const traerDatos = new Promise((resolve, reject) => {
let condition = true
if(condition){
setTimeout(() =>{

resolve(data)

},2500)
}else{
    reject (console.log("No hay datos"))
}



}) 

export default traerDatos

export const traerDatosPorCategoria = (idCategoria) => {
return new Promise((resolve,reject) => {

setTimeout(() =>{

resolve(data.filter(prod => prod.categoria == idCategoria))

},2500)


})

}



export const traerDatosPorIdProducto = (idProducto) => {
return new Promise((resolve,reject) => {

setTimeout(() =>{
    
resolve( data.find(prod=> prod.id == idProducto))


},2500)

})

}