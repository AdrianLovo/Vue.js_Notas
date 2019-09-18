var vm = new Vue({		

    el: '#app', 	

    data: {			
       titulo: 'Hola',
    },

    methods:{
    	mostrarTitulo: function(){
    		this.titulo = 'Hola mundo desde Vue.js';
    		return this.titulo;
    	}
    }

})
