let btnEnviar1 = <HTMLButtonElement>document.getElementById("btnEnviar1");

btnEnviar1.addEventListener("click", () => {
  let tamañoArreglo = Number(prompt("Ingrese el tamaño del arreglo"));
  let arreglo: string[] = new Array(tamañoArreglo);
  let indice: number;

  for (indice = 0; indice < tamañoArreglo; indice++) {
    arreglo[indice] = prompt("Ingrese el nombre en el indice" + indice);
  }
  for (indice = 0; indice < tamañoArreglo; indice++) {
    console.log("El Nombre en el" + indice + "  es:  " + arreglo[indice]);
  }
});
