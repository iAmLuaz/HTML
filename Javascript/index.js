var form = document.getElementById("form");
//console.log(form);

form.addEventListener("submit",function(event){
    event.preventDefault();
    //let num1 = parseInt(document.getElementById("num1").value);
    //let num2 = parseInt(document.getElementById("num2").value);
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if(num1==""||num2==""){
        alert("No juegues");
    }
    else{
        num1=parseInt(document.getElementById("num1").value);
        num2=parseInt(document.getElementById("num2").value);
        let formD = new FormData();
        formD.append('n1', num1);
        formD.append('n2', num2);
        /*
        let data={
            n1:num1,
            n2:num2,
        }
        
        let response;
        response=
        */
        let response = fetch("server.php", {
                method: 'POST', // or 'PUT'
                body: formD // data can be `string` or {object}!
            });

            //response.then(res => res.json());
        
        response.then((res) => {
            //console.log(res.json());
        });


            /*
          .then((res) => {
              console.log(res.json())
            })
          .catch((error) => {
              console.log('Error:', error)
            });
            */
    }
    //let suma;
    
    //suma=num1+num2;

    //console.log(suma);


   /*function name(params) {
        
    }

    suma => () {
        
    }*/
});