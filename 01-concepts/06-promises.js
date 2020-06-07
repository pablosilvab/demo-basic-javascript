// Llamadas asincronas en js, hay dos opciones: ok o no ok. con promesas se pueden manejar ambos casos.
const applyDiscount = new Promise((resolve, reject) => {
  setTimeout(() => {
      let discount = false;
      if (discount){
          resolve('Descuento aplicado');
      } else {
          reject('No se pudo aplicar el descuento');
      }
  }, 1000);
});

// Promise pending -> falta algo en el codigo. 

applyDiscount.then(result => {
   console.log(result); 
}).catch(error => {
    console.log(error);
});