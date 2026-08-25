function saludarPorGenero(genero, edad, idioma) {
  const generoNormalizado = String(genero).trim().toLowerCase();
  const idiomaNormalizado = String(idioma).trim().toLowerCase();
  const edadNumerica = Number.parseInt(edad);

  if (generoNormalizado === 'masculino') {
    if (edadNumerica > 30) {
      return idiomaNormalizado === "español" ? "Hola Sr" : "Hello Mr";
    }
    return idiomaNormalizado === "español" ? "Hola muchacho " : "Hello boy";
  }

  if (generoNormalizado === 'femenino') {
    if (edadNumerica > 30) {
      return idiomaNormalizado === "español" ? "Hola Sra" : "Hello Mrs";
    }
    return idiomaNormalizado === "español" ? "Hola muchacha " : "Hello girl";
  }

  if (generoNormalizado === 'otro' || generoNormalizado === 'prefiero no especificar') {
    return idiomaNormalizado === "español" ? "Hola persona" : "Hello person";
  }

  return idiomaNormalizado === "español" ? "Hola muchacho" : "Hello buddy";
}

export default saludarPorGenero;