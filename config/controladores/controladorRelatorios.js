var modeloVendasAvistaSchema = require('../modelVendasAvista.js');
var moment = require('moment');
var modeloRecebidosShema = require('../modelRecebidos.js');

//shemas
var ShemaVendasAvista = modeloVendasAvistaSchema.model('VendasAvista');
var ShemaRecebidos = modeloRecebidosShema.model('Recebido');


module.exports = function () {

	var controller = {};

	controller.listarVendasDoDia = function (req, res) {


		var valoresMomento = moment().format("DD-MM-YYYY");
		var _idSistema = req.params.id;
		console.log("sistema vendas" + _idSistema)
		//pega as vendas do dia atual, usando a biblioteca moment, e retorna as vendas do dia,
		//populando dos produtos e os clientes
		ShemaVendasAvista.find({ sistema: _idSistema })
			.where('data').eq(valoresMomento)
			.populate({ path: 'cliente' })
			.populate({ path: 'produtos' })
			.exec(function (err, vendas) {
				if (err) return console.error(err);
				return res.json(vendas);
			})


	}

	controller.listarRecebidosDoDia = function (req, res) {

		var valoresMomento = moment().format("DD-MM-YYYY");
		var _idSistema = req.params.id;

		//pega as vendas do dia atual, usando a biblioteca moment, e retorna as vendas do dia,
		//populando dos produtos e os clientes

		ShemaRecebidos.find({ sistema: _idSistema })
			.where('data').eq(valoresMomento)
			.populate({ path: 'cliente' })
			.exec(function (err, recebidos) {
				if (err) return console.error(err);
				return res.json(recebidos);
			})


	}

	controller.listarVendasPelaData = function (req, res) {
		var valorData = req.query.data;
		var _idSistema = req.query.idSistema;

		var valoresMomento = moment().format(valorData);
		ShemaVendasAvista.find({sistema: _idSistema })
			.where('data').eq(valorData)
			.populate({path: 'cliente'})
			.populate({path: 'produtos'})
			.exec(function (err, vendas) {
				if (err) return console.error(err);
				return res.json(vendas);
			})

		//lista as vendas pela data vinda do front end
		/*
		ShemaVendasAvista.find({ "data": { "$eq": valoresMomento } },
			function (err, vendas) {
				if (err) return console.error(err);
				return res.json(vendas);
			});
			ShemaRecebidos.find({ "data": { "$eq": valoresMomento } },
			function (err, recebidos) {
				if (err) return console.error(err);
				return res.json(recebidos);
			});

*/
	}
	controller.listarRecebidosPelaData = function (req, res) {
		
		var valorData = req.query.data;
		var _idSistema = req.query.idSistema;

	
		var valoresMomento = moment().format(valorData);
		ShemaRecebidos.find({sistema: _idSistema })
			.where('data').eq(valorData)
			.populate({path: 'cliente'})
			.exec(function (err, recebidos) {
				if (err) return console.error(err);
				return res.json(recebidos);
			})
		//lista as vendas pela data vinda do front end
		
	}
	controller.listarVendas = function (req, res) {
		ShemaVendasAvista.find(function (err, vendas) {
			if (err) return console.error(err);
			return res.json(vendas);
		});

	}

	controller.deleteVenda = function (req, res) {

		var _idVenda = req.params.id;

		//função para remover o cliente pelo id
		ShemaVendasAvista.findByIdAndRemove(_idVenda, function (err, venda) {
			if (err) {
				console.log(err);
				return res.json(err);
			} else {
				return res.json(venda);
			}
		})

	}


	//função logar

	return controller;
}
//fecha os dados


/*
		ShemaVendasAvista.where('data').eq(valoresMomento)
			.where({ sistema: _idSistema }).populate({ path: 'cliente' }).populate({ path: 'produtos' })
			.exec(function (err, vendas) {
				if (err) return console.error(err);
				return res.json(vendas);
			})

		

			
			ShemaVendasAvista.find({"data": {"$eq": valoresMomento}
	}).populate({path: 'produtos'}).populate({path: 'cliente'}).exec(function(err,vendas){
			if (err)return console.error(err);
			
			return res.json(vendas);
		})
		
		ShemaVendasAvista.find({ "data" : { "$eq" : valoresMomento } },
		  function(err, vendas) {
			if (err)return console.error(err);
			console.log(vendas);
			return res.json(vendas);
		});
		*/
			/*
ShemaRecebidos.find({sistema: _idSistema}).populate({path: 'cliente'}).exec(function(err,recebidos){
			if (err)return console.error(err);
		
			return res.json(recebidos);
		})

		
		//pega as vendas do dia atual, usanbo a biblioteca moment
		
		*/