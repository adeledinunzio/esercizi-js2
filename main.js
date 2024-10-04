
//esercizio 1

let voto = 30;

if(voto <= 18){
    console.log('insufficiente');
}else if(voto >=18 && voto < 21){
    console.log('sufficiente');
}else if(voto >=21 && voto <24){
    console.log('buono');
}else if(voto >=24 && voto <27){
    console.log('distinto');
}else if(voto >=27 && voto >=29){
    console.log('ottimo');
}else if(voto === 30){
    console.log('eccellente');
}
 



let voto = 21;

switch (true) {
    case (voto <= 18):
        console.log('insufficiente');
        break;
    case (voto > 18 && voto < 21):
        console.log('sufficiente');
        break;
    case (voto >= 21 && voto < 24):
        console.log('buono');
        break;
    case (voto >= 24 && voto < 27):
        console.log('distinto');
        break;
    case (voto >= 27 && voto < 30):
        console.log('ottimo');
        break;
    case (voto === 30):
        console.log('eccellente');
        break;
    default:
        console.log('non classificato');
}


//esercizio 2


let num = 2;
for(let i = 1; i <=10; i++){
    console.log(i *2);
}

//esercizio 3

let temperatura = 31;

if(temperatura >20 ){
    console.log('non ci sono più le mezze stagioni');
}else if(temperatura <=30 ){
    console.log('lu mare, lu sole, lu ientu');
}else if(temperatura >30){
    console.log('mi dia una pperoni sudata');
}else if(temperatura >0){
    console.log('non è tanto il freddo quanto la umidità');
}else if(temperatura >-10){
    console.log('copriti ancora ti raffreddi');
}



let temperatura =10

switch(true){
    case(temperatura <20):
    console.log('non ci sono più le mezze stagioni');
    break;
    case(temperatura <=30):
    console.log('lu mare, lu sole, lu ientu');
    break;
    case(temperatura >30):
    console.log('mi dia una peroni sudata');
    break;
    case(temperatura >0):
    console.log('non è tanto il freddo quanto la umidità');
    break;
    case(temperatura >-10):
    console.log('copriti ancora ti raffreddi');
}

//esercizio 4


let bevanda = parseInt(prompt('inserisci il numero della bevanda'));

switch(bevanda){
    case 1:
         console.log('è stata selezionata una acqua');
         break;
    case 2:
         console.log('è stata selezionata una coca cola');
         break;
    case 3:
        console.log('è stata selezionata una birra');
        break;
    default:
        console.log('inserisci il numero della bevanda');
        

}

