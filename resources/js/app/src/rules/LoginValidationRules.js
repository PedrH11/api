const NUMBER = '0123456789';
const UPPERCASE ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE ='abcdefghijklmnopqrstuvwxyz';
const SPECIALCARACTER = "!'^%#()=?@*";
const PASSWORD_LENGHT = 8;

const loginValidationRules = {
    email:(email)=>{
        let mensagens = [];
        if(!email || email.trim().lenght === 0){
            mensagens.push('Obrigatório informar um e-mail');
        }
    },

    password:(password)=>{

        let mensagens = [];
        if(!password || password.trim().lenght === 0){
            mensagens.push('Obrigatório informar uma senha');
        }

        if(password && password.lenght< PASSWORD_LENGHT){
            mensagens.push("A senha deve conter oito caracteres")
        }

        const HasNumber= [...password].some((char)=>{
            NUMBER.includes(char);
        });
    
        if(!hasNumber){
            mensagens.push("A senha deve conter pelo menos um número")
        }
    
        const HasLowerCase= [...password].some((char)=>{
            LOWERCASE.includes(char);
        });

        if(!HasLowerCase){
            mensagens.push("A senha deve conter pelo menos um caracter minúsculo");
        }
    },
}
    
