import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErros(err: ValidationError): Errors {
  const validationErros: Errors = {};

  err.inner.forEach((error: any) => {
    validationErros[error.path] = error.message;
  });

  return validationErros;
}
