const data=[{
        
    nombre: "God of war 4",
    categoria: "ps4",
    id: 1,
    image: "https://home.ripley.cl/store/Attachment/WOP/D172/2000369090375/2000369090375_2.jpg",
    price: 1000,
    stock: 15,
    initial: 1,
    imagenGrandeDetalle: "https://image.api.playstation.com/vulcan/img/rnd/202008/2617/gCLof29n2eeFxVRGpo90xW1A.jpg"
    

},
{
    nombre: "Sony Dragon Quest XI",
    categoria: "ps4",
    id: 2,
    image: "https://www.hites.com/dw/image/v2/BDPN_PRD/on/demandware.static/-/Sites-mastercatalog_HITES/default/dw474d6dd1/images/original/pim/845304001/845304001_1.jpg?sw=1000&sh=1000",
    price: 1000,
    stock: 15,
    initial: 1,
    imagenGrandeDetalle: "https://image.api.playstation.com/vulcan/ap/rnd/202007/1607/7PxHVp3tCaQQkVeHalUtPcND.png"
},
{
    nombre: "Dragon Ball Fighterz ",
    categoria: "ps4",
    id: 3,
    image: "https://i.linio.com/p/0162f86bd3c5e0a3fc3088fe1c061575-product.webp",
    price: 1000,
    stock: 15,
    initial: 1,
    imagenGrandeDetalle: "https://i.ytimg.com/vi/QrUIXQST91k/maxresdefault.jpg"
},
{
    nombre: "Pokemon Tournament",
    categoria: "switch",
    id: 4,
    image: "https://http2.mlstatic.com/D_NQ_NP_816429-MLA45732121224_042021-O.webp",
    price: 1000,
    stock: 15,
    initial: 1,
    imagenGrandeDetalle: "https://www.gamerfocus.co/wp-content/uploads/2020/07/pokken.jpg"
},
{
    nombre: "Fifa 23",
    categoria: "ps4",
    id: 5,
    image: "https://images.zmart.cl/Productos/SKU/2022/07/29/PS4G1950_2022729165457_b.jpg",
    price: 1000,
    stock: 15,
    initial: 1,
    imagenGrandeDetalle: "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/10/fifa-23-skill-moves-messi-shift.jpg"
},
{
    nombre: "The witcher",
    categoria: "ps4",
    id: 6,
    image: "https://images.zmart.cl/Productos/SKU/2016/08/03/PS4G0507_2016831610_b.jpg",
    price: 1000,
    stock: 15,
    initial: 1,
    imagenGrandeDetalle: "https://image.api.playstation.com/cdn/UP4497/CUSA00527_00/FREE_CONTENTW3Xfg51LrGZa3riw7ss1/PREVIEW_SCREENSHOT1_68724.jpg"
},
{
    nombre: "Captain Tsubasa",
    categoria: "ps4",
    id: 7,
    image: "https://images.zmart.cl/Productos/SKU/2020/05/02/PS4G1613_202052105220_b.jpg",
    price: 1000,
    stock: 15,
    initial: 1,
    imagenGrandeDetalle: "https://media.playstation.com/is/image/SCEA/captain-tsubasa-rise-of-new-champions-screenshot-01-ps4-18feb20-en-us?$native_xxl_nt$"
},
{
    nombre: "Digimon Survive",
    categoria: "ps4",
    id: 8,
    image: "https://images.zmart.cl/Productos/SKU/2022/06/15/PS4G1151_2022615141933_b.png",
    price: 1000,
    stock: 15,
    initial: 1,
    imagenGrandeDetalle: "https://www.zmart.cl/productos/Galerias/2022/06/15/6362522cv13d.png"
},
{
    nombre: "Naruto Ninja Storm",
    categoria: "ps4",
    id: 9,
    image: "https://images.zmart.cl/Productos/SKU/2021/11/09/PS4G1888_2021119172645_b.jpg",
    price: 1000,
    stock: 15,
    initial: 1,
    imagenGrandeDetalle: "https://thenerdstash.com/wp-content/uploads/2017/11/Susanoo_Kurama_Obito.bmp"
},
{
    nombre: "Pokemon Arceus",
    categoria: "switch",
    id: 10,
    image: "https://images.zmart.cl/Productos/SKU/2022/01/05/NSWG0820_20221517150_b.jpg",
    price: 1000,
    stock: 15,
    initial: 1,
    imagenGrandeDetalle: "https://hips.hearstapps.com/hmg-prod/images/poke-mon-legends-arceus-jpg-1629545661.jpg"
},
{
    nombre: "Animal Crossing",
    categoria: "switch",
    id: 11,
    image: "https://images.zmart.cl/Productos/SKU/2020/01/02/NSWG0313_20201214232_b.png",
    price: 1000,
    stock: 15,
    initial: 1,
    imagenGrandeDetalle: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/a/animal-crossing-new-horizons-switch/hero"
},
{
    nombre: "Pokemon Scarlet",
    categoria: "switch",
    id: 12,
    image: "https://images.zmart.cl/Productos/SKU/2022/06/02/NSWG0930_20226211855_b.jpg",
    price: 1000,
    stock: 15,
    initial: 1,
    imagenGrandeDetalle: "https://www.denofgeek.com/wp-content/uploads/2022/06/Pokemon-Scarlet-and-Violet.jpg"
},
{
    nombre: "Pokemon Violet",
    categoria: "switch",
    id: 13,
    image: "https://images.zmart.cl/Productos/SKU/2022/06/02/NSWG0931_2022621195_b.jpg",
    price: 1000,
    stock: 15,
    initial: 1,
    imagenGrandeDetalle: "https://d.newsweek.com/en/full/2149851/pokemon-scarlet-violet.jpg?w=1600&h=1200&q=88&f=973003b9e8da3e98b1c61704fd11b723"
}
]


const traerDatos = new Promise((resolve, reject) => {
let condition = true
if(condition){
setTimeout(() =>{

resolve(data)

},2000)
}else{
    reject (console.log("No hay datos"))
}



}) 

export default traerDatos

export const traerDatosPorCategoria = (idCategoria) => {
return new Promise((resolve,reject) => {

setTimeout(() =>{

resolve(data.filter(prod => prod.categoria == idCategoria))

},2000)


})

}



export const traerDatosPorIdProducto = (idProducto) => {
return new Promise((resolve,reject) => {

setTimeout(() =>{
    
resolve( data.find(prod=> prod.id == idProducto))


},2500)

})

}