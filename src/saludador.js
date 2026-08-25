function saludarPorHora(hora) {
  if (hora >= 5 && hora < 12) {
    return "Buenos días";
  }

  if (hora >= 12 && hora < 19) {
    return "Buenas tardes";
  }

  return "Buenas noches";
}

export default saludarPorHora;