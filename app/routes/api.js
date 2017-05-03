var Poll = require('../models/poll');

module.exports = function(router){
	//http://localhost:5000/polls
	//parte para grabar en base de datos
	router.post('/polls', function(req,res){
		console.log(req.body);
		
		var poll = new Poll();
/*primera parte 1 - 10 */

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

		//pregunta 9
		poll.res9 = req.body.res9;
		//pregunta 10
		poll.res10 = req.body.res10;

 //pregunta 11- 12
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
		
		//pregunta 22
		res221 = req.body.res22[0].res1;
		res222 = req.body.res22[0].res2;
		res223 = req.body.res22[0].res3;
		res224 = req.body.res22[0].res4;
		res225 = req.body.res22[0].res5;
		res226 = req.body.res22[0].res6;
		res227 = req.body.res22[0].res7;
		res228 = req.body.res22[0].otro;
		
		poll.res22.push({res1: res221, res2: res222, res3: res223, res4: res224,  res5: res225, res6: res226, res7: res227, otro: res228});


		//pregunta 23
		res231 = req.body.res23[0].res1;
		res232 = req.body.res23[0].res2;
		res233 = req.body.res23[0].res3;
		res234 = req.body.res23[0].res4;
		res235 = req.body.res23[0].res5;
		res236 = req.body.res23[0].res6;
		res237 = req.body.res23[0].otro;
		poll.res23.push({res1: res231, res2: res232, res3: res233, res4: res234,  res5: res235, res6: res236, otro: res237});

		//pregunta 24
		poll.res24 = req.body.res24;

		//pregunta 25
		poll.res25 = req.body.res25;

		

		//pregunta 26
		res261 = req.body.res26[0].res1;
		res262 = req.body.res26[0].res2;
		res263 = req.body.res26[0].res3;
		res264 = req.body.res26[0].res4;
		
		poll.res26.push({res1: res261, res2: res262, res3: res263, res4: res264});


		//pregunta 27
		res271 = req.body.res27[0].res1;
		res272 = req.body.res27[0].res2;
		res273 = req.body.res27[0].res3;
		res274 = req.body.res27[0].res4;
		poll.res27.push({res1: res271, res2: res272, res3: res273, res4: res274});

		//pregunta 28
		poll.res28 = req.body.res28;

		//pregunta 29
		poll.res29 = req.body.res29;


		//pregunta 30
		res301 = req.body.res30[0].res1;
		res302 = req.body.res30[0].res2;
		res303 = req.body.res30[0].res3;
		res304 = req.body.res30[0].res4;
		res305 = req.body.res30[0].res5;
		res306 = req.body.res30[0].res6;
		res307 = req.body.res30[0].res7;
		poll.res30.push({res1: res301, res2: res302, res3: res303, res4: res304,res5: res305,res6: res306,res7: res307});

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