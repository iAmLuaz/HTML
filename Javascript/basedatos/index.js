const form = document.getElementById("form"); //declarar el formulario
const inputs = document.querySelectorAll('#form input'); //declarar los datos del formulario

const expresions = {
    name:/^([A-ZÀ-ÿ][a-zÀ-ÿ']{1,40}\s|[A-ZÀ-ÿ](\.\s|\')|[A-ZÀ-ÿ][a-zÀ-ÿ']{1,3}(\.\s)){0,9}[A-ZÀ-ÿ][a-zÀ-ÿ']{1,40}$/, // Letras y espacios, pueden llevar acentos.
    id: /^\d{1,3}$/,
    age: /^\d{1,2}$/, // 1 a 3 numeros.
	email: /^[a-z0-9_.+-]+@[a-z0-9-]+\.[a-z0-9-.]+$/,
    password: /^.{4,12}$/, // 4 a 12 digitos.
}

const datas = {
    name
}

const validateForm = (e) => {
    switch (e.target.name){
        case "name":
            validateData(expresions.name, e.target, 'name');
        break;
        case "id":
            validateData(expresions.id, e.target, 'id');
        break;
        case "age":
            validateData(expresions.age, e.target, 'age');
        break;
        case "email":
            validateData(expresions.email, e.target, 'email');
        break;
        case "password":
            validateData(expresions.password, e.target, 'password');
            validatePassword2();
        break;
        case "password2":
            validatePassword2();
        break;
    }
}
const validateData = (expresion, input, data) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${data}`).classList.remove('form__grupo-incorrecto');
        document.getElementById(`grupo__${data}`).classList.add('form__grupo-correcto');
        document.querySelector(`#grupo__${data} .form__input-error`).classList.remove('form__input-error-active');
    }  else{
        document.getElementById(`grupo__${data}`).classList.add('form__grupo-incorrecto');
        document.getElementById(`grupo__${data}`).classList.remove('form__grupo-correcto');
        document.querySelector(`#grupo__${data} .form__input-error`).classList.add('form__input-error-active');    
    }
}
const validatePassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if(inputPassword1.value !== inputPassword2.value){
        document.getElementById(`grupo__password2`).classList.add('form__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.remove('form__grupo-correcto');
        document.querySelector(`grupo__password2 .form__input-error`).classList.add('form__input-error-active');       
    }else{
        document.getElementById(`grupo__password2`).classList.remove('form__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.add('form__grupo-correcto');
        document.querySelector(`grupo__password2 .form__input-error`).classList.remove('form__input-error-active');
    }
}
inputs.forEach((input)=>{ //por cada input ejectua un codigo
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});

form.addEventListener('submit', (e) =>{ //Accion cuando se presione el botón
    e.preventDefault(); //para que no mande a otra pagina

    console.log(e);
    if(name && id && age && email && password ){
        
    }
});
