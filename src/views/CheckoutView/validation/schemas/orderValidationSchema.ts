import * as y from 'yup';

export const cepPattern = /^\d{5}-\d{3}$/;

export const orderValidationSchema = y
  .object()
  .shape({
    cep: y
      .string()
      .matches(cepPattern, 'CEP inválido.')
      .required('Cep é obrigatório'),
    street: y.string().required('Rua é obrigatória.'),
    number: y.number().min(1, "Número inválido.").required("Número é obrigatório."),
    neighborhood: y.string().required("Bairro é obrigatório."),
    complement: y.string(),
    city: y.string().required("Cidade é obrigatória."),
    state: y
      .string()
      .max(2, "Estado inválido.")
      .required("Estado é obrigatório."),
    paymentMethod: y.string().required("Método de pagamento é obrigatório."),
  })
  .required();
