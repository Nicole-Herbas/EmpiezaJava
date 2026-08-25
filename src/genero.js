function saludarPorGenero(genero, edad, idioma) {
  const generoNormalizado = String(genero).trim().toLowerCase();
  const idiomaNormalizado = String(idioma || "es").trim().toLowerCase();
  const esEspanol = idiomaNormalizado === "es" || idiomaNormalizado === "español";
  const edadNumerica = Number.parseInt(edad);

  if (generoNormalizado === 'masculino') {
    if (edadNumerica > 30) {
      return esEspanol ? "Hola Sr" : "Hello Mr";
    }
    return esEspanol ? "Hola muchacho " : "Hello boy";
  }

  if (generoNormalizado === 'femenino') {
    if (edadNumerica > 30) {
      return esEspanol ? "Hola Sra" : "Hello Mrs";
    }
    return esEspanol ? "Hola muchacha " : "Hello girl";
  }

  if (generoNormalizado === 'otro' || generoNormalizado === 'prefiero no especificar') {
    return esEspanol ? "Hola persona" : "Hello person";
  }

  return esEspanol ? "Hola muchache" : "Hello buddy";
}

export default saludarPorGenero;