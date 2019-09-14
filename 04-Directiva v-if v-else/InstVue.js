var vm = new Vue({		

    el: 'main', 	

    data: {			
        mensaje: true,
        letra: 'A';
    },

    methods:{
    	cambiar: function(){
			this.mensaje = ! this.mensaje;    		
    	}
    }

 })

