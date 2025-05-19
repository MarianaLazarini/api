const NUMBER = "0123456789";
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
const LOWERCASE =  'abcdefghijklmnopqrstuvwxyz',
const SPECIALCHARACTER = ""


const loginValidationRules = {

    email:(email)=>{
        let mensagens = [];
        if (!email || email.trim().lenght === 0){
            mensagens.push('Obrigatório formar um e-mail');
        }
    },


    password:(password)=>{
        let mensagens = [];
        if (!email || email.trim().lenght === 0){
            mensagens.push('Obrigatório informar a senha');
        }

        if (password && password.lenght < 8){
            mensagens.push('A senha deve conter oito caracteres')
        }

    const hasNumber = [...password].some((char)=>{
     NUMBER.includes(char);
    )};

    if (!hasNumber){
     mensagens.push('A senha deve conter pelo menos um número');
    }

    const hasLowerCase = [...password].some((char)=>)
}