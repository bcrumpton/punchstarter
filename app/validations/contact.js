import { validateFormat, validatePrescence } from 'ember-changeset-validations/validators';

export default {
  firstName: validatePrescence(true),
  lastName: validatePrescence(true),
  street: validatePrescence(true),

  phone: [
    validatePrescence(true),
    validateFormat({ type: 'phone' }),
  ],
};
