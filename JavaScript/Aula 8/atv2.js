function checarBateria(nivelBateria) {
    if(nivelBateria < 20) {
        return 'Bateria ok'
    }

      else {
      return 'Carregue seu celular!'

    }
}

let status = checarBateria(15);
console.log(nivelBateria);  // Vai imprimir: "Carregue seu celular!"

nivelBateria = checarBateria(85);
console.log(nivelBateria);  // Vai imprimir: "Bateria ok"




