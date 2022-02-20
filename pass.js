// your password here
const pass = 'Ass2sss+';

// ==========================================================

const hasUpper = (str) => /[A-Z]/.test(str);
const hasLower = (str) => /[a-z]/.test(str);
const hasNum = (str) => /[0-9]/.test(str);
const hasSpecial = (str) => /[!@#$%^&*()-+]/.test(str);

const checkItem = (fn) => {
    let check;

    for (i in pass) {
        if (fn(pass[i])) {
            check = true;
            break;
        }
    }

    return check;
}

if (pass.length < 6) {
    console.log('Atenção! A senha deve possuir no mínimo 6 caracteres.')
} else {
    if (!checkItem(hasUpper)) {
        console.log('Atenção! A senha deve possuir no mínimo 1 letra em maiúsculo.');
    } else if (!checkItem(hasLower)) {
        console.log('Atenção! A senha deve possuir no mínimo 1 letra em minúsculo.');
    } else if (!checkItem(hasNum)) {
        console.log('Atenção! A senha deve possuir no mínimo 1 número.');
    } else if (!checkItem(hasSpecial)) {
        console.log('Atenção! A senha deve possuir no mínimo 1 caractere especial [ !@#$%^&*()-+ ].');
    } else {
        console.log('Senha cadastrada com sucesso!');
    }
}
