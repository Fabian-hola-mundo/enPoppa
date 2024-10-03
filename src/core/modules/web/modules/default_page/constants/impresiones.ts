import { whatsApplink } from '../../../constants/whatsAppLink';

const portfolio = 'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/portfolio%2FRECONOCIMIENTOS%20IMPORTADOS%202024_compressed.pdf?alt=media&token=f5f17ca2-ab21-496a-9ba0-b2e3a8a5ee30'

export const impresiones
 = {
  title: 'Impresión',
  label: 'Impresiones',
  slug: 'impresion',
  image:
    'https://firebasestorage.googleapis.com/v0/b/enpoppa2024.appspot.com/o/portfolio%2Ffotos%2Fimpresiones-min.jpg?alt=media&token=9165bb45-2425-4d48-baa0-5ed03004f1ac',
  alt: 'text Alt',

  bullets: [
    "Grandes formatos (vallas, pendones, vinilo adhesivo para pared o pisos)",
    "Papelería corporativa: Cuadernos, agendas, calendarios, volantes, plegables, afiches, catálogos, etiquetas, tarjetas, hojas membrete, sobres, bolsas, cajas",
    "Plotter de corte: vinilo adhesivo pared y piso",
  ],
  actions: [
    {
      label: 'Habla con un asesor ahora',
      action: () => {
        window.open(whatsApplink, '_blank');
      },
    },
  ],
};
