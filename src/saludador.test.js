import saludarPorHora from "./saludador.js";

describe("Saludador", () => {
  it.each([
    [0, "Buenas noches"],
    [4, "Buenas noches"],
    [5, "Buenos días"],
    [11, "Buenos días"],
    [12, "Buenas tardes"],
    [18, "Buenas tardes"],
    [19, "Buenas noches"],
    [23, "Buenas noches"],
  ])("a las %i horas debería decir %s", (hora, saludo) => {
    expect(saludarPorHora(hora)).toBe(saludo);
  });
});