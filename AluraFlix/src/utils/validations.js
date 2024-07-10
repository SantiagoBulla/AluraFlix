function validateEmptyFields(campo) {
    return campo === '' || campo === undefined || campo === ' ' || campo === null;
}

function validateDropField(campo) {
    return campo < 0 || Number.isNaN(campo);
}

function urlStartsWithHTTPS(url) {
    // validates if the url is a string
    if (typeof url !== 'string') {
        return false;
    }
    // validates if the url starts with "https://"
    return !url.startsWith('https://');
}

export const validations = {
    validateEmptyFields,
    validateDropField,
    urlStartsWithHTTPS
}