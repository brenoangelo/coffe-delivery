import * as yup from 'yup';

export const cepPattern = /^\d{5}-\d{3}$/;

export const orderValidationSchema = yup
  .object()
  .shape({
    cep: yup
      .string()
      .matches(cepPattern, 'CEP inválido.')
      .required('Cep é obrigatório'),
    street: yup.string().required('Rua é obrigatória.'),
    number: yup.number().min(1, "Número inválido.").required("Número é obrigatório."),
    neighborhood: yup.string().required("Bairro é obrigatório."),
    complement: yup.string(),
    city: yup.string().required("Cidade é obrigatória."),
    state: yup
      .string()
      .max(2, "Estado inválido.")
      .required("Estado é obrigatório."),
    paymentMethod: yup.string().required("Método de pagamento é obrigatório."),
  })
  .required();
