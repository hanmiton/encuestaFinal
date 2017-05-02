var Poll = require('../models/poll');

module.exports = function(router){
	//http://localhost:5000/polls
	//parte para grabar en base de datos
	router.post('/polls', function(req,res){
		console.log(req.body);
		
		var poll = new Poll();
		poll.parroquia = req.body.parroquia;
		//sector
		sdig1 = req.body.sector[0].sdig1;
		sdig2 = req.body.sector[0].sdig2;
		sdig3 = req.body.sector[0].sdig3;
		poll.sector.push({dig1: sdig1, dig2: sdig2, dig3: sdig3});
		//zona
		zdig1 = req.body.zona[0].zdig1;
		zdig2 = req.body.zona[0].zdig2;
		zdig3 = req.body.zona[0].zdig3;
		poll.zona.push({dig1: zdig1, dig2: zdig2, dig3: zdig3});
		//direccion
		dir1 = req.body.direccion[0].dir1;
		dir2 = req.body.direccion[0].dir2;
		poll.direccion.push({dir1: dir1, dir2: dir2});
		//comunidad
		poll.comunidad = req.body.comunidad;
		//personas

		//console.log(req.body.personas[0].parentesco.name);
	for (i = 0; i < req.body.personas.length; i++) { 
   		pnum=	req.body.personas[0].parentesco.id;
		parentesco=		req.body.personas[0].parentesco.name;
		snum=	 req.body.personas[0].sexo.id;
		sexo= 	 req.body.personas[0].sexo.name;
		edad= 	 req.body.personas[0].edad;
		etnum=	 req.body.personas[0].etnia.id;
		etnia=	 req.body.personas[0].etnia.name;
		punum=	 req.body.personas[0].pueblo.id;
		pueblo=	 req.body.personas[0].pueblo.name;
		inum=	 req.body.personas[0].idioma.id;
		idioma=	 req.body.personas[0].idioma.name;
		lnum = req.body.personas[0].lugar.id;
		lugar=	 req.body.personas[0].lugar.name;
		nnum=	 req.body.personas[0].nivel.id;
		nivel=	 req.body.personas[0].nivel.name;
		

		poll.personas.push({
			parentesco: parentesco,
			pnum: pnum, //parentesco: parentesco, 
			snum: snum, 
			sexo: sexo, 
			edad: edad, 
			etnum: etnum, 
			etnia: etnia, 
			punum: punum, 
			pueblo: pueblo, 
			inum: inum, 
			idioma: idioma, 
			lnum: lnum, 
			lugar: lugar, 
			nnum: nnum, 
			nivel: nivel
		});
	}	
	//console.log(req.body.personas.length);
/*		
*/
		//pregunta 1
		poll.res1 = req.body.res1;
		//pregunta 2
		poll.res2 = req.body.res2;
		//pregunta 2
		poll.res3 = req.body.res3;
		poll.final = req.body.final;

		//console.log(poll);
		if(req.body.parroquia == null || req.body.zona == null || req.body.sector == null || req.body.comunidad == null){
			res.send('Asegurate de proveer los datos');
		} else {
			poll.save(function(err){
				if(err){
					console.log(err);
					res.send('error');
				} else {
					console.log('ver base');
					res.send('Encuesta Grabada');
				}
			});
		}	
	});
	return router;
}