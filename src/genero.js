function saludarPorGenero(genero, edad) {
  const generoNormalizado = String(genero).trim().toLowerCase();
  const edadNumerica = Number.parseInt(edad);

  if (generoNormalizado === 'masculino') {
    if (edadNumerica > 30) {
      return ' Sr';
    }
    return ' muchacho ';
  }

  if (generoNormalizado === 'femenino') {
    if (edadNumerica > 30) {
      return ' Sra';
    }
    return ' muchacha ';
  }

  if (generoNormalizado === 'otro' || generoNormalizado === 'prefiero no especificar') {
    return ' persona ';
  }

  return ' muchache ';
}

export default saludarPorGenero;