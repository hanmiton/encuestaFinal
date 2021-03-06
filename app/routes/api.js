var Poll = require('../models/poll');

module.exports = function(router){
	//http://localhost:5000/polls
	//parte para grabar en base de datos
	router.post('/polls', function(req,res){
		console.log(req.body);
		
		var poll = new Poll();
/*primera parte 1 - 10 */

		poll.parroquia = req.body.parroquia.name;
		poll.parroquiadesc = req.body.parroquiadesc;
		pueblo=	 req.body.personas[0].pueblo.name;
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
   		pnum=	req.body.personas[i].parentesco.id;
		parentesco=		req.body.personas[i].parentesco.name;
		snum=	 req.body.personas[i].sexo.id;
		sexo= 	 req.body.personas[i].sexo.name;
		edad= 	 req.body.personas[i].edad;
		etnum=	 req.body.personas[i].etnia.id;
		etnia=	 req.body.personas[i].etnia.name;
		etniadesc = req.body.personas[i].etniadesc;
		punum=	 req.body.personas[i].pueblo.id;
		pueblo=	 req.body.personas[i].pueblo.name;
		pueblodesc = req.body.personas[i].pueblodesc;
		inum=	 req.body.personas[i].idioma.id;
		idioma=	 req.body.personas[i].idioma.name;
		idiomadesc = req.body.personas[i].idiomadesc;
		lnum = req.body.personas[i].lugar.id;
		lugar=	 req.body.personas[i].lugar.name;
		lugardesc = req.body.personas[i].lugardesc;
		nnum=	 req.body.personas[i].nivel.id;
		nivel=	 req.body.personas[i].nivel.name;
		niveldesc = req.body.personas[i].niveldesc;

		poll.personas.push({
			parentesco: parentesco,
			pnum: pnum, //parentesco: parentesco, 
			snum: snum, 
			sexo: sexo, 
			edad: edad, 
			etnum: etnum, 
			etnia: etnia,
			etniadesc: etniadesc, 
			punum: punum, 
			pueblo: pueblo,
			pueblodesc: pueblodesc, 
			inum: inum, 
			idioma: idioma, 
			idiomadesc: idiomadesc,
			lnum: lnum, 
			lugar: lugar, 
			lugardesc: lugardesc,
			nnum: nnum, 
			nivel: nivel,
			niveldesc: niveldesc
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
		poll.res24desc = req.body.res24desc;
		//pregunta 25
		poll.res25 = req.body.res25;
		poll.res25desc = req.body.res25desc;
	

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
		poll.res28desc = req.body.res28desc;
		//pregunta 29
		poll.res29 = req.body.res29;
		poll.res29desc = req.body.res29desc;


		//pregunta 30
		res301 = req.body.res30[0].res1;
		res302 = req.body.res30[0].res2;
		res303 = req.body.res30[0].res3;
		res304 = req.body.res30[0].res4;
		res305 = req.body.res30[0].res5;
		res306 = req.body.res30[0].res6;
		res307 = req.body.res30[0].res7;
		res307desc = req.body.res30[0].res7desc;
		
		poll.res30.push({res1: res301, res2: res302, res3: res303, res4: res304,res5: res305,res6: res306,res7: res307,res7desc: res307desc});


		//pregunta 31
		res311 = req.body.res31[0].res1;
		res312 = req.body.res31[0].res2;
		res313 = req.body.res31[0].res3;
		res313desc = req.body.res31[0].res3desc;
		poll.res31.push({res1: res311, res2: res312, res3: res313, res3desc: res313desc});

		poll.res32 = req.body.res32;
		poll.res33 = req.body.res33;
		poll.res34 = req.body.res34;

		//pregunta 35
		res351 = req.body.res35[0].res1;
		res352 = req.body.res35[0].res2;
		res353 = req.body.res35[0].res3;
		poll.res35.push({res1: res351, res2: res352, res3: res353});


		//pregunta 36
		res361 = req.body.res36[0].res1;
		res362 = req.body.res36[0].res2;
		res363 = req.body.res36[0].res3;
		poll.res36.push({res1: res361, res2: res362, res3: res363});


	//pregunta 37
		res371 = req.body.res37[0].res1;
		res372 = req.body.res37[0].res2;
		res373 = req.body.res37[0].res3;
		res374 = req.body.res37[0].res4;
		res375 = req.body.res37[0].res5;
		res376 = req.body.res37[0].res6;
		res376desc = req.body.res37[0].res6desc;
		poll.res37.push({res1: res371, res2: res372, res3: res373, res4: res374, res5: res375, res6: res376, res6desc: res376desc});

		//pregunta 38
		res381 = req.body.res38[0].res1;
		res382 = req.body.res38[0].res2;
		res383 = req.body.res38[0].res3;
		res384 = req.body.res38[0].res4;
		res384desc = req.body.res38[0].res4desc;
		poll.res38.push({res1: res381, res2: res382, res3: res383, res4: res384});

		//pregunta 39
		res391 = req.body.res39[0].res1;
		res392 = req.body.res39[0].res2;
		res393 = req.body.res39[0].res3;
		res394 = req.body.res39[0].res4;
		res395 = req.body.res39[0].res5;
		res396 = req.body.res39[0].res6;
		res397 = req.body.res39[0].res7;
		res398 = req.body.res39[0].res8;
		res399 = req.body.res39[0].res9;
		res3910 = req.body.res39[0].res10;
		res3911 = req.body.res39[0].res11;
		res3911desc = req.body.res39[0].res11desc;
		poll.res39.push({res1: res391, res2: res392, res3: res393, res4: res394, res5: res395, res6: res396
				, res7: res397, res8: res398, res9: res399, res10: res3910, res11: res3911, res11desc: res3911desc		});

		//pregunta 40

		res401 = req.body.res40[0].res1;
		res402 = req.body.res40[0].res2;
		res403 = req.body.res40[0].res3;
		res404 = req.body.res40[0].res4;
		res405 = req.body.res40[0].res5;
		res406 = req.body.res40[0].res6;
		res406desc = req.body.res40[0].res6desc;
		
		poll.res40.push({res1: res401, res2: res402, res3: res403, res4: res404, res5: res405, res6: res406, res6desc: res406desc});

		poll.res41 = req.body.res41;
		poll.res42 = req.body.res42;
		poll.res43 = req.body.res43;
		poll.res44 = req.body.res44;

		res451 = req.body.res45[0].res1;
		res452 = req.body.res45[0].res2;
		res453 = req.body.res45[0].res3;
		res454 = req.body.res45[0].res4;
		res455 = req.body.res45[0].res5;
		res456 = req.body.res45[0].res6;
		res457 = req.body.res45[0].res7;
		res458 = req.body.res45[0].res8;
		res459 = req.body.res45[0].res9;
		res4510 = req.body.res45[0].res10;
		res4510desc = req.body.res45[0].res10desc;
		
		poll.res45.push({res1: res451, res2: res452, res3: res453, res4: res454, res5: res455, res6: res456, res7: res457, res8: res458, res9: res459, res10: res4510, res10desc: res4510desc});


		res461 = req.body.res46[0].res1;
		res462 = req.body.res46[0].res2;
		res463 = req.body.res46[0].res3;
		res464 = req.body.res46[0].res4;
		res465 = req.body.res46[0].res5;
		res466 = req.body.res46[0].res6;
		res467 = req.body.res46[0].res7;
		res468 = req.body.res46[0].res8;
		res469 = req.body.res46[0].res9;
		res4610 = req.body.res46[0].res10;
		res4611 = req.body.res46[0].res11;
		res4611desc = req.body.res46[0].res11desc;
		
		poll.res46.push({res1: res461, res2: res462, res3: res463, res4: res464, res5: res465, res6: res466, res7: res467, res8: res468, res9: res469, res10: res4610, res11: res4611, res11desc: res4611desc});

		res471 = req.body.res47[0].res1;
		res472 = req.body.res47[0].res2;
		res473 = req.body.res47[0].res3;
		res474 = req.body.res47[0].res4;
		res475 = req.body.res47[0].res5;
		res476 = req.body.res47[0].res6;
		res477 = req.body.res47[0].res7;
		poll.res47.push({res1: res471, res2: res472, res3: res473, res4: res474, res5: res475, res6: res476, res7: res477});

		res481 = req.body.res48[0].res1;
		res482 = req.body.res48[0].res2;
		res483 = req.body.res48[0].res3;
		res484 = req.body.res48[0].res4;
		res485 = req.body.res48[0].res5;
		res486 = req.body.res48[0].res6;
		poll.res48.push({res1: res481, res2: res482, res3: res483, res4: res484, res5: res485, res6: res486});


		res491 = req.body.res49[0].res1;
		res492 = req.body.res49[0].res2;
		res493 = req.body.res49[0].res3;
		res494 = req.body.res49[0].res4;
		res495 = req.body.res49[0].res5;
		res496 = req.body.res49[0].res6;
		res497 = req.body.res49[0].res7;
		res498 = req.body.res49[0].res8;
		poll.res49.push({res1: res491, res2: res492, res3: res493, res4: res494, res5: res495, res6: res496, res7: res497, res8: res498});

		poll.res50 = req.body.res50;
		poll.res51 = req.body.res51;
		poll.res52 = req.body.res52;

		poll.res53 = req.body.res53;
		poll.res54 = req.body.res54;
		poll.res55 = req.body.res55;


		//pregunta 38
		res561 = req.body.res56[0].res1;
		res562 = req.body.res56[0].res2;
		res563 = req.body.res56[0].res3;
		poll.res56.push({res1: res561, res2: res562, res3: res563});


		poll.res57 = req.body.res57;
		poll.res57desc = req.body.res57desc;
		poll.res58 = req.body.res58;
		poll.res58desc = req.body.res58desc;


		res591 = req.body.res59[0].res1;
		res592 = req.body.res59[0].res2;
		res593 = req.body.res59[0].res3;
		res594 = req.body.res59[0].res4;
		res595 = req.body.res59[0].res5;
		res596 = req.body.res59[0].res6;
		res597 = req.body.res59[0].res7;
		res598 = req.body.res59[0].res8;
		res599 = req.body.res59[0].res9;
		res5910 = req.body.res59[0].res10;
		res5911 = req.body.res59[0].res11;
		poll.res59.push({res1: res591, res2: res592, res3: res593, res4: res594, res5: res595, res6: res596, res7: res597, res8: res598, res9: res599, res10: res5910, res11: res5911});


		poll.res60 = req.body.res60;
		poll.res61 = req.body.res61;
		poll.res62 = req.body.res62;
		poll.res62desc = req.body.res62desc;

		res631 = req.body.res63[0].res1;
		res632 = req.body.res63[0].res2;
		res633 = req.body.res63[0].res3;
		res634 = req.body.res63[0].res4;
		res635 = req.body.res63[0].res5;
		res635desc = req.body.res63[0].res5desc;
		
		poll.res63.push({res1: res631, res2: res632, res3: res633, res4: res634, res5: res635,  res5desc: res635desc});

		poll.res64 = req.body.res64;

	
		
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