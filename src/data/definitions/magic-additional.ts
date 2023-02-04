const ADDITIONAL_MAGIC = {
  data: {
    main: {
      id: '',
      name: 'Zmiany ogólne',
      changes: [
        {
          id: '',
          text: 'Wszystkie magie dodatkowe posiadają od teraz te same koszta PW równe 200/300/400',
          badge: {
            type: 'UPDATE',
            text: 'Zaktualizowano',
          },
        },
        {
          id: '',
          text: 'Dodano specjalne nagłówki z poziomem oraz nazwą magii',
          badge: {
            type: 'ADD',
            text: 'Dodano',
          },
        },
        {
          id: '',
          text: 'Usunięto opisy na każdy poziom magii',
          badge: {
            type: 'DELETE',
            text: 'Usunięto',
          },
        },
      ],
    },
    magic: [],
  },
}

export default ADDITIONAL_MAGIC
