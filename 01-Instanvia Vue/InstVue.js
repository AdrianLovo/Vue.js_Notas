var vm = new Vue({		//Instancia de Vue 

     el: '#selector', 	//Selector al que se enlazara la instancia Vue, no puede enlazarse a body ni html 

     data: {			//Datos dentro de la instancia
         mensaje: 'Esto es un string',
         numero: 2,
         booleano: true,
         unArray: [],
         unObjeto: {nombre: 'Adrian', apellido: 'Castillo'}
     }
 })
//Vue es totalmente reactivo por lo que se pueden ralizar asignaciones como vm.numero= 100 en consola