import { regexEmail, regexPassword } from "./constants";

export default function validation(input) {
    const errors = {};

    if (!input.email.length) errors.email = "Ingrese su correo electrónico";
    else {
        if (!regexEmail.test(input.email)) errors.email = "Debe ingresar un correo electrónico válido";
        if (input.email.length > 35) errors.email = "Debe tener menos de 35 caracteres";
    }

    if (!input.password.length) errors.password = "Ingrese su contraseña";
    else {
        if (!regexPassword.test(input.password)) errors.password = "La contraseña debe tener al menos un número y seis caracteres alfanuméricos";
        if (input.password.length < 6) errors.password = "La contraseña debe tener al menos 6 caracteres";
        if (input.password.length > 10) errors.password = "La contraseña debe tener como máximo 10 caracteres";
    }

    return errors;
}
