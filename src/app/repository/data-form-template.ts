import { DataScientist } from '../util/data-types';

export const DATA_SCIENTIST_INIT: DataScientist[] = [
  {
    label: 'Apq',
    field: 'AAA',
    value: 'BBB',
    options: {
      fieldRequired: true,
      fieldMinlength: 2,
      fieldMaxlength: 2,
      valueRequired: true,
      valueMinlength: 2,
      valueMaxlength: 2
    }
  },
  {
    label: 'Bpq',
    field: 'C',
    value: 'DDD',
    options: {
      fieldRequired: true,
      valueRequired: true,
      valueMinlength: 2,
      valueMaxlength: 2,
      textarea: true
    }
  },
  {
    label: 'Cpq',
    field: 'E',
    value: 'F',
    options: {
      fieldRequired: true,
      textarea: true
    }
  },
  {
    label: 'Dpq',
    field: 'G',
    value: 'H',
    options: {
      addButton: true,
      valueRequired: true
    }
  }
]
