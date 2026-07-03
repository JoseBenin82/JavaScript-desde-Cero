const cowsay = require('cowsay');
const planetas = require('./planetas');

function mostrarReporte() {
  console.log(cowsay.say({
    text: '🚀 REPORTE DE EXPLORACIÓN ESPACIAL 🚀',
    e: 'oO',
    T: 'U'
  }));

  planetas.forEach(planeta => {
    console.log(`✨ Planeta: ${planeta.nombre}`);
    console.log(`📝 Descripción: ${planeta.descripcion}`);
    console.log(`📅 Descubierto en: ${planeta.descubiertoEn}`);
    console.log('------------------------------------\n');
  });

  console.log(`📊 Total de planetas descubiertos: ${planetas.length}`);

  const mascota = planetas.length > 3 ? 'dragon' : 'cow';
  console.log(cowsay.say({
    text: `🌟 Misión cumplida. ¡Descubrimos ${planetas.length} planetas! 🌟`,
    f: mascota
  }));
}

function contarPlanetasAntiguos() {
  return planetas.filter(p => isNaN(p.descubiertoEn)).length;
}

console.log(`🔭 Planetas descubiertos en la antigüedad: ${contarPlanetasAntiguos()}\n`);

mostrarReporte();
