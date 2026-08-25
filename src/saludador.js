function saludarPorHora(hora, idioma) {
  const idiomaNormalizado = String(idioma || "es").trim().toLowerCase();
  const esEspanol = idiomaNormalizado === "es" || idiomaNormalizado === "español";

  if (hora >= 5 && hora < 12) {
    return esEspanol ? "Buenos días" : "Good morning";
  }

  if (hora >= 12 && hora < 19) {
    return esEspanol ? "Buenas tardes" : "Good afternoon";
  }

  return esEspanol ? "Buenas noches" : "Good night";
}

export default saludarPorHora;