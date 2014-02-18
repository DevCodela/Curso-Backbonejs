var Libro = Backbone.Model.extend({

	urlRoot: '/libros',

	defaults: {
		autor: 'Desconocido'
	},

	initialize: function() {
		console.log('Se ha creado una nueva instancia del Modelo Libro.');

		this.on('change', function(){
			console.log('El modelo ha sido modificado.');
		});
	},

	validate: function(atributos) {
		if(!atributos.titulo) {
			return 'Debe tener un titulo.';
		}
	}

});