console.log('Ingresa el numero 79 para continuar')
function suma(num1){
    return new Promise((resolve, reject) => {
        if(num1 == 79){
            setTimeout(() => {
                let res;
                let i;
                for(i=0;i<=10000000000;i=i+7){
                    res=i;
                }
                resolve({resultado: res});
            }, 0);
        }else{
            reject({resultado: 'No ingresaste el 79 :('});
        }});
}

async function getAns(num1){
    try{
        let response = await suma(num1);
        console.log('El resultado está listo: ');
        console.log(`La suma iterativa llego a => ${response.resultado}`);
        form1 = new FormData();
        let response1 = await fetch('./promesa1.php', {method: 'POST', body: form1});
    }catch(error){
        console.log(error.resultado);
    }
}


 