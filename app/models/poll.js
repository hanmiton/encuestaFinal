var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var numSchema = new mongoose.Schema({ 
	dig1: { type: Number },
	dig2: { type: Number },
	dig3: { type: Number }
});

var dirSchema = new mongoose.Schema({ 
	dir1: { type: String },
	dir2: { type: String }

});

var perSchema = new mongoose.Schema({ 
	pnum: { type: Number },
	parentesco: { type: String },
	snum: { type: Number },
	sexo: { type: String },
	edad: { type: Number },
	etnum: { type: Number },
	etnia: { type: String },
	punum: { type: Number },
	pueblo: { type: String },
	inum: { type: Number },
	idioma: { type: String },
	lnum: { type: Number },
	lugar: { type: String },
	nnum: { type: Number },
	nivel: { type: String }
});

// pregunta 12 14 16 18
var ressubSchema = new mongoose.Schema({ 
	res1: { type: String },
	res2: { type: String },
	res3: { type: String }
});

//pregunta 21
var respatriSchema = new mongoose.Schema({ 
	patri: { type: String },
	per: { type: String }
});

// pregunta 22
var ressub22Schema = new mongoose.Schema({ 
	res1: { type: Boolean },
	res2: { type: Boolean },
	res3: { type: Boolean },
	res4: { type: Boolean },
	res5: { type: Boolean },
	res6: { type: Boolean },
	res7: { type: Boolean },
	otro: { type: String }
});

// pregunta 23
var ressub23Schema = new mongoose.Schema({ 
	res1: { type: Number },
	res2: { type: Number },
	res3: { type: Number },
	res4: { type: Number },
	res5: { type: Number },
	res6: { type: Number },
	otro: { type: Number }
});

// pregunta 26
var ressub26Schema = new mongoose.Schema({ 
	res1: { type: Boolean },
	res2: { type: Boolean },
	res3: { type: Boolean },
	res4: { type: Boolean }
});

// pregunta 27
var ressub27Schema = new mongoose.Schema({ 
	res1: { type: Number },
	res2: { type: Number },
	res3: { type: Number },
	res4: { type: Number }
});




// Document schema for polls
var PollSchema = new mongoose.Schema({
	parroquia: { type: String },
	zona: [numSchema],
	sector: [numSchema],
	comunidad: { type: String },
	direccion: [dirSchema],
	personas : [perSchema],
	res9: Boolean,
	res10: Boolean,
	res11: Boolean,
	res12: [ressubSchema],
	res13: Boolean,
	res14: [ressubSchema],
	res15: Boolean,
	res16: [ressubSchema],
	res17: Boolean,
	res18: [ressubSchema],
	res19: Boolean,
	res20: [ressubSchema],
	res21: [respatriSchema],
	res22: [ressub22Schema],
	res23: [ressub23Schema],
	res24: String,
	res25: String,
	res26: [ressub22Schema],
	res27: [ressub23Schema],
	res28: String,
	res29: String,
	final: { type: String }
});

module.exports = mongoose.model('Poll', PollSchema)