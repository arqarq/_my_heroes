export enum ERROR_MESSAGE {
  leftMinlength = 'Minimalna ilość znaków dla lewego pola: ',
  leftMaxlength = 'Maksymalna ilość znaków dla lewego pola: ',
  leftRequired = 'Lewe pole jest wymagane.',
  rightMinlength = 'Minimalna ilość znaków dla prawego pola: ',
  rightMaxlength = 'Maksymalna ilość znaków dla prawego pola: ',
  rightRequired = 'Prawe pole jest wymagane.',
  generic = 'Inny błąd'
}

export type ErrorType = {
  maxlength?: any,
  minlength?: any,
  required?: boolean
}

export interface DataScientist {
  label: string,
  field: string,
  value: string,
  options?: DataScientistOptions
}

interface DataScientistOptions {
  addButton?: boolean,
  addButtonActivated?: boolean,
  fieldRequired?: boolean,
  fieldMinlength?: number,
  fieldMaxlength?: number,
  valueRequired?: boolean,
  valueMinlength?: number,
  valueMaxlength?: number,
  textarea?: boolean
}

export class NewRowDefinition {
  label
  field
  value
  options

  constructor(label, field, value, options?: DataScientistOptions) {
    this.label = label
    this.field = field
    this.value = value
    this.options = options ? options : {}
    this.options.addButtonActivated = false
  }
}
