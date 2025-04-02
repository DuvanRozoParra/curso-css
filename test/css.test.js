import { describe, expect, it } from "vitest";

describe("Pruebas de estructura CSS y selectores", () => {
  it("Debe existir el contenedor principal con ID correcto", () => {
    const container = document.getElementById("container-main");
    expect(container).toBeTruthy();
  });

  it('El formulario debe tener el ID "contact" y clases CSS aplicadas', () => {
    const form = document.getElementById("contact");
    const styles = window.getComputedStyle(form);

    expect(form).toBeTruthy();
    expect(styles.getPropertyValue("outline")).not.toBe("");
    expect(styles.getPropertyValue("border-radius")).not.toBe("");
    expect(styles.getPropertyValue("padding")).not.toBe("");
  });

  it("Los contenedores de los inputs deben tener las clases correctas", () => {
    const emailDiv = document.querySelector(".input-email");
    const passwordDiv = document.querySelector(".input-password");

    const emailStyle = window.getComputedStyle(emailDiv);
    const passwordStyle = window.getComputedStyle(passwordDiv);

    expect(emailDiv).toBeTruthy();
    expect(passwordDiv).toBeTruthy();

    expect(emailStyle.getPropertyValue("display")).toBe("flex");
    expect(emailStyle.getPropertyValue("flex-direction")).toBe("column");
    expect(emailStyle.getPropertyValue("margin-bottom")).not.toBe("");

    expect(passwordStyle.getPropertyValue("display")).toBe("flex");
    expect(passwordStyle.getPropertyValue("flex-direction")).toBe("column");
    expect(passwordStyle.getPropertyValue("margin-bottom")).not.toBe("");
  });

  it('El botón debe tener el ID "login" y estilos aplicados', () => {
    const button = document.getElementById("login");
    const styles = window.getComputedStyle(button);

    expect(button).toBeTruthy();
    expect(styles.getPropertyValue("width")).toBe("100%");
  });

  it("El body debe tener margen y padding en 0", () => {
    const body = document.body;
    const styles = window.getComputedStyle(body);

    expect(styles.getPropertyValue("padding")).toBe("0px");
    expect(styles.getPropertyValue("margin")).toBe("0px");
  });
});
