


class Client {
    constructor(name,dni,email,address,phone,country,province,city, owner, mFront, mBg, totalM, priceMeter, priceTotal, date){
    this.name = name;
    this.dni = dni;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.country = country;
    this.province = province;
    this.city = city;
    this.owner = owner;
    

    //propiedad

    this.mFront = mFront;
    this.mBg = mBg;
    this.totalMeter = totalM;
    this.priceMeter = priceMeter;
    this.priceTotal = priceTotal;
    this.date = date;
    }
}

 /* , bath, garage, energy, water, spool, hole, asphalt, corner, country, security, quincho, grill */
        
        
 

//Clientes 
const client = [];


//Propiedades 

/* const propertie = []; */


/* ******************** Inicio funciones del programa ********************* */



    // Anadir cliente

    const appraisal = document.getElementById("form");

    appraisal.addEventListener("submit", (reset) => {
    reset.preventDefault();
    
    const name = document.getElementById("name");
    const dni = document.getElementById("dni");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    const phone = document.getElementById("phone");
    const country = document.getElementById("country");
    const province = document.getElementById("province");
    const city = document.getElementById("city");
    const owner = check();

    const mFront = document.getElementById("mFront");
    const mBg = document.getElementById("mBg");
    const totalMeter = calcMeter(mFront,mBg);
    const priceMeter = zone(city);
    const priceTotal = calcPrice(totalMeter,priceMeter)
    const date = new Date();

    const clientAp = new Client(name.value, dni.value, email.value, address.value, phone.value, country.value, province.value, city.value, owner, mFront.value, mBg.value, totalMeter, priceMeter, priceTotal, date);
    
    /* const propAp = new Prop(mFront.value, mBg.value, totalMeter, priceMeter, priceTotal, date); */
    
    client.push(clientAp);
    
 /*    propertie.push(propAp); */
    

    localStorage.setItem("Client", JSON.stringify(client));
    

    appraisal.reset();

    show(clientAp);
 
    
})

    const abstract = document.getElementById("abstract");
    
    const show = (clientAp) => {
        const date = new Date();
        let aux = "";
            aux +=
                    `<h2>Resumen de tasacion al ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}</h2>
                    <p>Comitente: ${clientAp.name}</p>
                    <p>DNI:${clientAp.dni}
                    <p>Email: ${clientAp.email}</p>
                    <p>Direccion: ${clientAp.address}</p>
                    <p>Telefono: ${clientAp.phone}</p>
                    <p>Pais: ${clientAp.country}</p>
                    <p>Provincia: ${clientAp.province}</p>
                    <p>Ciudad: ${clientAp.city}</p>
                    <p>Relacion con el inmueble: ${clientAp.owner}</p>
                    <p>Metros de frente: ${clientAp.mFront}</>
                    <p>Metros de fondo: ${clientAp.mBg}</>
                    <p>Metros cuadrados totales: ${clientAp.totalMeter}</p>
                    <p>Precio terreno: ${clientAp.priceTotal}`
                
                    abstract.innerHTML = aux; 
    }
    
    function check(){
       let owner = document.getElementsByName("owner");

       for (i = 0; i< owner.length ; i++)
        if (owner[i].checked) {
            return owner[i].value;
        }
    }
       
  
    function calcMeter (mFront, mBg){
        return mFront.value * mBg.value
    }  
   
// operador TERNARIO
    function calcPrice (totalMeter, priceMeter){
        return totalMeter*priceMeter*(mFront > mBg ? 1.3 : 0.9);
    }

    
    
    function zone(city){
     switch (city.value) {
        case "Eldorado":
            return 5500;
        case "Montecarlo":
            return 4500;
        case "El Alcazar":
            return 3500;
        case "Pto Rico":
            return 5000;
        case "Pto Iguazu":
            return 6000;
            
     }
        
    }

    const admin = document.getElementById("admin");

    admin.addEventListener("click", () => {

    
        
        /* let passwordInput = `<div>
        <label for="password" class="form-label">Ingrese su clave de administrador</label>
        <input class="form-control" id="password" placeholder="La clave es 1234 (como mi banco)">
        <button id="signIn" type="submit" class="btn btn-outline-dark m-2 btn-lg bg-btn">Ingresar</button>
        </div>` 
        

        abstract.innerHTML = passwordInput

        const signIn = document.getElementById("signIn")
        signIn.addEventListener("click", () => {
            const password = 1234 */
        
        const client = JSON.parse(localStorage.getItem("Client"));
        
        let emptytext= `<div class="admin"><p>No hay clientes cargados en el sistema</p></div>`;
        client === 0 ? emptytext : showAll()
        
        function showAll(){
        let aux = "";

        client.forEach( client => {
            aux += `<div class="admin">
            <p>Comitente: ${client.name}</p>
            <p>DNI:${client.dni}
            <p>Email: ${client.email}</p>
            <p>Direccion: ${client.address}</p>
            <p>Telefono: ${client.phone}</p>
            <p>Pais: ${client.country}</p>
            <p>Provincia: ${client.province}</p>
            <p>Ciudad: ${client.city}</p>
            <p>Relacion con el inmueble: ${client.owner}</p>
            <p>Metros de frente: ${client.mFront}</>
            <p>Metros de fondo: ${client.mBg}</>
            <p>Metros cuadrados totales: ${client.totalMeter}</p>
            <p>Precio terreno: ${client.priceTotal}<br>
            </div>`
      
        abstract.innerHTML = aux; 
    })}}
            )
        

    
        
        
    


    // Seccion administrador

   
  /*   function search(){
        do{
        let dni = parseInt(prompt("Busqueda por DNI"));
        let search = client.find(client => client.dni === dni);
        let i = client.indexOf(search);
        console.log(client[i], propertie [i]);
        alert(`Datos comitente: \n Nombre:${client[i].name} \n Apellido: ${client[i].surname} \n DNI: ${client[i].dni} \n Datos propiedad: \n Zona: ${propertie[i].zone}, \n Tamano: ${propertie[i].size} \n Precio: ${propertie[i].price}`); 
        }while (search == undefined)
    */