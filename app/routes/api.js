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
		//pregunta 9
		poll.res9 = req.body.res9;
		//pregunta 10
		poll.res10 = req.body.res10;
		//pregunta 11
		poll.res11 = req.body.res11;

		//pregunta 12
		res121 = req.body.res12[0].res1;
		res122 = req.body.res12[0].res2;
		res123 = req.body.res12[0].res3;
		poll.res12.push({res1: res121, res2: res122, res3: res123});


		//pregunta 13
		poll.res13 = req.body.res13;

		//pregunta 14
		res141 = req.body.res14[0].res1;
		res142 = req.body.res14[0].res2;
		res143 = req.body.res14[0].res3;
		poll.res14.push({res1: res141, res2: res142, res3: res143});

		//pregunta 15
		poll.res15 = req.body.res15;

		//pregunta 16
		res161 = req.body.res16[0].res1;
		res162 = req.body.res16[0].res2;
		res163 = req.body.res16[0].res3;
		poll.res16.push({res1: res161, res2: res162, res3: res163});


		//pregunta 17
		poll.res17 = req.body.res17;

		//pregunta 18
		res181 = req.body.res18[0].res1;
		res182 = req.body.res18[0].res2;
		res183 = req.body.res18[0].res3;
		poll.res18.push({res1: res181, res2: res182, res3: res183});

		//pregunta 19
		poll.res19 = req.body.res19;

		//pregunta 20
		res201 = req.body.res20[0].res1;
		res202 = req.body.res20[0].res2;
		res203 = req.body.res20[0].res3;
		poll.res20.push({res1: res201, res2: res202, res3: res203});

/*
			//pregunta 21
		id211 = req.body.res21[0].per.id;
		id212 = req.body.res21[1].per.id;
		id213 = req.body.res21[2].per.id;
		id214 = req.body.res21[3].per.id;
		id215 = req.body.res21[4].per.id;
		id216 = req.body.res21[5].per.id;

		per211 = req.body.res21[0].per.name;
		per212 = req.body.res21[1].per.name;
		per213 = req.body.res21[2].per.name;
		per214 = req.body.res21[3].per.name;
		per215 = req.body.res21[4].per.name;
		per216 = req.body.res21[5].per.name;
		res211 = req.body.res21[0].patri;
		res212 = req.body.res21[1].patri;
		res213 = req.body.res21[2].patri;
		res214 = req.body.res21[3].patri;
		res215 = req.body.res21[4].patri;
		res216 = req.body.res21[5].patri;

		poll.res21.push({patri: res211, per: per211, id: id211});
		poll.res21.push({patri: res212, per: per212, id: id212});
		poll.res21.push({patri: res213, per: per213, id: id213});
		poll.res21.push({patri: res214, per: per214, id: id214});
		poll.res21.push({patri: res215, per: per215, id: id215});
		poll.res21.push({patri: res216, per: per216, id: id216});
	*/	
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