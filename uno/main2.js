function guardarDatos(fecha,mes,año,trimestre,competencia, check ){
    let array=[]
    array.push(fecha,mes,año,trimestre,competencia,check)
    const lista=array[0];
    let listas= lista.split('-')

    let meses=listas[1];
    // mostrar(meses);
    array.push(meses);

    recibe(array)
    convertidor(meses)

    //dom down

    

}

function recibe(array){
    console.log(array)

}


function mostrar(meses){
    console.log(meses)

}

function convertidor(meses){


    switch(meses){
        case '01':
            console.log('el mes es enero');
            break;
        case '02':
            console.log('el mes es febrero');
            break;
        case '03':
            console.log('el mes es marzo');
            break;

        case '04':
            console.log('el mes es abril');
            break;

        case '05':
            console.log('el mes es mayo');
            break;
        case '06':
            console.log('el mes es junio');
            break;

        case '07':
            console.log('el mes es julio');
            break

        case '08':
            console.log('el mes es agosto')
            break

        case '09':
            console.log('el mes es septimbre');
            break;
        case '10':
        console.log('el mes es ocubre')
            break

        case '11':
            console.log('el mes es noviembre');
            break;
        case '12':
        console.log('el mes es Diciembre')
            break



    }


    


}


//dom 

const opciones= document.getElementById('opciones');


opciones.addEventListener('change',()=>{
    const contenedor= document.getElementById('contenedor');

   console.log(opciones.value);
    //select 1 creado
    const select= document.createElement('select');
    const option1= document.createElement('option');
    const option2= document.createElement('option')
    option1.textContent='Resultado A1';
    option2.textContent='Resultado A2';
    option1.setAttribute('value','Resultado A1')
    option2.setAttribute('value','Resultado A2')
    select.appendChild(option1);
    select.appendChild(option2);

    //select 2 creado


    const select2= document.createElement('select');
    const option11= document.createElement('option');
    const option22= document.createElement('option');
    option11.textContent='Resultado D1';
    option22.textContent='Resultado D2';
    option11.setAttribute('value','Resultado D1')
    option22.setAttribute('value','Resultado D2')
    select2.appendChild(option11);
    select2.appendChild(option22);

   if(opciones.value=='analisis'){
    contenedor.appendChild(select);
    contenedor.replaceChildren(select2)

    
   }
   else{
    contenedor.appendChild(select2);
    contenedor.replaceChildren(select)



   }



    
} );












