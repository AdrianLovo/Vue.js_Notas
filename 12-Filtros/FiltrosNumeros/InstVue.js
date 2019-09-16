
//Filtro de manera Global  (nombre, funcion)
Vue.filter('decimal', function(value){
	value = value.toFixed(2);
    return value;
});

Vue.filter('iva', function(value){
    value = value + ((value * .15)/100);
    value = value.toFixed(2);
    return value;	
});

Vue.filter('descuento', function(value){
    value = value - ((value * .1)/100);
    value = value.toFixed(2);
    return value;   
});




var vm = new Vue({		

    el: 'main', 	

    data: {			
     	texto: 1234,
    },

})