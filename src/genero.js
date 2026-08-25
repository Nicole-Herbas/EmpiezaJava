function saludarPorGenero(genero) {
  const generoNormalizado = String(genero).trim().toLowerCase();

  if (generoNormalizado === 'masculino') {
    return ' muchacho ';
  }

  if (generoNormalizado === 'femenino') {
    return ' muchacha ';
  }

  if (generoNormalizado === 'otro' || generoNormalizado === 'prefiero no especificar') {
    return ' persona ';
  }

  return ' muchache ';
}

export default saludarPorGenero;