var vm = new Vue({		

    el: '#app', 	

    data: {			
       esActivo: 'activo',
    },

    watch:{
      esActivo: function(){
        console.log('Cambio el valor del estado');
      }
    }

})
