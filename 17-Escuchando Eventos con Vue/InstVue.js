var vm = new Vue({		

    el: '#app', 	

    data: {			
       contador: 0,
       inicialContador: 0,
       x: 0,
       y: 0,
    },

    methods:{
    	aumentarContador: function(valor){
    		this.contador = this.contador + valor;
    	},
        
        cambiarContador: function(){
            this.contador = this.inicialContador;
        },

        actualizarValores: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        }

    }

})
