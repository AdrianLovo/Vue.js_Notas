var vm = new Vue({		

    el: 'main', 	

   	mounted(){
   		this.consulta();
   	},

   	data:{
   		usuarios: [],
   	},

   	methods:{
   		consulta(){
   			axios.get('https://randomuser.me/api/?results=10')
   			.then((respuesta) => {
   				console.log(respuesta);
   				this.usuarios = respuesta.data.results;
   			})
   		},
   	}


})