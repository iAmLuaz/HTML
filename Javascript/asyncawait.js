/*
async function peticion(mensaje_usuario1, mensaje_usuario2 = null)
{
    try {
        console.log('Creamos la data que se mandara a servidor');
        form1 = new FormData();
        form1.append('message', mensaje_usuario1);
        console.log('Mandamos peticion');
        let response1 = await fetch('./promesa1.php', {method: 'POST', body: form1});
        console.log('Termina peticion');
        let data = await response1.json();
        console.log('Obtenemos data');
        console.log(data.menssage);
        console.log('Abrimos un contenedor donde se mostrara la data');
    } catch (error) {
        console.log(error);
    } finally {

    }
}
*/

/*
function peticion(mu1, mu2 = null) {
    console.log('Creamos la data que se mandara a servidor');
    form = new FormData();
    form.append('message', mu1);
    console.log('Mandamos peticion a servidor');
    fetch('./promesa1.php', {method: 'POST', body: form})
        .then(res => res.json())
        .then((res) => {
            console.log(res.menssage);
        })
        .catch((error) => {
            console.log(error);
        });
    console.log('Termina peticion');
    console.log('Abrimos un contenedor donde se mostrara la informacion');
}
*/


function suma(n1, n2)
{
    return new Promise((resolve, reject) => {
        if(typeof n1 !== 'number' || typeof n2 !== 'number'){
            reject({resultado: 'Uno de los parametros no es un entero'});
        }else{
            setTimeout(() => {
                let res = n1 + n2;
                resolve({resultado: res});
            }, 10000);
        }
    }); 
}

async function getSuma(num1, num2)
{
    try {
        console.log('Iniciamos proceso de suma');
        console.log('Mandamos a llamar nuestra funcion que contiene una promesa');
        let response = await suma(num1, num2);
        //let data = await response.json();
        console.log(`obtenemos suma => ${response.resultado}`);
        console.log('mostramos resultado a usuario');
    } catch (error) {
        console.log(error.resultado);
        console.log('mostramos una alerta de error al usuario');
    }
}