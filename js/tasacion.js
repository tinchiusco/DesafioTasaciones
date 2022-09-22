


class Client {
    constructor(name,email,address,phone,country,province,city, /* owner */){
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.country = country;
    this.province = province;
    this.city = city;
    /* this.owner = owner; */
    }
}

 class Prop {
    constructor(mFront, mBg, totalM, priceMeter, priceTotal, date/* , bath, garage, energy, water, spool, hole, asphalt, corner, country, security, quincho, grill */){
        this.mFront = mFront;
        this.mBg = mBg;
        this.totalMeter = totalM;
        this.priceMeter = priceMeter;
        this.priceTotal = priceTotal;
        this.date = date;
        
    }
}  

//Clientes 
const client = [];


//Propiedades 

const propertie = [];


/* ******************** Inicio funciones del programa ********************* */



    // Anadir cliente

    const appraisal = document.getElementById("form");

    appraisal.addEventListener("submit", (reset) => {
    reset.preventDefault();
    
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    const phone = document.getElementById("phone");
    const country = document.getElementById("country");
    const province = document.getElementById("province");
    const city = document.getElementById("city");
    /* const owner = document.getElementById("owner"); */

    const mFront = document.getElementById("mFront");
    const mBg = document.getElementById("mBg");
    const totalMeter = calcMeter(mFront,mBg);
    const priceMeter = 5500;
    const priceTotal = calcPrice(totalMeter,priceMeter)
    const date = new Date();

    const clientAp = new Client(name.value, email.value, address.value, phone.value, country.value, province.value, city.value/* , owner.value */);
    
    const propAp = new Prop(mFront.value, mBg.value, totalMeter, priceMeter, priceTotal, date);
    
    client.push(clientAp);
    
    propertie.push(propAp);
    console.log(date)
    
 
    

    const start = document.getElementById("start");
    const abstract = document.getElementById("abstract");
      
    abstract.innerHTML =
                        `<h2>Resumen de tasacion al ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}</h2>
                        <p>Comitente: ${client[0].name}</p>
                        <p>Email: ${client[0].email}</p>
                        <p>Direccion: ${client[0].address}</p>
                        <p>Telefono: ${client[0].phone}</p>
                        <p>Pais: ${client[0].country}</p>
                        <p>Provincia: ${client[0].province}</p>
                        <p>Ciudad: ${client[0].city}</p>
                        <p>Metros de frente: ${propertie[0].mFront}</>
                        <p>Metros de fondo: ${propertie[0].mBg}</>
                        <p>Metros cuadrados totales: ${propertie[0].totalMeter}</p>
                        <p>Precio terreno: ${propertie[0].priceTotal}`
    })    
    
  
    function calcMeter (mFront, mBg){
        return mFront.value * mBg.value
    }  
   

    function calcPrice (totalMeter, priceMeter){
        return totalMeter*priceMeter
    }

    
