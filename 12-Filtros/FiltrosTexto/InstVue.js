
//Filtro de manera Global  (nombre, funcion)
Vue.filter('capitalizar', function(value){
	if(!value) return '';
	value = value.toString();
	return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter('cortar', function(value){
	if(!value) return '';
	value = value.toString();
	return value.substring(0,10);
});



var vm = new Vue({		

    el: 'main', 	

    data: {			
     	texto: 'filtros con vue.js',
    },


    filters:{

    	mayusculas: function(value){
    		if(!value) return '';
    		value = value.toString();
    		return value.toUpperCase();
    	},






    }


})