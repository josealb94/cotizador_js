// Obtiene la diferencia de años
export const obtenerDiferenciaYear = year => (
    new Date().getFullYear() - year
);

// Calcula el total a pagar segun la marca
export const calcularMarca = marca => {
    let incremento;

    switch (marca) {
        case "americano":
            incremento = 1.15;
            break;
        case "europeo":
            incremento = 1.30;
            break;
        case "asiatico":
            incremento = 1.05;
            break;
        default:
            break;
    }

    return incremento;
}

// Calcula aumento del tipo de seguro
export const obtenerPlan = plan => (
    (plan === 'basico') ? 1.20 : 1.50
);

// Muestra la primer letra mayuscula
export const primerMayuscula = texto => (
    texto.charAt(0).toUpperCase() + texto.slice(1)
);