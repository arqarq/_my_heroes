export const DATA = [
  {content: 'A', blob: true, L: '50%', T: '50%'},
  {content: 'B', blob: false, L: '50%', T: '50%'},
  {content: 'C', blob: false, L: '50%', T: '50%'},
  {content: 'D', blob: true, L: '50%', T: '50%'},
  {content: 'E', blob: false, L: '50%', T: '50%'},
  {content: 'F', blob: true, L: '50%', T: '50%'},
  {content: 'G', blob: false, L: '50%', T: '50%'},
  {content: 'H', blob: true, L: '50%', T: '50%'},
  {content: 'I', blob: false, L: '50%', T: '50%'},
  {content: 'J', blob: false, L: '50%', T: '50%'},
  {content: 'K', blob: true, L: '50%', T: '50%'},
  {content: 'L', blob: true, L: '50%', T: '50%'},
  {content: 'M', blob: true, L: '50%', T: '50%'},
  {content: 'N', blob: false, L: '50%', T: '50%'},
  {content: 'O', blob: false, L: '50%', T: '50%'},
  {content: 'P', blob: true, L: '50%', T: '50%'},
  {content: 'Q', blob: true, L: '50%', T: '50%'},
  {content: 'R', blob: false, L: '50%', T: '50%'},
  {content: 'S', blob: true, L: '50%', T: '50%'},
  {content: 'T', blob: true, L: '50%', T: '50%'},
  {content: 'U', blob: false, L: '50%', T: '50%'},
  {content: 'W', blob: true, L: '50%', T: '50%'},
  {content: 'X', blob: true, L: '50%', T: '50%'},
  {content: 'Y', blob: false, L: '50%', T: '50%'},
  {content: 'Z', blob: true, L: '50%', T: '50%'}
];

export interface DataScientist {
  label: string,
  // toggle?: boolean,
  field: string,
  value: string,
  option?: {
    addButton?: boolean,
    addButtonActivated?: boolean,
    fieldRequired?: boolean,
    valueRequired?: boolean,
    textarea?: boolean
  }
}

export const DATA_SCIENTIST_INIT: DataScientist[] = [
  {
    label: 'Apq',
    field: 'A',
    value: 'B',
    option: {
      fieldRequired: true,
      valueRequired: true
    }
  },
  {
    label: 'Bpq',
    field: 'C',
    value: 'D',
    option: {
      textarea: true
    }
  },
  {
    label: 'Cpq',
    field: 'E',
    value: 'F',
    option: {
      textarea: true
    }
  },
  {
    label: 'Dpq',
    field: 'G',
    value: 'H',
    option: {
      addButton: true
    }
  }
];
