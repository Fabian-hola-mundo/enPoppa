import { whatsApplink } from '../../../constants/whatsAppLink';

const portfolio = 'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/portfolio%2FRECONOCIMIENTOS%20IMPORTADOS%202024_compressed.pdf?alt=media&token=f5f17ca2-ab21-496a-9ba0-b2e3a8a5ee30'

export const promocionales = {
  title: 'Promocionales - Regalos corporativos',
  slug: 'promocionales',
  label: 'Promocionales',
  image:
    'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/portfolio%2Ffotos%2Fpromocional-min.jpg?alt=media&token=fa27c78f-37e8-4a5b-8f63-04d178e55651',
  alt: 'text Alt',
  description:
    'Miles de referencias en artículos promocionales importados y de producción nacional:',
  bullets: [
    'Confección (camisetas, busos, uniformes) Art. Oficina',
    'Bebidas (termos, mugs, vasos...)',
    'Viaje (maletas, marca maletas, almohadas, tapaojos...)',
    'Bolígrafos',
    'Gorras',
    'Sombrillas',
    'Hogar',
    'Elementos y kits especiales Empaques especiales',
  ],
  actions: [
    {
      label: 'Conoce algunas opciones',
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
