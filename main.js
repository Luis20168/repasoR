// let mes= document.getElementById('mes');
// let año= document.getElementById('año');
// let trimestre= document.getElementById('Trimestre');
// let competencia= document.getElementById('Competencia');
// let check= document.querySelector('input[name="form"]:checked').value;



// let btnDatos= document.getElementById('btnDatos');
// btnDatos.addEventListener('click', guardarDatos);

// function guardarDatos(mes,año,trimestre,competencia, check){
    
//     let mensaje= `El mes que esta cursando es ${mes} 
//     El año que esta cursando es ${año}
//     El trimestre que esta cursando es ${trimestre}
//     ,  ${check}
//     y la competencia es ${competencia}`;
//     let mensajefinal= document.getElementById('mensaje');
//     mensajefinal.textContent= mensaje;

        
// }

 function guardarDatos(mes,año,trimestre,competencia, check){
    
     let mensaje= `El mes que esta cursando es ${mes} 
     El año que esta cursando es ${año}
     El trimestre que esta cursando es ${trimestre}
     ,  ${check}
     y la competencia es ${competencia}`;
    //  let mensajefinal= document.getElementById('mensaje');
    //  mensajefinal.textContent= mensaje;



    const array= [];
    array.push(mes,año,trimestre,competencia,check);
    return array
    f();

        
}

function f (){
    console.log(f);

}