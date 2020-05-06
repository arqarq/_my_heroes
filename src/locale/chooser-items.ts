type ChooserItemsType = {
  id: number,
  data: string[],
  safe?: boolean
}

export const CHOOSER_ITEMS: ChooserItemsType[] = [
  {id: 1, data: ['/crisis', 'Crisis Center']},
  {id: 2, data: ['/dragdrop', 'drag&drop Test']},
  {id: 3, data: ['/forms', 'Formularze']},
  {id: 4, data: ['/form-template', 'Formularz — template driven with Google CF']},
  {id: 5, data: ['/form-reactive', 'Formularz — reactive with Google CF']},
  {id: 6, data: ['/ng-heroes', 'Heroes']},
  {id: 7, data: ['/ng-observables', 'Observables']},
  {
    id: 8,
    data: ['/scrollpanel', 'PrimeNG\'s <span style="text-decoration: line-through">not working</span> &lt;p-scrollPanel>'],
    safe: true
  },
  {id: 9, data: ['/shop', 'Shop']},
  {id: 10, data: ['/sticky', 'Sticky']},
  {id: 11, data: ['/ng-templaterefexample', 'TemplateRef Example']}
]
