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

    //pregunta 30
   $scope.celebraciones = {
    opciones: [
      {id: '1', name: 'Pawkar Raymi (21 de marzo)'},
      {id: '2', name: 'Inti Raymi (21 de junio)'},
      {id: '3', name: 'Kuya Raymi (21de septiembre)'},
      {id: '4', name: 'Kapac Raymi (21 de diciembre)'},
      {id: '5', name: 'San Pedro (29 de junio)'},
      {id: '6', name: 'Octavas de Juan Montalvo'}   
    ]
   };

    //pregunta 31
   $scope.medicinas = {
    opciones: [
      {id: '1', name: 'Medicina ancestral'},
      {id: '2', name: 'Medicina occidental'}   
    ]
   };

    //pregunta 37
   $scope.materiales = {
    opciones: [
      {id: '1', name: 'Utensillos de piedra'},
      {id: '2', name: 'Cerámica'},
      {id: '3', name: 'Madera'},
      {id: '4', name: 'Metal'},
      {id: '5', name: 'Textil'},
          
    ]
   };
//pregunta 38
   $scope.res38 = {
    opciones: [
      {id: '1', name: 'Usted encontró'},
      {id: '2', name: 'Obtuvo de regalo'},
      {id: '3', name: 'Compró'}   
    ]
   };

//pregunta 39
   $scope.lugares = {
    opciones: [
      {id: '1', name: 'Cayambe'},
      {id: '2', name: 'Ayora'},
      {id: '3', name: 'Cangahua'},
      {id: '4', name: 'Olmedo'},
      {id: '5', name: 'Cuzubamba'},
      {id: '6', name: 'Otón'},        
      {id: '7', name: 'Cantón Pedro Moncayo'},
      {id: '8', name: 'Cantón Quito'},
      {id: '9', name: 'Cantón Otavalo'},
      {id: '10', name: 'No sabe'}
    ]
   };
  //pregunta 40
    $scope.res40 = {
    opciones: [
      {id: '1', name: 'Vitrina con vidrio'},
      {id: '2', name: 'Guardada en un mueble cerrado'},
      {id: '3', name: 'Exhibición en estantería abierta'},
      {id: '4', name: 'Cajas- todas juntas cubiertas de papel o tela'},
      {id: '5', name: 'Cajas - todas juntas no cubiertas'}
    ]
   };
//pregunta 45 
    $scope.objetos = {
    opciones: [
      {id: '1', name: 'Dibujos'},
      {id: '2', name: 'Pinturas'},
      {id: '3', name: 'Esculturas'},
      {id: '4', name: 'Monedas'},
      {id: '5', name: 'Medallas'},
      {id: '6', name: 'Tallas'},
      {id: '7', name: 'Objetos de orfebrería'},
      {id: '8', name: 'Objetos de cerámica'},
      {id: '9', name: 'Objetos de madera'},
      {id: '10', name: 'Herramienta agrícola'},
      {id: '11', name: 'Maquinaria agrícola'},
      {id: '12', name: 'Herramineta industrial'},
      {id: '13', name: 'Maquinaria industrial'},
      {id: '14', name: 'Trapiches'},
      {id: '15', name: 'Alambiques'},
      {id: '16', name: 'Relojes'},
      {id: '17', name: 'Campanarios'},
      {id: '18', name: 'Telares'},
      {id: '19', name: 'Mobiliario urbano'}

    ]
   };

//pregunta 47
    $scope.documentos = {
    opciones: [
      {id: '1', name: 'Manuscritos'},
      {id: '2', name: 'Libros'},
      {id: '3', name: 'Mapas'},
      {id: '4', name: 'Partituras musicales'},
      {id: '5', name: 'Telegramas'},
      {id: '6', name: 'Colecciones filatélicas'},
      {id: '7', name: 'Billetes'}
    ]
   };

//pregunta 48
    $scope.visuales = {
    opciones: [
      {id: '1', name: 'Fílmicos'},
      {id: '2', name: 'Sonoros'},
      {id: '3', name: 'Visuales'},
      {id: '4', name: 'Audio visuales'},
      {id: '5', name: 'Fotografías'},
      {id: '6', name: 'Negativos'}
    ]
   };

//pregunta 49
    $scope.visuales = {
    opciones: [
      {id: '1', name: 'Archivos audiovisuales magnéticos y de interés histórico.'},
      {id: '2', name: 'Archivos audiovisuales digitales de interés histórico'},
      {id: '3', name: 'Documentos de interés histórico'},
      {id: '4', name: 'Documentos de interés científico'},
      {id: '5', name: 'Documentos de interés artístico'},
      {id: '6', name: 'Documentos de interés simbólico'},
      {id: '7', name: 'Documentos de interés para la memoria social'}
    ]
   };


//pregunta 54
    $scope.formas = {
    opciones: [
      {id: '1', name: 'Forma permanente -museos.'},
      {id: '2', name: 'Forma ocasional - exposiciones'},
      {id: '3', name: 'Nunca'}
    ]
   };

//pregunta 57
    $scope.instituciones = {
    opciones: [
      {id: '1', name: 'El Gobierno Nacional.'},
      {id: '2', name: 'El Gobierno Provincia de Pichincha'},
      {id: '3', name: 'El GAD Municipal de Cayambe'},
      {id: '4', name: 'La Junta Parroquial'},
      {id: '5', name: 'Ninguno'},
      {id: '6', name: 'No sabe'}
    ]
   };

//pregunta 58
    $scope.organizaciones = {
    opciones: [
      {id: '1', name: 'Gobierno comunitario'},
      {id: '2', name: 'Comité barrial'},
      {id: '3', name: 'Pueblo Cayambe'},
      {id: '4', name: 'Organización de 2do grado'},
      {id: '5', name: 'Cas de la Cultura - Extensión Cayambe'},
      {id: '6', name: 'Ninguno'},
      {id: '7', name: 'No sabe'} 
    ]
   };

//pregunta 59
    $scope.competencias = {
    opciones: [
      {id: '1', name: 'Emitir políticas respecto al patrimonio cultural'},
      {id: '2', name: 'Planificar el patrimonio cultural'},
      {id: '3', name: 'Establecer normas respecto al patrimonio'},
      {id: '4', name: 'Controlar para la preservación del patrimonio'},
      {id: '5', name: 'Intervenir para conservar, preservar,restaurar, exhibir, investigar y promocionar'},
      {id: '6', name: 'Promover la restitución y recuperación de los bines expoliados, perdidos o degradados'},
      {id: '7', name: 'Prestar asistencia técnica para la preservación'},
       {id: '8 ', name: 'Preservar inmuelbes patrimoniales'},
       {id: '9', name: 'Administrar los museos, bibliotecas y archivos'},
       {id: '10', name: 'Administrar sitios arqueológicos'},
       {id: '11', name: 'Administrar espacios públicos culturales/teatros'}
    ]
   };

//pregunta 62
    $scope.organismos = {
    opciones: [
      {id: '1', name: 'Jefatura de Patrimonio'},
      {id: '2', name: 'Departamento de patrimonio cultural'},
      {id: '3', name: 'Dirección General de patrimonio cultural'},
      {id: '4', name: 'Empresa pública de patrimonio cultural'}    ]
   };

//pregunta 63
    $scope.contribuciones = {
    opciones: [
      {id: '1', name: 'Contribución anual de los hogares de Cayambe'},
      {id: '2', name: 'Tasa anual obligatoria a todos los hogares'},
      {id: '3', name: 'Contribución en el control, cuidado o limpieza'},
      {id: '4', name: 'Contribución obligatoria a las empresas'}    ]
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
	   }],
     res12: [{
      res1: '',
      res2: '',
      res3: ''
    }],
     res14: [{
      res1: '',
      res2: '',
      res3: ''
    }],
     res16: [{
      res1: '',
      res2: '',
      res3: ''
    }],
    res18: [{
      res1: '',
      res2: '',
      res3: ''
    }],
    res20: [{
      res1: '',
      res2: '',
      res3: ''
    }],
    res21:[{
      patri: '',
      per:''
    }, {
      patri: '',
      per:''
    },{
      patri: '',
      per:''
    }, {
      patri: '',
      per:''
    },{
      patri: '',
      per:''
    }, {
      patri: '',
      per:''
    }],
    res22: [{
      res1: '',
      res2: '',
      res3: '',
      res4: '',
      res5: '',
      res6: '',
      res7: '',
      otro: ''
    }],
    res23: [{
      res1: '',
      res2: '',
      res3: '',
      res4: '',
      res5: '',
      res6: '',
      otro: ''
    }],
    res26: [{
      res1: '',
      res2: '',
      res3: '',
      res4: ''
    }],
    res27: [{
      res1: '',
      res2: '',
      res3: '',
      res4: ''
    }],
    res30: [{
      res1: '',
      res2: '',
      res3: '',
      res4: '',
      res5: '',
      res6: '',
      res7: ''
    }],
    res31: [{
      res1: '',
      res2: '',
      res3: ''
    }],
    res35: [{
      res1: '',
      res2: '',
      res3: ''
    }],
    res36: [{
      res1: '',
      res2: '',
      res3: ''
    }],
    res37: [{
      res1: '',
      res2: '',
      res3: '',
      res4: '',
      res5: '',
      res6: ''
    }],
    res38: [{
      res1: '',
      res2: '',
      res3: '',
      res4: ''
    }],
    res39: [{
      res1: '',
      res2: '',
      res3: '',
      res4: '',
      res5: '',
      res6: '',
      res7: '',
      res8: '',
      res9: '',
      res10: '',
      res11: ''
    }],
    res40: [{
      res1: '',
      res2: '',
      res3: '',
      res4: '',
      res5: '',
      res6: ''
    }],
    res45: [{
      res1: '',
      res2: '',
      res3: '',
      res4: '',
      res5: '',
      res6: '',
      res7: '',
      res8: '',
      res9: '',
      res10: ''
    }],
    res46: [{
      res1: '',
      res2: '',
      res3: '',
      res4: '',
      res5: '',
      res6: '',
      res7: '',
      res8: '',
      res9: '',
      res10: '',
      res11: ''
    }],
    res47: [{
      res1: '',
      res2: '',
      res3: '',
      res4: '',
      res5: '',
      res6: '',
      res7: ''
    }],
    res48: [{
      res1: '',
      res2: '',
      res3: '',
      res4: '',
      res5: '',
      res6: ''
    }],
    res49: [{
      res1: '',
      res2: '',
      res3: '',
      res4: '',
      res5: '',
      res6: '',
      res7: '',
      res8: ''
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
    //$scope.poll.parroquia =  regData.parroquia;
		//$scope.poll.sector[0].sdig1 =  regData.sector.sdig1;
		//$scope.poll.sector[0].sdig2 =  regData.sector.sdig2;
		//$scope.poll.sector[0].sdig3 =  regData.sector.sdig3;
		//$scope.poll.zona[0].zdig1 =  regData.zona.zdig1;
		//$scope.poll.zona[0].zdig2 =  regData.zona.zdig2;
		//$scope.poll.zona[0].zdig3 =  regData.zona.zdig3;
		//$scope.poll.direccion[0].dir1 =  regData.direccion.dir1;
		//$scope.poll.direccion[0].dir2 =  regData.direccion.dir2;
		//$scope.poll.comunidad =  regData.comunidad;
		$scope.poll.res21[0].patri =  $scope.poll.res18[0].res1 ;
    $scope.poll.res21[1].patri =  $scope.poll.res18[0].res2 ;
    $scope.poll.res21[2].patri =  $scope.poll.res18[0].res3 ;
    $scope.poll.res21[3].patri =  $scope.poll.res20[0].res1 ;
    $scope.poll.res21[4].patri =  $scope.poll.res20[0].res2 ;
    $scope.poll.res21[5].patri =  $scope.poll.res20[0].res3 ;
   
    $scope.poll.final =  regData.final;

		console.log($scope.poll);

        $http.post('/api/polls', $scope.poll);
      };


}]);

