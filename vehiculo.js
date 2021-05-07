console.log('***** objeto vehiculo ******');
console.log('**********************************************');

const vehiculo =  {
    marca: 'ferrari',
    tamaño_tanque: 45,
    kilometros_litros: 20,
    radio_llantas: 30,
    color: 'negro',
    estado: false,
    cantidad_combustible: 0,
    odometro: 0,
    encender(){ 
        if (this.cantidad_combustible >= 2) {
            this.estado = true;
            console.log('vehiculo en marcha con : ', this.cantidad_combustible +"litros de gasolina");
          
        }else{
            console.log('vehiculo no se puede poner en marcha,solo cuenta con : ', this.cantidad_combustible+ "de gasolina");
        }
    },
    apagar(){
        if (this.cantidad_combustible <= 0) {
            this.estado = false;
            console.log('el vehiculo  ha agotado su gasolina');
        }
    },
    llenar_tanque(){
        this.cantidad_combustible = Math.round(Math.random() * (45 - 20) + 1);
        console.log('cantidad tanqueada: '+ this.cantidad_combustible+ "\n litros");
        },
    acelerar(){
        while (this.cantidad_combustible > 0) {
            let kilometros_recorrido = Math.round(Math.random() * (18 - 20) + 1); 
            let combustible_consumido = this.cantidad_combustible - kilometros_recorrido;
              if (this.cantidad_combustible < kilometros_recorrido) {
                    console.log('vehiculo sin gasolina,capacidad por litros: '+ this.cantidad_combustible + '\n KM \n '+
                    'y ya recorrió: ' + this.cantidad_combustible +'\n KM \n' +
                    'de '+ kilometros_recorrido +'\n KM estipulados' );
                
              }else if(this.cantidad_combustible == 0){
                console.log('vehiculo sin gasolina');
              }else{
                console.log('SE VA RECORRER: '+ kilometros_recorrido + 'KM \n'+
                'capacidad con tanque lleno ' + this.cantidad_combustible + 'kM \n'+
                'aun le faltan'+ combustible_consumido + 'KM por recorrer');
               
              }


              this.cantidad_combustible -= kilometros_recorrido;
              
        }

    }
    
};

let objeto = Object.create(vehiculo);

objeto.llenar_tanque();
objeto.encender();
objeto.acelerar();
objeto.apagar()