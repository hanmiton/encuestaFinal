angular.module('pollApp',['appRoutes'])

.controller('regCtrl', ['$scope', '$http', function($scope, $http) {
  


  //obtener desde base de datos parentesco **falta
  $scope.parentescos = {
    opciones: [
      {id: '1', name: 'Jefe del hogar'},
      {id: '2', name: 'Conyugue'},
      {id: '3', name: 'Hijo/a'},
      {id: '4', name: 'Yerno/Nuera'},
      {id: '5', name: 'Nieto/a'},
      {id: '6', name: 'Hermano/a'},
      {id: '7', name: 'Cuñado'},
      {id: '8', name: 'Padre/Madre'},
      {id: '9', name: 'Suegro'},
      {id: '10', name: 'Otro pariente'},
      {id: '11', name: 'Otro no pariente'}
    ]
   };
   //sexos
   $scope.sexos = {
    opciones: [
      {id: '1', name: 'Hombre'},
      {id: '2', name: 'Mujer'}
    ]
   };
   //Etnia
   $scope.etnias = {
    opciones: [
      {id: '1', name: 'Mestizo'},
      {id: '2', name: 'Indigena'},
      {id: '3', name: 'Negro'},
      {id: '4', name: 'Mulato'},
      {id: '5', name: 'Montubio'},
      {id: '6', name: 'Blanco'},
      {id: '7', name: 'Otro'}
    ]
   };
   //Nacionalidad
   $scope.nacionalidades = {
    opciones: [
      {id: '1', name: 'Kayambi'},
      {id: '2', name: 'Otavalo'},
      {id: '3', name: 'Caranqui'},
      {id: '4', name: 'Otro'},
      {id: '5', name: 'Ninguno'}
    ]
   };
   //Idioma
   $scope.idiomas = {
    opciones: [
      {id: '1', name: 'Kichwa'},
      {id: '2', name: 'Otra lengua'},
      {id: '3', name: 'Castellano'},
      {id: '4', name: 'Lengua Extrajera'}
    ]
   };
	//Nacimientos
   $scope.nacimientos = {
    opciones: [
      {id: '1', name: 'Cayambe'},
      {id: '2', name: 'Ayora'},
      {id: '3', name: 'Cangahua'},
      {id: '4', name: 'Olmedo'},
      {id: '5', name: 'Cuzubamba'},
      {id: '6', name: 'Otón'},
      {id: '7', name: 'Otro'}
    ]
   };  
   	//Niveles
   $scope.niveles = {
    opciones: [
      {id: '1', name: 'Niguno'},
      {id: '2', name: 'Inicial'},
      {id: '3', name: 'Centro Alfabetizacion'},
      {id: '4', name: 'Pre-Kinder o Inicial'},
      {id: '5', name: 'Primaria/escuela'},
      {id: '6', name: 'Básica'},
      {id: '7', name: 'Bachillerato'},
      {id: '8', name: 'Secundario/colegio'},
      {id: '9', name: 'Superior/Universidad'},
      {id: '10', name: 'Post Grado'}
    ]
   };  

   	//pregunta 21 selecciones
   $scope.spatrimonio = {
    opciones: [
      {id: '1', name: 'Abuelos'},
      {id: '2', name: 'Padres'},
      {id: '3', name: 'Otro parientes cercanos'},
      {id: '4', name: 'Otros parientes lejanos'},
      {id: '5', name: 'Otros no parientes'}
    ]
   };  
   	//pregunta 22 
   $scope.bienes = {
    opciones: [
      {id: '1', name: 'Puntiatzil'},
      {id: '2', name: 'Yanahuaico'},
      {id: '3', name: 'Pambamarca'},
      {id: '4', name: 'Quitoloma'},
      {id: '5', name: 'Guachalá'},
      {id: '6', name: 'La Chimba'}
    ]
   };  
   	//pregunta 26
   $scope.inmuebles = {
    opciones: [
      {id: '1', name: 'La Casa de INNFA'},
      {id: '2', name: 'Hacienda Guachalá'},
      {id: '3', name: 'Hacienda Pesillo'},
      {id: '4', name: 'Hacienda La Chimba'}
    ]
   };  

   $scope.poll = {
		parroquia: '',
		sector: [{
			sdig1: '',
			sdig2: '',
			sdig3: ''
		}],
		zona: [{
			zdig1: '',
			zdig2: '',
			zdig3: ''
		}],
		direccion: [{
			dir1: '',
			dir2: ''
		}],
		comunidad: '',
		personas: [ { parentesco: '',
						sexo:'',
						edad:'',
						etnia:'',
						pueblo:'',
						idioma: '',
						lugar: '',
						nivel: ''
	}]
	};

	$scope.addChoice = function() {
		$scope.poll.personas.push({ parentesco: '',
						sexo:'',
						edad:'',
						etnia:'',
						pueblo:'',
						idioma: '',
						lugar: '',
						nivel: '' });
	};

  $scope.submit = function(regData) {
        $scope.poll.parroquia =  regData.parroquia;
		$scope.poll.sector[0].sdig1 =  regData.sector.sdig1;
		$scope.poll.sector[0].sdig2 =  regData.sector.sdig2;
		$scope.poll.sector[0].sdig3 =  regData.sector.sdig3;
		$scope.poll.zona[0].zdig1 =  regData.zona.zdig1;
		$scope.poll.zona[0].zdig2 =  regData.zona.zdig2;
		$scope.poll.zona[0].zdig3 =  regData.zona.zdig3;
		$scope.poll.direccion[0].dir1 =  regData.direccion.dir1;
		$scope.poll.direccion[0].dir2 =  regData.direccion.dir2;
		$scope.poll.comunidad =  regData.comunidad;
		$scope.poll.final =  regData.final;
		
		console.log($scope.poll);

        $http.post('/api/polls', $scope.poll);
      };


}]);

