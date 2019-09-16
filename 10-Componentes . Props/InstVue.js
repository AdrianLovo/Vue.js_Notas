//Nombre | Template
Vue.component('libro', {
	props: ['titulo', 'autor', 'paginas'],
	template: '<h1> {{ titulo }} - {{ autor }} - {{ paginas }} </h1>',

});


var vm = new Vue({      
    el: 'main',     
    data:{
    	titulo: '1984',
    	autor: 'Jorge Orwell',
    	paginas: 300,
    },

})