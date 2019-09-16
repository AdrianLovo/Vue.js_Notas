//Nombre | Template
Vue.component('mi-componente', {
	template: '#mi-plantilla',

	data: function(){
		return {
			nuevoTexto: 'Este es un ejemplo de texto'
		}
	}

});


var vm = new Vue({      
    el: 'main',     
})