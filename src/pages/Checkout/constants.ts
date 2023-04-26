import { cepPattern } from "./helpers/orderValidationSchema";

export const ADDRESS_INPUTS = [
  { type: 'text', placeholder: 'CEP', name: 'cep' },
  { type: 'text', placeholder: 'Rua', name: 'street' },
  { type: 'number', placeholder: 'Número', name: 'number' },
  {
    type: 'text',
    placeholder: 'Complemento',
    name: 'complement',
    isOptional: true,
  },
  { type: 'text', placeholder: 'Bairro', name: 'neighborhood' },
  { type: 'text', placeholder: 'Cidade', name: 'city' },
  { type: 'text', placeholder: 'UF', name: 'state', maxLength: 2 },
];
