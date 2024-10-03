import { whatsApplink } from '../../../constants/whatsAppLink';

const portfolio = 'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/portfolio%2FRECONOCIMIENTOS%20IMPORTADOS%202024_compressed.pdf?alt=media&token=f5f17ca2-ab21-496a-9ba0-b2e3a8a5ee30'

export const premiacion
 = {
  title: 'Premiación y reconocimiento',
  slug: 'premiacion',
  label: 'Premiación',
  image:
    'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/portfolio%2Ffotos%2Fpremiacion-min.jpg?alt=media&token=c8355204-6a22-4c32-a280-56ddcf78b929',
  alt: 'text Alt',
  description:
    'Personalizados en forma, material y mensaje',
  bullets: [
    'Placas',
    'Trofeos en diferentes materiales',
    'Medallas',
    'Pines',
  ],
  actions: [
    {
      label: 'Ver catálogo',
      action: () => {
        window.open(portfolio, '_blank');
      },
    },
    {
      label: 'Habla con un asesor ahora',
      action: () => {
        window.open(whatsApplink, '_blank');
      },
    },
  ],
};
