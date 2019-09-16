var vm = new Vue({		

    el: 'main', 	

    data: {			
    	mensaje: 'El mensaje invertido',
    },

    computed:{
    	mensajeInvertido(){
    		return this.mensaje.split('').reverse().join('');
    	}
    }





})