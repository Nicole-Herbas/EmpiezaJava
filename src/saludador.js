function saludarPorHora(hora, idioma) {
  const idiomaNormalizado = String(idioma).trim().toLowerCase();

  if (hora >= 5 && hora < 12) {
    return idiomaNormalizado === "español" ? "Buenos días" : "Good morning";
  }

  if (hora >= 12 && hora < 19) {
    return idiomaNormalizado === "español" ? "Buenas tardes" : "Good afternoon";
  }

  return idiomaNormalizado === "español" ? "Buenas noches" : "Good night";
}

export default saludarPorHora;