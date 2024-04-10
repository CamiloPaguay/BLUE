const handler = async (m, {conn, text, command}) => {
  const yh = global.loli;
  const url = yh[Math.floor(Math.random() * yh.length)];
  const mensajes = [
    'Descansa, mañana será un mejor día',
    'Que tengas un buen descanso',
    'Espero que tengas dulces sueños',
    'Descansa y recarga energías para mañana',
    'Que tengas un reparador descanso',
    'Buenas noches, que descanses',
  ];
  const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: mensaje}, {quoted: m});
};
handler.command = /^(dormir)$/i;
handler.tags = ['dormir'];
handler.help = ['dormir'];
export default handler;

global.loli = [
  'https://i.pinimg.com/736x/cf/7d/74/cf7d741fecb5e2c6abe1b9b237b30b04.jpg',
  'https://i.pinimg.com/736x/b5/b2/62/b5b2620e392e74139487c209c3b03dc2.jpg',
  'https://i.pinimg.com/280x280_RS/dc/6e/53/dc6e53b48dd3de659bd43257056147a6.jpg',
  'https://i.pinimg.com/originals/cd/ef/fc/cdeffc0bf155fe2c8c63561b437c6864.jpg',
];
