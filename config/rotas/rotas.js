var controller = require('../controladores/controladorCliente.js')();
var controllerUsuario = require('../controladores/controladorUsuario.js')();
var controllerProduto = require('../controladores/controladorProduto.js')();
var controllerVendasAvista = require('../controladores/controladorVendasAvista.js')();
var controllerRelatorios = require('../controladores/controladorRelatorios.js')();
var controllerRecebidos = require('../controladores/controladorRecebidos.js')();
var controllerSistema = require('../controladores/controladorSistema.js')();

module.exports = function(app) {
	//app.get('/index', controller.index);
	app.get('/api/clientes/:id', controller.listarClientes);
	app.get('/api/cliente/:id', controller.buscarCliente);
	app.post('/api/clientes', controller.adicionarCliente);
	app.delete('/api/clientes/:id', controller.deleteCliente);
	app.put('/api/clientes', controller.atualizarCliente);

	// rotas login
	app.post('/api/login', controllerUsuario.logar);
	// usuario
	app.get('/api/usuarios', controllerUsuario.listarUsuarios);
	app.get('/api/usuarios/:id', controllerUsuario.buscarUsuario);
	app.post('/api/usuarios', controllerUsuario.adicionarUsuario);
	app.delete('/api/usuarios/:id', controllerUsuario.deleteUsuario);

	//produtos
	app.get('/api/produtos/:id', controllerProduto.listarProdutos);
	app.post('/api/produtos', controllerProduto.adicionarProduto);
	app.delete('/api/produtos/:id', controllerProduto.deleteProduto);
	app.get('/api/produto/:id', controllerProduto.buscarProduto);
	//esse atualizar produto serve para atualizar o estoque quando a venda é feita.
	app.put('/api/produtos', controllerProduto.atualizarEstoque);

	//vendas
	app.get('/api/vendas/:id', controllerVendasAvista.listarVendas);
	app.get('/api/vendas/cliente/:id', controllerVendasAvista.listarVendasClienteId);
	app.get('/api/vendas/:id', controllerVendasAvista.buscarVendaId);
	app.post('/api/vendas', controllerVendasAvista.adicionarVendas);

	//relatorios
	app.get('/api/relatorios/listarVendasDoDia/:id', controllerRelatorios.listarVendasDoDia);
	app.get('/api/relatorios/listarVendas', controllerRelatorios.listarVendas);	
	app.delete('/api/relatorios/listarVendas/:id', controllerRelatorios.deleteVenda);
	app.get('/api/relatorios/listarRecebidosDoDia/:id', controllerRelatorios.listarRecebidosDoDia);	
	app.get('/api/relatorios/listarVendasPelaData/dados', controllerRelatorios.listarVendasPelaData);
	app.get('/api/relatorios/listarRecebidosPelaData/dados', controllerRelatorios.listarRecebidosPelaData);
	//recebidos
	app.post('/api/recebidos', controllerRecebidos.adicionarRecebidos);
	app.get('/api/recebidos/clienteId/:id', controllerRecebidos.listarRecebidosClienteId);
	app.get('/api/recebidos/:id', controllerRecebidos.listarRecebidos);
	app.delete('/api/recebidos/:id', controllerRecebidos.deleteRecebido);
	//sistema
	app.get('/api/sistema', controllerSistema.listarSistema);
	app.post('/api/sistema', controllerSistema.adicionarSistema);
	app.delete('/api/sistema/:id', controllerSistema.deleteSistema);
	app.get('/api/sistema/:id', controllerSistema.buscarSistema);
	app.post('/api/sistema/usuario', controllerSistema.atualizarSistemaUsuarios);
	

			  
};
