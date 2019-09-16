/*
	Vue contiene 6 clases
		3 para la entrada de una transicion (in)
			v-enter: Antes de añadir el primer elemento ("Fotograma")
			v-enter-active: Se mantienen durante toda la transicion hasta finalizar la transicion
			v-enter-to: Mantiene la clase hasta que entra

		3 para la salida de una transicion (out)
			v-leave
			v-leave-active
			v-leave-to

*/


var vm = new Vue({		

    el: 'main', 	

    data: {			
		mostrar: true,       
    }
})