webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./cruds/cruds.module": [
		"../../../../../src/app/cruds/cruds.module.ts"
	],
	"./recebidos/recebidos.module": [
		"../../../../../src/app/recebidos/recebidos.module.ts"
	],
	"./relatorios/relatorios.module": [
		"../../../../../src/app/relatorios/relatorios.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--><div class=\"container\">\n\t\t\t<div class=\"jumbotron\">\n\t\t\t\t\t<button class=\"btn btn-lg btn-primary btn-block\" (click)=\"logar()\" \n\t\t\t\t\t type=\"Submit\">Login</button> \n\n\t\t\t</div>\n\t\t\t<ul class=\"nav nav-pills nav-justified\">\n\t\t\n\t\t\t\t<li role=\"presentation\" routerLinkActive=\"active\">\n\t\t\t\t\t<a routerLink=\"/vendas-module\" routerLinkActive=\"active\">Vendas</a>\n\t\t\t\t</li>\n\t\t\n\t\t\t\t<li role=\"presentation\" routerLinkActive=\"active\">\n\t\t\t\t\t<a routerLink=\"/recebidos-module\" routerLinkActive=\"active\">Recebidos</a>\n\t\t\t\t</li>\n\t\t\t\n\t\t\t\n\t\t\t\t<li  role=\"presentation\" routerLinkActive=\"active\"> \n\t\t\t\t\t<a routerLink=\"/cruds-nav-module\" routerLinkActive=\"active\">CRUDS</a>\n\t\t\t\t</li>\n\t\t\t\n\t\t\n\t\t\t\t<li  role=\"presentation\" routerLinkActive=\"active\">\n\t\t\t\t\t<a routerLink=\"/relatorios-module\" routerLinkActive=\"active\">Relatórios</a>\n\t\t\t\t</li>\n\t\t\t\n\t\t\n\t\t\t\t<li  role=\"presentation\" routerLinkActive=\"active\">\n\t\t\t\t\t<a routerLink=\"/login-module\" routerLinkActive=\"active\">Login</a>\n\t\t\t\t</li>\n\t\t\t\n\t\t\t\t\n\t\t\t</ul>\n\t\t<br>\n\n\t\t{{usuario.tipo}}\n<-->\n\t\t\t<router-outlet></router-outlet>\n\t\t\t\n\n\t\t\t\n\n\t\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
// serviços
var login_service_1 = __webpack_require__("../../../../../src/app/service/login.service.ts");
//model
var usuario_model_1 = __webpack_require__("../../../../../src/app/model/usuario.model.ts");
var AppComponent = (function () {
    //pega o usuario logado da paga de login
    //usuario  = new UsuarioModel();
    function AppComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.usuarioPrepararLogar = new usuario_model_1.UsuarioModel(); // preparar usuario para logar
        this.setMessage();
    }
    AppComponent.prototype.setMessage = function () {
        this.menssagem = 'Logando ' + (this.loginService.estadoLogin ? 'Dentro' : 'Saido');
    };
    AppComponent.prototype.entrar = function () {
        var _this = this;
        this.menssagem = 'Carregando o a entrada';
        this.loginService.logarUsuario(this.usuarioPrepararLogar).subscribe(function (usuario) { return _this.usuario = usuario; }, function (err) { return console.log(err); }, function () { return _this.testarLogin(); });
        /*   */
    };
    AppComponent.prototype.testarLogin = function () {
        var _this = this;
        console.log(this.usuario.estado);
        if (this.usuario.estado) {
            this.loginService.login().subscribe(function () {
                _this.setMessage();
                if (_this.loginService.estadoLogin) {
                    // Get the redirect URL from our auth service
                    // If no redirect has been set, use the default
                    var redirect = _this.loginService.redirectUrl ? _this.loginService.redirectUrl : '/cruds-nav-module';
                    console.log(_this.loginService.estadoLogin);
                    // Redirect the user
                    _this.router.navigate([redirect]);
                }
            });
        }
        else {
            this.menssagemLogar = "usuario ou senha invalidos";
        }
    };
    AppComponent.prototype.sair = function () {
        this.loginService.logout();
        this.setMessage();
    };
    AppComponent.prototype.logar = function () {
        this.router.navigateByUrl('/cruds-nav-module');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
//componentes
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var login_module_component_1 = __webpack_require__("../../../../../src/app/login-module/login.module.component.ts");
var login_componente_1 = __webpack_require__("../../../../../src/app/login/login.componente.ts");
//Modulo de Rotas
var app_rotas_module_1 = __webpack_require__("../../../../../src/app/app.rotas.module.ts");
var login_module_router_1 = __webpack_require__("../../../../../src/app/login-module/login.module.router.ts");
var login_router_1 = __webpack_require__("../../../../../src/app/login/login.router.ts");
//Modulos
var cruds_module_1 = __webpack_require__("../../../../../src/app/cruds/cruds.module.ts"); //crud
var relatorios_module_1 = __webpack_require__("../../../../../src/app/relatorios/relatorios.module.ts");
var recebidos_module_1 = __webpack_require__("../../../../../src/app/recebidos/recebidos.module.ts");
var menu_principal_module_1 = __webpack_require__("../../../../../src/app/menu-principal/menu-principal.module.ts");
//Serviços
var cliente_service_1 = __webpack_require__("../../../../../src/app/service/cliente.service.ts");
var usuario_service_1 = __webpack_require__("../../../../../src/app/service/usuario.service.ts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            login_module_router_1.LoginModuleRouter,
            app_rotas_module_1.AppRotasModule,
            cruds_module_1.CrudsModule,
            relatorios_module_1.RelatoriosModule,
            recebidos_module_1.RecebidosModule,
            menu_principal_module_1.MenuPrincipalModule,
            login_router_1.LoginRouter
        ],
        declarations: [
            app_component_1.AppComponent,
            login_module_component_1.LoginModuleComponent,
            login_componente_1.LoginComponente
        ],
        providers: [cliente_service_1.ClienteService, usuario_service_1.UsuarioService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.rotas.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var can_deactivate_guard_service_1 = __webpack_require__("../../../../../src/app/service/can.deactivate.guard.service.ts");
var routes = [
    //navs
    //{
    // path: 'vendas-module', 
    // loadChildren: './vendas/vendas.module#VendasModule',
    //},
    {
        path: 'recebidos-module',
        loadChildren: './recebidos/recebidos.module#RecebidosModule',
    },
    {
        path: 'cruds-nav-module',
        loadChildren: './cruds/cruds.module#CrudsModule',
    },
    {
        path: 'relatorios-module',
        loadChildren: './relatorios/relatorios.module#RelatoriosModule',
    }
];
var AppRotasModule = (function () {
    function AppRotasModule() {
    }
    return AppRotasModule;
}());
AppRotasModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes, { enableTracing: true })],
        exports: [router_1.RouterModule],
        providers: [can_deactivate_guard_service_1.CanDeactivateGuard],
    })
], AppRotasModule);
exports.AppRotasModule = AppRotasModule;
//# sourceMappingURL=app.rotas.module.js.map

/***/ }),

/***/ "../../../../../src/app/cruds/campo.erro.componente.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"errorMessage !== null\">\n\n    <div class=\"alert alert-warning\" role=\"alert\">{{errorMessage}}</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/cruds/campo.erro.componente.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var validator_service_1 = __webpack_require__("../../../../../src/app/service/validator.service.ts");
var CampoErroComponente = (function () {
    function CampoErroComponente() {
    }
    Object.defineProperty(CampoErroComponente.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return validator_service_1.ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    return CampoErroComponente;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof forms_1.FormControl !== "undefined" && forms_1.FormControl) === "function" && _a || Object)
], CampoErroComponente.prototype, "control", void 0);
CampoErroComponente = __decorate([
    core_1.Component({
        selector: 'campo-erro-componente',
        template: __webpack_require__("../../../../../src/app/cruds/campo.erro.componente.html"),
    }),
    __metadata("design:paramtypes", [])
], CampoErroComponente);
exports.CampoErroComponente = CampoErroComponente;
var _a;
//# sourceMappingURL=campo.erro.componente.js.map

/***/ }),

/***/ "../../../../../src/app/cruds/clientes/clientes.cadastrar.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\">\n    <p></p>\n\t\n\t    <form class=\"form-horizontal\" [formGroup]=\"clienteForm\">\n\t\t    <div class=\"form-group\">\n\t\t\t\t<input type=\"hidden\" class=\"form-control\" formControlName=\"_id\"/>\n\t\t\t    <label for=\"inputCadastro\" class=\"col-sm-1\">Nome</label>\n\t\t\t\t\t<div class=\"col-sm-7\" [ngClass]=\"aplicaCssErro('nome')\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"nome\" required  placeholder=\"Nome\" />\n\t\t\t\t\t\t<campo-erro-componente [control]=\"clienteForm.controls.nome\"></campo-erro-componente>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\" [ngClass]=\"aplicaCssErro('cpf')\">\n\t\t\t\t\t\t<input [textMask]=\"{mask: maskCpf}\" formControlName=\"cpf\" required placeholder=\"Cpf\" class=\"form-control\" type=\"text\"/>\n\t\t\t\t\t\t<campo-erro-componente [control]=\"clienteForm.controls.cpf\"></campo-erro-componente>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"inputCadastro\" class=\"col-sm-1\">Endereço</label>\n    \t\t\t\t<div class=\"col-sm-6\" [ngClass]=\"aplicaCssErro('rua')\" >\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"rua\" required id=\"form-rua\" placeholder=\"Rua\" />\n\t\t\t\t\t\t<campo-erro-componente [control]=\"clienteForm.controls.rua\"></campo-erro-componente>\n\t\t\t\t\t</div>\n\t\t\t        <div class=\"col-sm-3\" [ngClass]=\"aplicaCssErro('bairro')\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"bairro\" required id=\"form-bairro\" placeholder=\"Bairro\" />\n\t\t\t\t\t\t<campo-erro-componente [control]=\"clienteForm.controls.bairro\"></campo-erro-componente>\n\t\t\t        </div>\n\t\t\t        <div class=\"col-sm-2\" [ngClass]=\"aplicaCssErro('numero')\">\n\t\t\t\t\t\t<input type=\"text\" [textMask]=\"{mask: maskNumero}\" class=\"form-control\"formControlName=\"numero\" required id=\"form-numero\" placeholder=\"Numero\" />\n\t\t\t\t\t\t<campo-erro-componente [control]=\"clienteForm.controls.numero\"></campo-erro-componente>\n\n\t\t\t        </div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"inputCadastro\" class=\"col-sm-1\">Cidade e Estado</label>\n\t\t\t\t\t <div class=\"col-sm-6\" [ngClass]=\"aplicaCssErro('cidade')\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"cidade\" required   placeholder=\"Cidade\" />\n\t\t\t\t\t\t<campo-erro-componente [control]=\"clienteForm.controls.cidade\"></campo-erro-componente>\n\t\t\t        </div>\n\t\t\t\t\t<div class=\"col-sm-3\" [ngClass]=\"aplicaCssErro('estado')\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"estado\"  required   placeholder=\"Estado\" />\n\t\t\t\t\t\t<campo-erro-componente [control]=\"clienteForm.controls.estado\"></campo-erro-componente>\n\t\t\t        </div>\n\t\t\t\t\t <div class=\"col-sm-2\" [ngClass]=\"aplicaCssErro('cep')\">\n\t\t\t\t\t\t<input type=\"text\" [textMask]=\"{mask: maskCep}\" formControlName=\"cep\" required  class=\"form-control\"   placeholder=\"Cep\" />\n\t\t\t\t\t\t<campo-erro-componente [control]=\"clienteForm.controls.cep\"></campo-erro-componente>\n\t\t\t        </div>\n\t\t\t</div>\n\t\t\t\t\t\n\t\t   \n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"inputCadastro\" class=\"col-sm-1\">Contato</label>\n\t\t\t\t\t<div class=\"col-sm-4\" >\n\t\t\t\t\t\t<input type=\"text\"  class=\"form-control\" formControlName=\"email\"  placeholder=\"Email\" />\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\" >\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [textMask]=\"{mask: maskTelefoneFixo}\"  formControlName=\"telefoneFixo\" placeholder=\"Telefone Fixo\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\" [ngClass]=\"aplicaCssErro('telefoneCelular')\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [textMask]=\"{mask: maskTelefoneCelular}\"  formControlName=\"telefoneCelular\" required   placeholder=\"Telefone Celular\" />\n\t\t\t\t\t\t<campo-erro-componente [control]=\"clienteForm.controls.telefoneCelular\"></campo-erro-componente>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"comment\">Informações adicionais do cliente:</label>\n      \t\t\t\t<textarea class=\"form-control\"formControlName=\"informacoes\" rows=\"4\" id=\"comentario\"></textarea>\n\t\t\t\t\t\t\t\n\t\t\t</div>\n\t\t\t\t<p class=\"text-right\"> \n\t\t\t\t<button type=\"button\" class=\"btn btn-default \" (click)=\"onSubmit()\">Salvar</button>\n\t\t\t\t<button type=\"reset\" class=\"btn btn-default\">Limpar</button>\n\t\t\t\t\n\t\t\t\t</p>\n\t\t</form>\n\t\t\n\n\n\n\t\t<p>Valores: {{ clienteForm.value | json }} Cliente editado: {{clienteForm.controls.nome.value}}</p>\n\t\t<p>Validation status: {{ clienteForm.status }}</p>\n\n\t\t\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/cruds/clientes/clientes.cadastrar.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
//cliente serviço
var cliente_service_1 = __webpack_require__("../../../../../src/app/service/cliente.service.ts");
var validator_service_1 = __webpack_require__("../../../../../src/app/service/validator.service.ts");
var mask_services_1 = __webpack_require__("../../../../../src/app/service/mask.services.ts");
//modelo
var cliente_model_1 = __webpack_require__("../../../../../src/app/model/cliente.model.ts");
var login_service_1 = __webpack_require__("../../../../../src/app/service/login.service.ts");
var ClientesCadastrar = (function () {
    function ClientesCadastrar(clienteService, fb, maskServices, loginService) {
        this.clienteService = clienteService;
        this.fb = fb;
        this.maskServices = maskServices;
        this.loginService = loginService;
        this.maskCpf = '';
        this.maskCep = '';
        this.maskNumero = '';
        this.maskTelefoneFixo = '';
        this.maskTelefoneCelular = '';
        this.cliente = new cliente_model_1.ClienteModel(); // cliente para um novo cadastro
        this.maskCpf = this.maskServices.maskCpf();
        this.maskCep = this.maskServices.maskCep();
        this.maskNumero = this.maskServices.maskNumero();
        this.maskTelefoneFixo = this.maskServices.maskTelefoneFixo();
        this.maskTelefoneCelular = this.maskServices.maskTelefoneCelular();
        this.createFormBuild();
    }
    ClientesCadastrar.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.getUsuarioLogin().subscribe(function (usuario) { return _this.usuario = usuario; });
    };
    ClientesCadastrar.prototype.createFormBuild = function () {
        this.clienteForm = this.fb.group({
            _id: '',
            nome: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(30)]],
            cpf: ['', [forms_1.Validators.required, validator_service_1.ValidationService.cpfValidator]],
            rua: ['', forms_1.Validators.required],
            bairro: ['', forms_1.Validators.required],
            numero: ['', forms_1.Validators.required],
            cidade: ['', forms_1.Validators.required],
            estado: ['', forms_1.Validators.required],
            cep: ['', forms_1.Validators.required],
            email: [''],
            telefoneFixo: [''],
            telefoneCelular: ['', forms_1.Validators.required],
            informacoes: ['']
        });
    };
    ;
    //prepara valores para serem cadastrados ;
    ClientesCadastrar.prototype.prepararValores = function () {
        var valores = this.clienteForm.value;
        var cliente = new cliente_model_1.ClienteModel();
        //  this.cliente.nome = this.clienteForm.controls.nome.value;    
        //  this.cliente.cpf = this.clienteForm.controls.cpf.value;
        cliente._id = this.clienteForm.controls._id.value;
        cliente.nome = this.clienteForm.controls.nome.value;
        cliente.cpf = this.clienteForm.controls.cpf.value;
        cliente.rua = this.clienteForm.controls.rua.value;
        cliente.bairro = this.clienteForm.controls.bairro.value;
        cliente.numero = this.clienteForm.controls.numero.value;
        cliente.cidade = this.clienteForm.controls.cidade.value;
        cliente.estado = this.clienteForm.controls.estado.value;
        cliente.cep = this.clienteForm.controls.cep.value;
        cliente.email = this.clienteForm.controls.email.value;
        cliente.telefoneFixo = this.clienteForm.controls.telefoneFixo.value;
        cliente.telefoneCelular = this.clienteForm.controls.telefoneCelular.value;
        cliente.informacoes = this.clienteForm.controls.informacoes.value;
        //o cliente quando é cadastrado cria um debito de 0 reais
        cliente.debitoDoCliente = 0;
        //pega o usuario e do sistema e cadastra do sistema que ele pertense aos seus clientes
        cliente.sistema = this.usuario.sistema;
        return cliente;
    };
    ;
    //submete os valores para o banco de dados depois de preparados
    ClientesCadastrar.prototype.onSubmit = function () {
        var cliente = this.prepararValores();
        console.log(cliente);
        //buscar o cliente no banco de dados, se o id do cliente for igual ao id do cliente do editar, então editar, caso não cadastrar.
        this.clienteService.adicionarCliente(cliente).subscribe();
    };
    //imprementa ngOnChages para os dados vindos do "editar"
    ClientesCadastrar.prototype.ngOnChanges = function () {
        this.clienteForm.reset({ _id: this.clienteEditar._id,
            nome: this.clienteEditar.nome,
            cpf: this.clienteEditar.cpf,
            rua: this.clienteEditar.rua,
            bairro: this.clienteEditar.bairro,
            numero: this.clienteEditar.numero,
            cidade: this.clienteEditar.cidade,
            estado: this.clienteEditar.estado,
            cep: this.clienteEditar.cep,
            email: this.clienteEditar.email,
            telefoneFixo: this.clienteEditar.telefoneFixo,
            telefoneCelular: this.clienteEditar.telefoneCelular,
            informacoes: this.clienteEditar.informacoes
        });
    };
    ClientesCadastrar.prototype.verificaCampos = function (campo) {
        if (!this.clienteForm.get(campo).valid && (this.clienteForm.get(campo).touched ||
            this.clienteForm.get(campo).dirty)) {
            return true;
        }
        else {
            return false;
        }
    };
    ClientesCadastrar.prototype.aplicaCssErro = function (campo) {
        return {
            'has-error': this.verificaCampos(campo),
        };
    };
    return ClientesCadastrar;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof cliente_model_1.ClienteModel !== "undefined" && cliente_model_1.ClienteModel) === "function" && _a || Object)
], ClientesCadastrar.prototype, "clienteEditar", void 0);
ClientesCadastrar = __decorate([
    core_1.Component({
        selector: 'cliente-cadastrar',
        template: __webpack_require__("../../../../../src/app/cruds/clientes/clientes.cadastrar.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof cliente_service_1.ClienteService !== "undefined" && cliente_service_1.ClienteService) === "function" && _b || Object, typeof (_c = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _c || Object, typeof (_d = typeof mask_services_1.MaskServices !== "undefined" && mask_services_1.MaskServices) === "function" && _d || Object, typeof (_e = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _e || Object])
], ClientesCadastrar);
exports.ClientesCadastrar = ClientesCadastrar;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=clientes.cadastrar.js.map

/***/ }),

/***/ "../../../../../src/app/cruds/clientes/clientes.listar.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"col-md-10\">\n    \t<div class=\"responsive\">\n\t\t\t<table class=\"table table-striped\">\n\t\t\t\t<th>COD</th>\n\t\t\t\t<th>NOME</th>\n\t\t\t\t<th>CPF</th>\n\t\t\t\t<th>EDIÇÃO</th>\n\t\t\t\t<th>procurar: <input type=\"text\" (keyup)=\"onKey($event)\"/>{{values}}</th>\n\t\t\t\t\t<tr *ngFor=\"let cliente of clientes | filter: values\" class=\"success\">\n\t\t\t\t\t\t<td>{{cliente._id}}</td>\n\t\t\t\t\t\t<td>{{cliente.nome}}</td>\n\t\t\t\t\t\t<td>{{cliente.cpf}}</td>\n\t\t\t\t\t\t<td>{{cliente.cpf}}</td>\n\t\t\t\t\t\t<td><a class=\"btn btn-warning\" (click)=\"editar(cliente)\" >Editar</a></td>\n\t\t\t\t\t\t<td><a class=\"btn btn-danger\" (click)=\"delete(cliente)\">Excluir</a></td>\n\t\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>\n\t\t<div *ngIf=\"clienteParaEditar\">\n  \t\t\t<hr>\n  \t\t\t\t<h4>Editar Cliente: {{clienteParaEditar.nome}} </h4>\n  \t\t\t\t<h4>Editar Cliente: {{clienteParaEditar._id}} </h4>\t\n  \t\t\t\t<cliente-cadastrar [clienteEditar]=\"clienteParaEditar\"></cliente-cadastrar>\n\t\t</div>\n\n\t</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/cruds/clientes/clientes.listar.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
//serviço
var cliente_service_1 = __webpack_require__("../../../../../src/app/service/cliente.service.ts");
var login_service_1 = __webpack_require__("../../../../../src/app/service/login.service.ts");
//rotas
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var ClientesListar = (function () {
    function ClientesListar(clienteService, router, loginService) {
        this.clienteService = clienteService;
        this.router = router;
        this.loginService = loginService;
    }
    //name para ng model para filtro
    ClientesListar.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.getUsuarioLogin().subscribe(function (usuario) { return _this.usuario = usuario; });
        this.clienteService.getClientes(this.usuario.sistema._id).subscribe(function (clientes) { return _this.clientes = clientes.slice(1, 10); }, function (error) { return _this.errorMessage = error; });
        // clientes que vem do bd já vão estar nessa lista.
    };
    ClientesListar.prototype.delete = function (cliente) {
        var _this = this;
        console.log(cliente._id);
        this.clienteService.deleteCliente(cliente._id).subscribe(function () { _this.clientes = _this.clientes.filter(function (c) { return c !== cliente; }); });
        //     this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
    };
    ClientesListar.prototype.editar = function (cliente) {
        this.clienteParaEditar = cliente;
    };
    ClientesListar.prototype.onKey = function (event) {
        this.values = event.target.value;
    };
    return ClientesListar;
}());
ClientesListar = __decorate([
    core_1.Component({
        selector: '',
        template: __webpack_require__("../../../../../src/app/cruds/clientes/clientes.listar.html"),
    })
    //<hero-detail [hero]="selectedHero"></hero-detail>
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof cliente_service_1.ClienteService !== "undefined" && cliente_service_1.ClienteService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _c || Object])
], ClientesListar);
exports.ClientesListar = ClientesListar;
var _a, _b, _c;
//# sourceMappingURL=clientes.listar.js.map

/***/ }),

/***/ "../../../../../src/app/cruds/crud.filter.cliente.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var CrudFilterClientePipe = (function () {
    function CrudFilterClientePipe() {
    }
    CrudFilterClientePipe.prototype.transform = function (clientes, args) {
        if (!clientes || !args) {
            return clientes;
        }
        return clientes.filter(function (cliente) { return cliente.nome.indexOf(args) !== -1; });
    };
    return CrudFilterClientePipe;
}());
CrudFilterClientePipe = __decorate([
    core_1.Pipe({
        name: 'filter',
        pure: false
    })
], CrudFilterClientePipe);
exports.CrudFilterClientePipe = CrudFilterClientePipe;
//transform(items: any[], filter: string) {
//  if (!items || !filter) {
//       return items;
// }
// return items.filter(item => item.name.indexOf(filter) !== -1); 
//# sourceMappingURL=crud.filter.cliente.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/cruds/crud.nav.componente.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var CrudNavComponente = (function () {
    function CrudNavComponente() {
    }
    return CrudNavComponente;
}());
CrudNavComponente = __decorate([
    core_1.Component({
        template: "\n   <div class=\"row\">\n\t    <div class=\"col-md-2\">\n\t\t    <ul class=\"nav nav-pills nav-stacked\">\n\t\t\t    <li role=\"presentation\" routerLinkActive=\"active\">\n\t\t\t\t\t<a routerLink=\"clientes-cadastrar\" >CLIENTE</a>\n\t\t\t\t</li>\n\t\t\t\t<li role=\"presentation\"routerLinkActive=\"active\">\n\t\t\t\t\t<a routerLink=\"produtos-cadastrar\" >PRODUTO</a>\n\t\t\t\t</li>\n\t\t\t\t<li role=\"presentation\"routerLinkActive=\"active\">\n\t\t\t\t\t<a routerLink=\"sistema-cadastrar\" >SISTEMA</a>\n\t\t\t\t</li>\n\t\t\t\t<li role=\"presentation\"routerLinkActive=\"active\">\n\t\t\t\t\t<a routerLink=\"usuario-cadastrar\" >USUARIO</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n    </div>\n   <router-outlet></router-outlet>\n  "
    })
], CrudNavComponente);
exports.CrudNavComponente = CrudNavComponente;
// 
//# sourceMappingURL=crud.nav.componente.js.map

/***/ }),

/***/ "../../../../../src/app/cruds/crud.nav.componente2.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var CrudNavComponente2 = (function () {
    function CrudNavComponente2() {
    }
    return CrudNavComponente2;
}());
CrudNavComponente2 = __decorate([
    core_1.Component({
        template: "\n   <div class=\"row\">\n\t    <div class=\"col-md-2\">\n\t\t    <ul class=\"nav nav-pills nav-stacked\">\n\t\t\t    <li role=\"presentation\" routerLinkActive=\"active\">\n\t\t\t\t\t<a routerLink=\"clientes-listar\">CLIENTE</a>\n\t\t\t\t</li>\n\t\t\t\t<li role=\"presentation\" routerLinkActive=\"active\">\n\t\t\t\t\t<a routerLink=\"produtos-listar\">PRODUTO</a>\n\t\t\t\t</li>\n\t\t\t\t<li role=\"presentation\" routerLinkActive=\"active\">\n\t\t\t\t\t<a routerLink=\"sistema-listar\">SISTEMA</a>\n\t\t\t\t</li>\n\t\t\t\t<li role=\"presentation\" routerLinkActive=\"active\">\n\t\t\t\t\t<a routerLink=\"usuario-listar\">USUARIO</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n    </div>\n   <router-outlet></router-outlet>\n  "
    })
], CrudNavComponente2);
exports.CrudNavComponente2 = CrudNavComponente2;
// 
//# sourceMappingURL=crud.nav.componente2.js.map

/***/ }),

/***/ "../../../../../src/app/cruds/crud.nav.titulo.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var CrudNavTitulo = (function () {
    function CrudNavTitulo() {
    }
    return CrudNavTitulo;
}());
CrudNavTitulo = __decorate([
    core_1.Component({
        template: "\n\n\t\n\t\n    <ul class=\"nav nav-tabs nav-justified\">\n\t    <li role=\"presentation\" routerLinkActive=\"active\">\n\t\t    <a routerLink=\"crud-nav-cadastrar\">CADASTRAR</a>\n\t\t</li>\n\t\t<li role=\"presentation\" routerLinkActive=\"active\">\n\t\t\t<a routerLink=\"crud-nav-listar\" >LISTAR</a>\n\t\t</li>\n\t</ul>\n\t<p></p>\n    <router-outlet></router-outlet>   \n  "
    })
], CrudNavTitulo);
exports.CrudNavTitulo = CrudNavTitulo;
// 
//# sourceMappingURL=crud.nav.titulo.js.map

/***/ }),

/***/ "../../../../../src/app/cruds/crud.router.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
//compronentes crud
var crud_nav_titulo_1 = __webpack_require__("../../../../../src/app/cruds/crud.nav.titulo.ts");
var crud_nav_componente_1 = __webpack_require__("../../../../../src/app/cruds/crud.nav.componente.ts");
var crud_nav_componente2_1 = __webpack_require__("../../../../../src/app/cruds/crud.nav.componente2.ts");
//Cruds Clientes
var clientes_listar_1 = __webpack_require__("../../../../../src/app/cruds/clientes/clientes.listar.ts");
var clientes_cadastrar_1 = __webpack_require__("../../../../../src/app/cruds/clientes/clientes.cadastrar.ts");
var produtos_listar_1 = __webpack_require__("../../../../../src/app/cruds/produtos/produtos.listar.ts");
var produtos_cadastrar_1 = __webpack_require__("../../../../../src/app/cruds/produtos/produtos.cadastrar.ts");
var sistema_cadastrar_1 = __webpack_require__("../../../../../src/app/cruds/sistema/sistema.cadastrar.ts");
var sistema_listar_1 = __webpack_require__("../../../../../src/app/cruds/sistema/sistema.listar.ts");
var produto_editar_1 = __webpack_require__("../../../../../src/app/cruds/produtos/produto.editar.ts");
var usuario_listar_1 = __webpack_require__("../../../../../src/app/cruds/usuario/usuario.listar.ts");
var usuario_cadastrar_1 = __webpack_require__("../../../../../src/app/cruds/usuario/usuario.cadastrar.ts");
var CrudNav = [{
        path: '',
        component: crud_nav_titulo_1.CrudNavTitulo,
        children: [{
                path: 'crud-nav-listar',
                component: crud_nav_componente2_1.CrudNavComponente2,
                children: [{
                        path: 'clientes-listar',
                        component: clientes_listar_1.ClientesListar,
                    }, {
                        path: 'produtos-listar',
                        component: produtos_listar_1.ProdutosListar,
                        children: [{
                                path: ':id',
                                component: produto_editar_1.ProdutoEditar,
                            }]
                    }, {
                        path: 'sistema-listar',
                        component: sistema_listar_1.SistemaListar,
                    }, {
                        path: 'usuario-listar',
                        component: usuario_listar_1.UsuarioListar,
                    }]
            }, {
                path: 'crud-nav-cadastrar',
                component: crud_nav_componente_1.CrudNavComponente,
                children: [{
                        path: 'clientes-cadastrar',
                        component: clientes_cadastrar_1.ClientesCadastrar
                    }, {
                        path: 'produtos-cadastrar',
                        component: produtos_cadastrar_1.ProdutosCadastrar
                    }, {
                        path: 'sistema-cadastrar',
                        component: sistema_cadastrar_1.SistemaCadastrar,
                    }, {
                        path: 'usuario-cadastrar',
                        component: usuario_cadastrar_1.UsuarioCadastrar
                    }]
            }]
    }];
var CrudRouter = (function () {
    function CrudRouter() {
    }
    return CrudRouter;
}());
CrudRouter = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(CrudNav)
        ],
        exports: [
            router_1.RouterModule
        ],
        providers: []
    })
], CrudRouter);
exports.CrudRouter = CrudRouter;
//# sourceMappingURL=crud.router.js.map

/***/ }),

/***/ "../../../../../src/app/cruds/cruds.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
//menu (nav) componentes
var crud_nav_titulo_1 = __webpack_require__("../../../../../src/app/cruds/crud.nav.titulo.ts");
var crud_nav_componente_1 = __webpack_require__("../../../../../src/app/cruds/crud.nav.componente.ts");
var crud_nav_componente2_1 = __webpack_require__("../../../../../src/app/cruds/crud.nav.componente2.ts");
var campo_erro_componente_1 = __webpack_require__("../../../../../src/app/cruds/campo.erro.componente.ts");
//Rotas
var crud_router_1 = __webpack_require__("../../../../../src/app/cruds/crud.router.ts");
//Cruds Cliente
var clientes_listar_1 = __webpack_require__("../../../../../src/app/cruds/clientes/clientes.listar.ts");
var clientes_cadastrar_1 = __webpack_require__("../../../../../src/app/cruds/clientes/clientes.cadastrar.ts");
//Crud Produtos
var produtos_listar_1 = __webpack_require__("../../../../../src/app/cruds/produtos/produtos.listar.ts");
var produtos_cadastrar_1 = __webpack_require__("../../../../../src/app/cruds/produtos/produtos.cadastrar.ts");
var produto_editar_1 = __webpack_require__("../../../../../src/app/cruds/produtos/produto.editar.ts");
//crud sistema
var sistema_listar_1 = __webpack_require__("../../../../../src/app/cruds/sistema/sistema.listar.ts");
var sistema_cadastrar_1 = __webpack_require__("../../../../../src/app/cruds/sistema/sistema.cadastrar.ts");
//serviços
var cliente_service_1 = __webpack_require__("../../../../../src/app/service/cliente.service.ts");
var produto_service_1 = __webpack_require__("../../../../../src/app/service/produto.service.ts");
var mask_services_1 = __webpack_require__("../../../../../src/app/service/mask.services.ts");
var usuario_service_1 = __webpack_require__("../../../../../src/app/service/usuario.service.ts");
var sistema_service_1 = __webpack_require__("../../../../../src/app/service/sistema.service.ts");
//crud usuarios
var usuario_listar_1 = __webpack_require__("../../../../../src/app/cruds/usuario/usuario.listar.ts");
var usuario_cadastrar_1 = __webpack_require__("../../../../../src/app/cruds/usuario/usuario.cadastrar.ts");
//pipe
var crud_filter_cliente_pipe_1 = __webpack_require__("../../../../../src/app/cruds/crud.filter.cliente.pipe.ts");
//boots trap
var angular2_text_mask_1 = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
var CrudsModule = (function () {
    function CrudsModule() {
    }
    return CrudsModule;
}());
CrudsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            crud_router_1.CrudRouter,
            forms_1.ReactiveFormsModule,
            angular2_text_mask_1.TextMaskModule,
        ],
        declarations: [
            crud_nav_titulo_1.CrudNavTitulo,
            crud_nav_componente_1.CrudNavComponente,
            crud_nav_componente2_1.CrudNavComponente2,
            clientes_listar_1.ClientesListar,
            clientes_cadastrar_1.ClientesCadastrar,
            produtos_listar_1.ProdutosListar,
            produtos_cadastrar_1.ProdutosCadastrar,
            produto_editar_1.ProdutoEditar,
            crud_filter_cliente_pipe_1.CrudFilterClientePipe,
            campo_erro_componente_1.CampoErroComponente,
            sistema_cadastrar_1.SistemaCadastrar,
            sistema_listar_1.SistemaListar,
            usuario_listar_1.UsuarioListar,
            usuario_cadastrar_1.UsuarioCadastrar // crud usuario
        ],
        providers: [
            cliente_service_1.ClienteService,
            produto_service_1.ProdutoService,
            mask_services_1.MaskServices,
            usuario_service_1.UsuarioService,
            sistema_service_1.SistemaService,
        ]
    })
], CrudsModule);
exports.CrudsModule = CrudsModule;
//# sourceMappingURL=cruds.module.js.map

/***/ }),

/***/ "../../../../../src/app/cruds/produtos/produto.editar.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8\">\n \n\t    <form class=\"form-horizontal\" [formGroup]=\"produtoForm\">\n\t\t    <div class=\"form-group\">\n\t\t\t    <label for=\"inputCadastro\" class=\"col-sm-1\">Codigo Barras</label>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t    \t<input type=\"number\" step=\"0.01\" class=\"form-control\" formControlName=\"codigoBarras\" id=\"form-Nome\" placeholder=\"Codigo Barras\" />\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"inputCadastro\" class=\"col-sm-1\">Nome</label>\n    \t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t        <input type=\"text\" class=\"form-control\" formControlName=\"nome\" id=\"form-Nome\" placeholder=\"Nome\" />\n\t\t\t        </div>\n                    \n\t\t    </div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"inputCadastro\" class=\"col-sm-1\">Preço</label>\n    \t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t        <input type=\"text\" class=\"form-control\" formControlName=\"valor\" id=\"form-Nome\" placeholder=\"Preço\" />\n\t\t\t        </div>\n\t\t\t\t\t<label for=\"inputCadastro\" class=\"col-sm-2\">Quantidade</label>\n                    <div class=\"col-sm-2\">\n\t\t\t\t        <input type=\"text\" class=\"form-control\"  formControlName=\"quantidade\" id=\"form-Nome\" placeholder=\"Quantidade\" />\n\t\t\t        </div>\n\t\t    </div>\n\t\t\t\n\t\t\t<p class=\"text-right\"><button type=\"button\" (click)=\"onSubmit()\" class=\"btn btn-default text-right\">Salvar</button>\n\t\t\t\t<button type=\"reset\" class=\"btn btn-default text-right\">Limpar</button>\n\t\t\t</p>\n\n\t\t\t\t<p>Valores: {{ produtoForm.value | json }} Cliente editado: </p>\n\t\t</form>\n\n\t\t\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/cruds/produtos/produto.editar.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
__webpack_require__("../../../../rxjs/add/operator/switchMap.js");
//cliente serviço
var produto_service_1 = __webpack_require__("../../../../../src/app/service/produto.service.ts");
//modelo
var produto_model_1 = __webpack_require__("../../../../../src/app/model/produto.model.ts");
var ProdutoEditar = (function () {
    function ProdutoEditar(produtoService, fb, route, router) {
        this.produtoService = produtoService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.produto = new produto_model_1.ProdutoModel(); // cliente para um novo cadastro
        this.produtoEditar = new produto_model_1.ProdutoModel(); // cliente para um cadastro para editar
        this.createFormBuild();
        this.editar();
    }
    ProdutoEditar.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.switchMap(function (params) {
            return _this.produtoService.getProduto(params.get('id'));
        })
            .subscribe(function (produto) { return _this.produtoEditar = produto; });
    };
    ProdutoEditar.prototype.createFormBuild = function () {
        this.produtoForm = this.fb.group({
            _id: '',
            codigoBarras: '',
            nome: '',
            valor: '',
            quantidade: '',
        });
    };
    ProdutoEditar.prototype.editar = function () {
    };
    ;
    ProdutoEditar.prototype.prepararValores = function () {
        var valores = this.produtoForm.value;
        var produto = new produto_model_1.ProdutoModel();
        //  this.cliente.nome = this.clienteForm.controls.nome.value;    
        //  this.cliente.cpf = this.clienteForm.controls.cpf.value;
        produto._id = this.produtoForm.controls._id.value;
        produto.codigoBarras = this.produtoForm.controls.codigoBarras.value;
        produto.nome = this.produtoForm.controls.nome.value;
        produto.valor = this.produtoForm.controls.valor.value;
        produto.quantidade = this.produtoForm.controls.quantidade.value;
        return produto;
    };
    ;
    //submete os valores para o banco de dados depois de preparados
    ProdutoEditar.prototype.onSubmit = function () {
        var produto = this.prepararValores();
        console.log(produto);
        //buscar o cliente no banco de dados, se o id do cliente for igual ao id do cliente do editar, então editar, caso não cadastrar.
        this.produtoService.adicionarProduto(produto).subscribe();
    };
    //imprementa ngOnChages para os dados vindos do "editar"
    ProdutoEditar.prototype.ngOnChanges = function () {
        this.produtoForm.reset({ _id: this.produtoEditar._id, nome: this.produtoEditar.nome,
            codigoBarras: this.produtoEditar.codigoBarras, valor: this.produtoEditar.valor, quantidade: this.produtoEditar.quantidade });
    };
    return ProdutoEditar;
}());
ProdutoEditar = __decorate([
    core_1.Component({
        selector: '',
        template: __webpack_require__("../../../../../src/app/cruds/produtos/produto.editar.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof produto_service_1.ProdutoService !== "undefined" && produto_service_1.ProdutoService) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object])
], ProdutoEditar);
exports.ProdutoEditar = ProdutoEditar;
var _a, _b, _c, _d;
//# sourceMappingURL=produto.editar.js.map

/***/ }),

/***/ "../../../../../src/app/cruds/produtos/produtos.cadastrar.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8\">\n    <p></p>\n\t    <form class=\"form-horizontal\" [formGroup]=\"produtoForm\">\n\t\t\t<input type=\"hidden\" class=\"form-control\" formControlName=\"_id\"/>\n\t\t    <div class=\"form-group\">\n\t\t\t    <label for=\"inputCadastro\" class=\"col-sm-1\">Codigo Barras</label>\n\t\t\t\t\t<div class=\"col-sm-6\" [ngClass]=\"aplicaCssErro('codigoBarras')\">\n\t\t\t\t\t\t<input type=\"number\"  required class=\"form-control\" formControlName=\"codigoBarras\" placeholder=\"Codigo Barras\" />\n\t\t\t\t\t\t<campo-erro-componente [control]=\"produtoForm.controls.codigoBarras\"></campo-erro-componente>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"inputCadastro\" class=\"col-sm-1\">Nome</label>\n    \t\t\t\t<div class=\"col-sm-6\" [ngClass]=\"aplicaCssErro('nome')\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" required formControlName=\"nome\"  placeholder=\"Nome\" />\n\t\t\t\t\t\t<campo-erro-componente [control]=\"produtoForm.controls.nome\"></campo-erro-componente>\n\t\t\t        </div>\n                    \n\t\t    </div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"inputCadastro\" class=\"col-sm-1\">Preço</label>\n    \t\t\t\t<div class=\"col-sm-5\" [ngClass]=\"aplicaCssErro('valor')\">\n\t\t\t\t\t\t<input type=\"number\"  step=\"0.01\" class=\"form-control\" required formControlName=\"valor\" placeholder=\"Preço\" />\n\t\t\t\t\t\t<campo-erro-componente [control]=\"produtoForm.controls.valor\"></campo-erro-componente>\n\t\t\t        </div>\n\t\t\t\t\t<label for=\"inputCadastro\" class=\"col-sm-2\">Quantidade</label>\n                    <div class=\"col-sm-3\">\n\t\t\t\t        <input type=\"number\" class=\"form-control\"  formControlName=\"quantidade\" id=\"form-Nome\" placeholder=\"Quantidade\" />\n\t\t\t        </div>\n\t\t    </div>\n\t\t\t\n\t\t\t<p class=\"text-right\"><button type=\"button\" (click)=\"onSubmit()\" class=\"btn btn-default text-right\">Salvar</button>\n\t\t\t\t<button type=\"reset\" class=\"btn btn-default text-right\">Limpar</button>\n\t\t\t</p>\n\n\t\t\t\t<p>Valores: {{ produtoForm.value | json }} Cliente editado: {{produtoForm.controls.nome.value}}</p>\n\t\t\t\t<p>Validation status: {{ produtoForm.status }}</p>\n\t\t</form>\n\n\t\t\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/cruds/produtos/produtos.cadastrar.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
//cliente serviço
var produto_service_1 = __webpack_require__("../../../../../src/app/service/produto.service.ts");
var login_service_1 = __webpack_require__("../../../../../src/app/service/login.service.ts");
//modelo
var produto_model_1 = __webpack_require__("../../../../../src/app/model/produto.model.ts");
var ProdutosCadastrar = (function () {
    function ProdutosCadastrar(produtoService, fb, loginService) {
        this.produtoService = produtoService;
        this.fb = fb;
        this.loginService = loginService;
        this.produto = new produto_model_1.ProdutoModel(); // cliente para um novo cadastro
        this.createFormBuild();
    }
    ProdutosCadastrar.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.getUsuarioLogin().subscribe(function (usuario) { return _this.usuario = usuario; });
    };
    ProdutosCadastrar.prototype.createFormBuild = function () {
        this.produtoForm = this.fb.group({
            _id: '',
            codigoBarras: ['', forms_1.Validators.required],
            nome: ['', forms_1.Validators.required],
            valor: ['', forms_1.Validators.required],
            quantidade: '',
        });
    };
    ProdutosCadastrar.prototype.prepararValores = function () {
        var produto = new produto_model_1.ProdutoModel();
        //  this.cliente.nome = this.clienteForm.controls.nome.value;    
        //  this.cliente.cpf = this.clienteForm.controls.cpf.value;
        produto._id = this.produtoForm.controls._id.value;
        produto.codigoBarras = this.produtoForm.controls.codigoBarras.value;
        produto.nome = this.produtoForm.controls.nome.value;
        produto.valor = this.produtoForm.controls.valor.value;
        produto.quantidade = this.produtoForm.controls.quantidade.value;
        produto.sistema = this.usuario.sistema;
        return produto;
    };
    ;
    //submete os valores para o banco de dados depois de preparados
    ProdutosCadastrar.prototype.onSubmit = function () {
        var produto = this.prepararValores();
        console.log(produto);
        //buscar o cliente no banco de dados, se o id do cliente for igual ao id do cliente do editar, então editar, caso não cadastrar.
        this.produtoService.adicionarProduto(produto).subscribe();
    };
    //imprementa ngOnChages para os dados vindos do "editar"
    ProdutosCadastrar.prototype.ngOnChanges = function () {
        this.produtoForm.reset({ _id: this.produtoEditar._id, nome: this.produtoEditar.nome,
            codigoBarras: this.produtoEditar.codigoBarras, valor: this.produtoEditar.valor, quantidade: this.produtoEditar.quantidade });
    };
    ProdutosCadastrar.prototype.verificaCampos = function (campo) {
        if (!this.produtoForm.get(campo).valid && (this.produtoForm.get(campo).touched ||
            this.produtoForm.get(campo).dirty)) {
            return true;
        }
        else {
            return false;
        }
    };
    ProdutosCadastrar.prototype.aplicaCssErro = function (campo) {
        return {
            'has-error': this.verificaCampos(campo),
        };
    };
    return ProdutosCadastrar;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof produto_model_1.ProdutoModel !== "undefined" && produto_model_1.ProdutoModel) === "function" && _a || Object)
], ProdutosCadastrar.prototype, "produtoEditar", void 0);
ProdutosCadastrar = __decorate([
    core_1.Component({
        selector: 'produto-cadastrar',
        template: __webpack_require__("../../../../../src/app/cruds/produtos/produtos.cadastrar.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof produto_service_1.ProdutoService !== "undefined" && produto_service_1.ProdutoService) === "function" && _b || Object, typeof (_c = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _c || Object, typeof (_d = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _d || Object])
], ProdutosCadastrar);
exports.ProdutosCadastrar = ProdutosCadastrar;
var _a, _b, _c, _d;
//# sourceMappingURL=produtos.cadastrar.js.map

/***/ }),

/***/ "../../../../../src/app/cruds/produtos/produtos.listar.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"col-md-10\">\n    \t<div class=\"responsive\">\n\t\t\t<table class=\"table table-striped\">\n\t\t\t\t<th>C/ Barras</th>\n\t\t\t\t<th>Nome</th>\n\t\t\t\t<th>Preço</th>\n\t\t\t\t<th>Quantidade</th>\n\t\t\t\t\t<tr *ngFor=\"let produto of produtos\" class=\"success\">\n\t\t\t\t\t\t<td>{{produto.codigoBarras}}</td>\n\t\t\t\t\t\t<td>{{produto.nome}}</td>\n\t\t\t\t\t\t<td>{{produto.valor}}</td>\n\t\t\t\t\t\t<td>{{produto.quantidade}}</td>\n\t\t\t\t\t\t<td><a (click)=\"editar(produto)\" class=\"btn btn-warning\">Editar</a>\n\t\t\t\t\t\t    <button (click)=\"delete(produto)\" class=\"btn btn-danger\">Excluir</button></td>\n\t\t\t\t\t</tr>\n\t\t\t</table>\n\n\t\t\t<div *ngIf=\"produtoEditarBollean\">\n\t\t\t\t<produto-cadastrar [produtoEditar]=\"produtoParaEditar\"></produto-cadastrar>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n\n"

/***/ }),

/***/ "../../../../../src/app/cruds/produtos/produtos.listar.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
//serviço
var produto_service_1 = __webpack_require__("../../../../../src/app/service/produto.service.ts");
var login_service_1 = __webpack_require__("../../../../../src/app/service/login.service.ts");
//rotas
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var ProdutosListar = (function () {
    function ProdutosListar(produtoservice, router, route, loginService) {
        this.produtoservice = produtoservice;
        this.router = router;
        this.route = route;
        this.loginService = loginService;
        this.produtoEditarBollean = false;
    }
    ;
    ProdutosListar.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.getUsuarioLogin().subscribe(function (usuario) { return _this.usuario = usuario; });
        this.produtoservice.getProdutos(this.usuario.sistema._id).subscribe(function (produtos) { return _this.produtos = produtos; });
    };
    ProdutosListar.prototype.delete = function (produto) {
        var _this = this;
        this.produtoservice.deleteProduto(produto._id).subscribe(function () { _this.produtos = _this.produtos.filter(function (p) { return p !== produto; }); });
        //this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
    };
    ProdutosListar.prototype.editar = function (produto) {
        this.produtoEditarBollean = true;
        this.produtoParaEditar = produto;
        //  this.router.navigate(['/cruds-nav-module/crud-nav-listar/produto-editar', produto._id]);
        // this.router.navigate([produto._id],{relativeTo: this.route});
    };
    return ProdutosListar;
}());
ProdutosListar = __decorate([
    core_1.Component({
        selector: '',
        template: __webpack_require__("../../../../../src/app/cruds/produtos/produtos.listar.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof produto_service_1.ProdutoService !== "undefined" && produto_service_1.ProdutoService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object, typeof (_d = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _d || Object])
], ProdutosListar);
exports.ProdutosListar = ProdutosListar;
var _a, _b, _c, _d;
//# sourceMappingURL=produtos.listar.js.map

/***/ }),

/***/ "../../../../../src/app/cruds/sistema/sistema.cadastrar.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\">\n  \t    <form class=\"form-horizontal\" [formGroup]=\"sistemaForm\">\n\t\t    <div class=\"form-group\">\n\t\t\t\t<input type=\"hidden\" class=\"form-control\" formControlName=\"_id\"/>\n\t\t\t    <label class=\"col-sm-2\">Nome Responsavel</label>\n\t\t\t\t\t<div class=\"col-sm-6\" [ngClass]=\"aplicaCssErro('responsavel')\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"responsavel\" required  placeholder=\"Nome Responsavel\" />\n\t\t\t\t\t\t<campo-erro-componente [control]=\"sistemaForm.controls.responsavel\"></campo-erro-componente>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\" [ngClass]=\"aplicaCssErro('cpfResponsavel')\">\n\t\t\t\t\t\t<input [textMask]=\"{mask: maskCpf}\" formControlName=\"cpfResponsavel\" required placeholder=\"Cpf\" class=\"form-control\" type=\"text\"/>\n\t\t\t\t\t\t<campo-erro-componente [control]=\"sistemaForm.controls.cpfResponsavel\"></campo-erro-componente>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t\n\t\t\t    <label class=\"col-sm-2\">Nome Sistema</label>\n\t\t\t\t\t<div class=\"col-sm-6\" [ngClass]=\"aplicaCssErro('nomeSistema')\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"nomeSistema\" required  placeholder=\"Nome Sistema\" />\n\t\t\t\t\t\t<campo-erro-componente [control]=\"sistemaForm.controls.nomeSistema\"></campo-erro-componente>\n\t\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"inputCadastro\" class=\"col-sm-2\">Contato</label>\n\t\t\t\t\t<div class=\"col-sm-3\" [ngClass]=\"aplicaCssErro('telefoneCelular')\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [textMask]=\"{mask: maskTelefoneCelular}\"  formControlName=\"telefoneCelular\" required   placeholder=\"Telefone Celular\" />\n\t\t\t\t\t\t<campo-erro-componente [control]=\"sistemaForm.controls.telefoneCelular\"></campo-erro-componente>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"comment\">Informações adicionais do cliente:</label>\n      \t\t\t\t<textarea class=\"form-control\"formControlName=\"informacoes\" rows=\"4\" id=\"comentario\"></textarea>\n\t\t\t\t\t\t\t\n\t\t\t</div>\n\t\t\t\t<p class=\"text-right\"> \n\t\t\t\t<button type=\"button\" class=\"btn btn-default \" (click)=\"onSubmit()\">Salvar</button>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t</p>\n\t\t</form>\n\t\t\n\n\n\n\t\t<p>Valores: {{ sistemaForm.value | json }} </p>\n\t\t<p>Validation status: {{ sistemaForm.status }}</p>\n\n\t\t\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/cruds/sistema/sistema.cadastrar.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
//cliente serviço
var sistema_service_1 = __webpack_require__("../../../../../src/app/service/sistema.service.ts");
var validator_service_1 = __webpack_require__("../../../../../src/app/service/validator.service.ts");
var mask_services_1 = __webpack_require__("../../../../../src/app/service/mask.services.ts");
//modelo
var sistema_model_1 = __webpack_require__("../../../../../src/app/model/sistema.model.ts");
var SistemaCadastrar = (function () {
    function SistemaCadastrar(sistemaService, fb, maskServices) {
        this.sistemaService = sistemaService;
        this.fb = fb;
        this.maskServices = maskServices;
        this.maskCpf = '';
        this.maskTelefoneCelular = '';
        this.sistema = new sistema_model_1.SistemaModel(); // cliente para um novo cadastro
        this.maskCpf = this.maskServices.maskCpf();
        this.maskTelefoneCelular = this.maskServices.maskTelefoneCelular();
        this.createFormBuild();
    }
    SistemaCadastrar.prototype.createFormBuild = function () {
        this.sistemaForm = this.fb.group({
            _id: '',
            responsavel: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(30)]],
            cpfResponsavel: ['', [forms_1.Validators.required, validator_service_1.ValidationService.cpfValidator]],
            nomeSistema: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(30)]],
            telefoneCelular: ['', forms_1.Validators.required],
            informacoes: ['']
        });
    };
    ;
    //prepara valores para serem cadastrados ;
    SistemaCadastrar.prototype.prepararValores = function () {
        // let valores = this.sistemaForm.value;
        var sistema = new sistema_model_1.SistemaModel();
        sistema._id = this.sistemaForm.controls._id.value;
        sistema.responsavel = this.sistemaForm.controls.responsavel.value;
        sistema.cpfResponsavel = this.sistemaForm.controls.cpfResponsavel.value;
        sistema.nomeSistema = this.sistemaForm.controls.nomeSistema.value;
        sistema.contatoResponsavel = this.sistemaForm.controls.telefoneCelular.value;
        sistema.informacoes = this.sistemaForm.controls.informacoes.value;
        // this.cliente.cpf = this.clienteForm.controls.cpf.value;
        return sistema;
    };
    ;
    //submete os valores para o banco de dados depois de preparados
    SistemaCadastrar.prototype.onSubmit = function () {
        var sistema = this.prepararValores();
        console.log(sistema);
        this.sistemaService.adicionarSistema(sistema).subscribe();
        //buscar o cliente no banco de dados, se o id do cliente for igual ao id do cliente do editar, então editar, caso não cadastrar.
    };
    //imprementa ngOnChages para os dados vindos do "editar"
    SistemaCadastrar.prototype.ngOnChanges = function () {
        this.sistemaForm.reset({ _id: this.sistemaEditar._id,
            responsavel: this.sistemaEditar.responsavel,
            cpfResponsavel: this.sistemaEditar.cpfResponsavel,
            nomeSistema: this.sistemaEditar.nomeSistema,
            telefoneCelular: this.sistemaEditar.contatoResponsavel,
            informacoes: this.sistemaEditar.informacoes
        });
    };
    SistemaCadastrar.prototype.verificaCampos = function (campo) {
        if (!this.sistemaForm.get(campo).valid && (this.sistemaForm.get(campo).touched ||
            this.sistemaForm.get(campo).dirty)) {
            return true;
        }
        else {
            return false;
        }
    };
    SistemaCadastrar.prototype.aplicaCssErro = function (campo) {
        return {
            'has-error': this.verificaCampos(campo),
        };
    };
    return SistemaCadastrar;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof sistema_model_1.SistemaModel !== "undefined" && sistema_model_1.SistemaModel) === "function" && _a || Object)
], SistemaCadastrar.prototype, "sistemaEditar", void 0);
SistemaCadastrar = __decorate([
    core_1.Component({
        selector: 'sistema-cadastrar',
        template: __webpack_require__("../../../../../src/app/cruds/sistema/sistema.cadastrar.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof sistema_service_1.SistemaService !== "undefined" && sistema_service_1.SistemaService) === "function" && _b || Object, typeof (_c = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _c || Object, typeof (_d = typeof mask_services_1.MaskServices !== "undefined" && mask_services_1.MaskServices) === "function" && _d || Object])
], SistemaCadastrar);
exports.SistemaCadastrar = SistemaCadastrar;
var _a, _b, _c, _d;
//# sourceMappingURL=sistema.cadastrar.js.map

/***/ }),

/***/ "../../../../../src/app/cruds/sistema/sistema.listar.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10\">\n\t<div class=\"responsive\">\n\t\t<table class=\"table table-striped\">\n\t\t\t<th>NOME RESPONSAVEL</th>\n\t\t\t<th>CPF RESPONSAVEL</th>\n\t\t\t<th>NOME SISTEMA</th>\n\t\t\t<th>CONTATO RESPONSAVEL</th>\n\t\t\t<th>procurar:\n\t\t\t\t<input type=\"text\" (keyup)=\"onKey($event)\" />{{values}}</th>\n\t\t\t<tr *ngFor=\"let sistema of sistemas | filter: values\" class=\"success\">\n\n\t\t\t\t<td>{{sistema.responsavel}}</td>\n\t\t\t\t<td>{{sistema.cpfResponsavel}}</td>\n\t\t\t\t<td>{{sistema.nomeSistema}}</td>\n\t\t\t\t<td>{{sistema.contatoResponsavel}}</td>\n\t\t\t\t<td>\n\t\t\t\t\t<a class=\"btn btn-warning\" (click)=\"editar(sistema)\">Editar</a>\n\t\t\t\t\t<a class=\"btn btn-danger\" (click)=\"delete(sistema)\">Excluir</a>\n\t\t\t\t\t<a class=\"btn btn-warning\" (click)=\"adicionarUsuario(sistema)\">Adicionar Usuario</a>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</table>\n\n\t\n\t\t\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/cruds/sistema/sistema.listar.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
//serviço
var sistema_service_1 = __webpack_require__("../../../../../src/app/service/sistema.service.ts");
//modelo
var sistema_model_1 = __webpack_require__("../../../../../src/app/model/sistema.model.ts");
//rotas
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var SistemaListar = (function () {
    function SistemaListar(sistemaService, router) {
        this.sistemaService = sistemaService;
        this.router = router;
        this.sistemaParaEditarBollean = false;
        this.sistemaParaAdicionarSistemaBollean = false;
        this.SistemaSistema = new sistema_model_1.SistemaModel(); // Sistema usado para se casatrado no sistema
    }
    //name para ng model para filtro
    SistemaListar.prototype.ngOnInit = function () {
        var _this = this;
        this.sistemaService.getSistemas().subscribe(function (sistemas) { return _this.sistemas = sistemas; });
        // clientes que vem do bd já vão estar nessa lista.
    };
    SistemaListar.prototype.delete = function (sistema) {
        var _this = this;
        console.log(sistema._id);
        this.sistemaService.deleteSistema(sistema._id).subscribe(function () { _this.sistemas = _this.sistemas.filter(function (s) { return s !== sistema; }); });
        //     this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
    };
    SistemaListar.prototype.editar = function (sistema) {
        this.sistemaParaAdicionarSistemaBollean = false;
        this.sistemaParaEditarBollean = true;
        this.sistemaParaEditar = sistema;
    };
    SistemaListar.prototype.adicionarSistema = function (sistema) {
        this.sistemaParaAdicionarSistemaBollean = true;
        this.sistemaParaEditarBollean = false;
        this.idSistemaSistema = sistema._id;
    };
    SistemaListar.prototype.onKey = function (event) {
        this.values = event.target.value;
    };
    return SistemaListar;
}());
SistemaListar = __decorate([
    core_1.Component({
        selector: '',
        template: __webpack_require__("../../../../../src/app/cruds/sistema/sistema.listar.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof sistema_service_1.SistemaService !== "undefined" && sistema_service_1.SistemaService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], SistemaListar);
exports.SistemaListar = SistemaListar;
var _a, _b;
//# sourceMappingURL=sistema.listar.js.map

/***/ }),

/***/ "../../../../../src/app/cruds/usuario/usuario.cadastrar.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\">\n   \n\t    <form class=\"form-horizontal\" [formGroup]=\"usuarioForm\">\n\t\t    <div class=\"form-group\">\n\t\t\t\t<input type=\"hidden\" class=\"form-control\" formControlName=\"_id\"/>\n\t\t\t\t<label class=\"col-sm-1\">Email</label>\n\t\t\t\t\t<div class=\"col-sm-4\" [ngClass]=\"aplicaCssErro('email')\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"email\" required  placeholder=\"Email\" />\n\t\t\t\t\t\t<campo-erro-componente [control]=\"usuarioForm.controls.email\"></campo-erro-componente>\n\t\t\t\t\t</div>\n\t\t\t\t\t<label class=\"col-sm-1\">Senha</label>\n\t\t\t\t\t<div class=\"col-sm-3\" [ngClass]=\"aplicaCssErro('senha')\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<input formControlName=\"senha\" required placeholder=\"Senha\" class=\"form-control\" type=\"text\"/>\n\t\t\t\t\t\t<campo-erro-componente [control]=\"usuarioForm.controls.senha\"></campo-erro-componente>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"col-sm-1\">Nome</label>\n\t\t\t\t\t<div class=\"col-sm-5\" [ngClass]=\"aplicaCssErro('nome')\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"nome\" required  placeholder=\"Nome\" />\n\t\t\t\t\t\t\t<campo-erro-componente [control]=\"usuarioForm.controls.nome\"></campo-erro-componente>\n\t\t\t\t\t</div>\n\t\t\t\t\t<label class=\"col-sm-1\">Tipo</label>\n\t\t\t\t\t\t<div class=\"col-sm-3\" >\n\t\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"tipo\">\n\t\t\t\t\t\t\t\t<option *ngFor=\"let tipo of arrayTipoUsuario\">{{tipo.tipoUsuario}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"col-sm-1\">Sistema Usuario</label>\n\t\t\t\t\t<div class=\"col-sm-3\" >\n\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"sistema\">\n\t\t\t\t\t\t\t<option [ngValue]=\"sistema._id\" *ngFor=\"let sistema of sistemas\">{{sistema.nomeSistema}}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p class=\"text-right\"> \n\t\t\t\t<button type=\"button\" class=\"btn btn-default \" (click)=\"onSubmit()\">Salvar</button>\n\t\t\t\t\n\t\t\t\t\n\t\t\t</p>\n\t\t\n\t\t</form>\n\t\t\n</div>"

/***/ }),

/***/ "../../../../../src/app/cruds/usuario/usuario.cadastrar.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
//cliente serviço
var usuario_service_1 = __webpack_require__("../../../../../src/app/service/usuario.service.ts");
var mask_services_1 = __webpack_require__("../../../../../src/app/service/mask.services.ts");
//modelo
var usuario_model_1 = __webpack_require__("../../../../../src/app/model/usuario.model.ts");
var sistema_service_1 = __webpack_require__("../../../../../src/app/service/sistema.service.ts");
var UsuarioCadastrar = (function () {
    function UsuarioCadastrar(usuarioService, fb, maskServices, sistemasService) {
        this.usuarioService = usuarioService;
        this.fb = fb;
        this.maskServices = maskServices;
        this.sistemasService = sistemasService;
        this.maskCpf = '';
        this.maskTelefoneCelular = '';
        this.arrayTipoUsuario = usuario_model_1.constTipoUsuarios; // constante dos dados do select
        this.usuario = new usuario_model_1.UsuarioModel(); // cliente para um novo cadastro
        this.maskCpf = this.maskServices.maskCpf();
        this.maskTelefoneCelular = this.maskServices.maskTelefoneCelular();
        this.createFormBuild();
    }
    UsuarioCadastrar.prototype.ngOnInit = function () {
        var _this = this;
        this.sistemasService.getSistemas().subscribe(function (sistemas) { return _this.sistemas = sistemas; });
    };
    UsuarioCadastrar.prototype.createFormBuild = function () {
        this.usuarioForm = this.fb.group({
            _id: '',
            email: ['', [forms_1.Validators.required]],
            senha: ['', [forms_1.Validators.required]],
            nome: ['', [forms_1.Validators.required]],
            tipo: ['', [forms_1.Validators.required]],
            ativacao: [''],
            sistema: [''],
        });
    };
    ;
    //prepara valores para serem cadastrados ;
    UsuarioCadastrar.prototype.prepararValores = function () {
        // let valores = this.usuarioForm.value;
        var usuario = new usuario_model_1.UsuarioModel();
        usuario.email = this.usuarioForm.controls.email.value;
        usuario.nome = this.usuarioForm.controls.nome.value;
        usuario.senha = this.usuarioForm.controls.senha.value;
        usuario.tipo = this.usuarioForm.controls.tipo.value;
        usuario.sistema = this.usuarioForm.controls.sistema.value;
        // this.cliente.cpf = this.clienteForm.controls.cpf.value;
        return usuario;
    };
    ;
    //submete os valores para o banco de dados depois de preparados
    UsuarioCadastrar.prototype.onSubmit = function () {
        var usuario = this.prepararValores();
        if (usuario._id === '' || usuario._id === null || usuario._id === undefined) {
            console.log(usuario);
            this.usuarioService.adicionarUsuario(usuario).subscribe(function (usuario) { return console.log(usuario); });
        }
    };
    //imprementa ngOnChages para os dados vindos do "editar"
    UsuarioCadastrar.prototype.ngOnChanges = function () {
        this.usuarioForm.reset({ _id: this.usuarioEditar._id,
            email: this.usuarioEditar.email,
            senha: this.usuarioEditar.senha,
            nome: this.usuarioEditar.nome,
            tipo: this.usuarioEditar.tipo,
            ativacao: this.usuarioEditar.ativacao,
        });
    };
    UsuarioCadastrar.prototype.verificaCampos = function (campo) {
        if (!this.usuarioForm.get(campo).valid && (this.usuarioForm.get(campo).touched ||
            this.usuarioForm.get(campo).dirty)) {
            return true;
        }
        else {
            return false;
        }
    };
    UsuarioCadastrar.prototype.aplicaCssErro = function (campo) {
        return {
            'has-error': this.verificaCampos(campo),
        };
    };
    return UsuarioCadastrar;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof usuario_model_1.UsuarioModel !== "undefined" && usuario_model_1.UsuarioModel) === "function" && _a || Object)
], UsuarioCadastrar.prototype, "usuarioEditar", void 0);
UsuarioCadastrar = __decorate([
    core_1.Component({
        selector: 'usuario-cadastrar',
        template: __webpack_require__("../../../../../src/app/cruds/usuario/usuario.cadastrar.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof usuario_service_1.UsuarioService !== "undefined" && usuario_service_1.UsuarioService) === "function" && _b || Object, typeof (_c = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _c || Object, typeof (_d = typeof mask_services_1.MaskServices !== "undefined" && mask_services_1.MaskServices) === "function" && _d || Object, typeof (_e = typeof sistema_service_1.SistemaService !== "undefined" && sistema_service_1.SistemaService) === "function" && _e || Object])
], UsuarioCadastrar);
exports.UsuarioCadastrar = UsuarioCadastrar;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=usuario.cadastrar.js.map

/***/ }),

/***/ "../../../../../src/app/cruds/usuario/usuario.listar.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"col-md-10\">\n    \t<div class=\"responsive\">\n\t\t\t<table class=\"table table-striped\">\n\t\t\t\t<th>Email</th>\n\t\t\t\t<th>Senha</th>\n\t\t\t\t<th>Nome</th>\n\t\t\t\t<th>Tipo</th>\n\t\t\t\t<th>Sistema</th>\n\t\t\t\t<th>procurar: <input type=\"text\" (keyup)=\"onKey($event)\"/>{{values}}</th>\n\t\t\t\t\t<tr *ngFor=\"let usuario of usuarios | filter: values\" class=\"success\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<td>{{usuario.email}}</td>\n\t\t\t\t\t\t<td>{{usuario.senha}}</td>\n\t\t\t\t\t\t<td>{{usuario.nome}}</td>\n\t\t\t\t\t\t<td>{{usuario.tipo}}</td>\n\t\t\t\t\t\t<td>{{usuario.sistema.nomeSistema}}</td>\n\t\t\t\t\t\t<td><a class=\"btn btn-warning\" (click)=\"editar(usuario)\">Editar</a>\n\t\t\t\t\t\t\t<a class=\"btn btn-danger\" (click)=\"delete(usuario)\">Excluir</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/cruds/usuario/usuario.listar.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
//serviço
var usuario_service_1 = __webpack_require__("../../../../../src/app/service/usuario.service.ts");
var UsuarioListar = (function () {
    function UsuarioListar(usuarioService) {
        this.usuarioService = usuarioService;
        this.usuarioParaEditarBollean = false;
        this.usuarioParaAdicionarusuarioBollean = false;
    }
    //name para ng model para filtro
    UsuarioListar.prototype.ngOnInit = function () {
        var _this = this;
        this.usuarioService.getUsuarios().subscribe(function (usuarios) { return _this.usuarios = usuarios; });
        // clientes que vem do bd já vão estar nessa lista.
    };
    UsuarioListar.prototype.delete = function (usuario) {
        var _this = this;
        console.log(usuario._id);
        this.usuarioService.deleteUsuario(usuario._id).subscribe(function () { _this.usuarios = _this.usuarios.filter(function (u) { return u !== usuario; }); });
        //     this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
    };
    UsuarioListar.prototype.onKey = function (event) {
        this.values = event.target.value;
    };
    return UsuarioListar;
}());
UsuarioListar = __decorate([
    core_1.Component({
        selector: '',
        template: __webpack_require__("../../../../../src/app/cruds/usuario/usuario.listar.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof usuario_service_1.UsuarioService !== "undefined" && usuario_service_1.UsuarioService) === "function" && _a || Object])
], UsuarioListar);
exports.UsuarioListar = UsuarioListar;
var _a;
//# sourceMappingURL=usuario.listar.js.map

/***/ }),

/***/ "../../../../../src/app/login-module/login.module.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {    \n\tmargin-top: 80px;\n\tmargin-bottom: 20px;\n}\n\n.form-signin {\n  max-width: 420px;\n  padding: 30px 38px 66px;\n  margin: 0 auto;\n  background-color: #eee;\n  border: 3px dotted rgba(0,0,0,0.1);  \n  }\n\n.form-signin-heading {\n  text-align:center;\n  margin-bottom: 30px;\n}\n\n.form-control {\n  position: relative;\n  font-size: 16px;\n  height: auto;\n  padding: 10px;\n}\n\ninput[type=\"text\"] {\n  margin-bottom: 0px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\ninput[type=\"password\"] {\n  margin-bottom: 20px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.colorgraph {\n  height: 7px;\n  border-top: 0;\n  background: #c4e17f;\n  border-radius: 5px;\n  background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-module/login.module.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class = \"container\">\n        <div class=\"wrapper\">\n    \n            \n          <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n            class=\"alert alert-danger\">\n                <div *ngIf=\"email.errors.required\">\n                  Erro - Campo email vazio\n                </div>\n           \n        </div>\n              \n       <div *ngIf=\"senha.invalid && (senha.dirty || senha.touched)\"\n            class=\"alert alert-danger\">\n              <div *ngIf=\"senha.errors.required\">\n                 Erro - Campo senha vazio\n              </div>\n             \n        </div>\n              <h3 class=\"form-signin-heading\">Bem Vindo! Por favor entre com o email e a senha</h3>\n              <hr class=\"colorgraph\"><br>\n              \n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"usuarioPrepararLogar.email\" #email=\"ngModel\"  placeholder=\"Email\" required=\"\" autofocus=\"\" />\n              <input type=\"password\" class=\"form-control\" [(ngModel)]=\"usuarioPrepararLogar.senha\" #senha=\"ngModel\" placeholder=\"Senha\" required=\"\"/>     \t\t  \n             \n              <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"entrar()\" \n               type=\"Submit\">Login</button>  \t\t\t\n           <!--> [disabled]=\"email.invalid || senha.invalid\"<-->\n        </div>\n      </div>\n    "

/***/ }),

/***/ "../../../../../src/app/login-module/login.module.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
// serviços
var login_service_1 = __webpack_require__("../../../../../src/app/service/login.service.ts");
//model
var usuario_model_1 = __webpack_require__("../../../../../src/app/model/usuario.model.ts");
var LoginModuleComponent = (function () {
    //pega o usuario logado da paga de login
    //usuario  = new UsuarioModel();
    function LoginModuleComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.usuarioPrepararLogar = new usuario_model_1.UsuarioModel(); // preparar usuario para logar
        this.setMessage();
    }
    LoginModuleComponent.prototype.setMessage = function () {
        this.menssagem = 'Logando ' + (this.loginService.estadoLogin ? 'Dentro' : 'Saido');
    };
    LoginModuleComponent.prototype.entrar = function () {
        var _this = this;
        this.menssagem = 'Carregando o a entrada';
        this.loginService.logarUsuario(this.usuarioPrepararLogar).subscribe(function (usuario) { return _this.usuario = usuario; }, function (err) { return console.log(err); }, function () { return _this.testarLogin(); });
        /*   */
    };
    LoginModuleComponent.prototype.testarLogin = function () {
        var _this = this;
        console.log(this.usuario.estado);
        if (this.usuario.estado) {
            this.loginService.login().subscribe(function () {
                _this.setMessage();
                if (_this.loginService.estadoLogin) {
                    // Get the redirect URL from our auth service
                    // If no redirect has been set, use the default
                    var redirect = _this.loginService.redirectUrl ? _this.loginService.redirectUrl : 'menu-principal';
                    console.log(_this.loginService.estadoLogin);
                    // Redirect the user
                    _this.router.navigate([redirect, { id: _this.usuario._id }]);
                }
            });
        }
        else {
            this.menssagemLogar = "usuario ou senha invalidos";
        }
    };
    LoginModuleComponent.prototype.sair = function () {
        this.loginService.logout();
        this.setMessage();
    };
    LoginModuleComponent.prototype.logar = function () {
        this.router.navigateByUrl('menu-principal');
    };
    LoginModuleComponent.prototype.getUser = function () {
        return this.usuario;
    };
    return LoginModuleComponent;
}());
LoginModuleComponent = __decorate([
    core_1.Component({
        selector: '',
        template: __webpack_require__("../../../../../src/app/login-module/login.module.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-module/login.module.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], LoginModuleComponent);
exports.LoginModuleComponent = LoginModuleComponent;
var _a, _b;
//# sourceMappingURL=login.module.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-module/login.module.router.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
//Rotas Vendas
var login_module_component_1 = __webpack_require__("../../../../../src/app/login-module/login.module.component.ts");
var LoginModuleRoutes = [
    { path: '', component: login_module_component_1.LoginModuleComponent },
];
var LoginModuleRouter = (function () {
    function LoginModuleRouter() {
    }
    return LoginModuleRouter;
}());
LoginModuleRouter = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(LoginModuleRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], LoginModuleRouter);
exports.LoginModuleRouter = LoginModuleRouter;
//# sourceMappingURL=login.module.router.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.componente.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"form-group\">\n    <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"usuarioPrepararLogar.email\"  placeholder=\"Email\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"usuarioPrepararLogar.senha\" placeholder=\"Senha\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-4\">\n\n        <p>{{menssagem}}</p><p>{{menssagemLogar}}</p>\n      <button (click)=\"entrar()\" *ngIf=\"!loginService.estadoLogin\" class=\"btn btn-default\">Entrar</button>\n      <button (click)=\"sair()\" *ngIf=\"loginService.estadoLogin\" class=\"btn btn-default\">Sair</button>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.componente.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
// serviços
var login_service_1 = __webpack_require__("../../../../../src/app/service/login.service.ts");
//model
var usuario_model_1 = __webpack_require__("../../../../../src/app/model/usuario.model.ts");
var LoginComponente = (function () {
    function LoginComponente(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.usuarioPrepararLogar = new usuario_model_1.UsuarioModel(); // preparar usuario para logar
        this.setMessage();
    }
    LoginComponente.prototype.setMessage = function () {
        this.menssagem = 'Logando ' + (this.loginService.estadoLogin ? 'Dentro' : 'Saido');
    };
    LoginComponente.prototype.entrar = function () {
        var _this = this;
        this.menssagem = 'Carregando o a entrada';
        this.loginService.logarUsuario(this.usuarioPrepararLogar).subscribe(function (usuario) { return _this.usuario = usuario; }, function (err) { return console.log(err); }, function () { return _this.testarLogin(); });
        /*   */
    };
    LoginComponente.prototype.testarLogin = function () {
        var _this = this;
        console.log(this.usuario.estado);
        if (this.usuario.estado) {
            this.loginService.login().subscribe(function () {
                _this.setMessage();
                if (_this.loginService.estadoLogin) {
                    // Get the redirect URL from our auth service
                    // If no redirect has been set, use the default
                    var redirect = _this.loginService.redirectUrl ? _this.loginService.redirectUrl : '/relatorios-module';
                    console.log(_this.loginService.estadoLogin);
                    // Redirect the user
                    _this.router.navigate([redirect]);
                }
            });
        }
        else {
            this.menssagemLogar = "usuario ou senha invalidos";
        }
    };
    LoginComponente.prototype.sair = function () {
        this.loginService.logout();
        this.setMessage();
    };
    return LoginComponente;
}());
LoginComponente = __decorate([
    core_1.Component({
        selector: '',
        template: __webpack_require__("../../../../../src/app/login/login.componente.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], LoginComponente);
exports.LoginComponente = LoginComponente;
var _a, _b;
//# sourceMappingURL=login.componente.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.router.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
//Rotas Vendas
var login_componente_1 = __webpack_require__("../../../../../src/app/login/login.componente.ts");
// guardas
var login_guarda_service_1 = __webpack_require__("../../../../../src/app/service/login.guarda.service.ts");
var login_service_1 = __webpack_require__("../../../../../src/app/service/login.service.ts");
var LoginRoutes = [
    { path: 'login-componente',
        component: login_componente_1.LoginComponente },
];
var LoginRouter = (function () {
    function LoginRouter() {
    }
    return LoginRouter;
}());
LoginRouter = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(LoginRoutes)
        ],
        exports: [
            router_1.RouterModule
        ],
        providers: [
            login_guarda_service_1.LoginGuardaService,
            login_service_1.LoginService,
        ],
    })
], LoginRouter);
exports.LoginRouter = LoginRouter;
//# sourceMappingURL=login.router.js.map

/***/ }),

/***/ "../../../../../src/app/menu-principal/menu-principal.componente.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".colorgraph {\n  height: 7px;\n  border-top: 0;\n  background: #c4e17f;\n  border-radius: 5px;\n  background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu-principal/menu-principal.componente.html":
/***/ (function(module, exports) {

module.exports = "<hr class=\"colorgraph\"><br>\n                 \n                   <ul class=\"nav nav-pills nav-justified\">\n                    \n                        <li role=\"presentation\" routerLinkActive=\"active\">\n                            <a routerLink=\"menu-vendas\" routerLinkActive=\"active\">Vendas</a>\n                           <!-- <a [routerLink]=\"['menu-vendas', usuario._id]\" routerLinkActive=\"active\">Vendas</a><-->\n                        </li>\n                    \n                        <li role=\"presentation\" routerLinkActive=\"active\">\n                            <a routerLink=\"menu-recebidos\" routerLinkActive=\"active\">Recebidos</a>\n                        </li>\n               \n                        <li *ngIf=\"usuario.tipo == 'administrador'\" role=\"presentation\" routerLinkActive=\"active\"> \n                            <a routerLink=\"menu-cruds\" routerLinkActive=\"active\">CRUDS</a>\n                        </li>\n                   \n                        <li *ngIf=\"usuario.tipo == 'administrador'\" role=\"presentation\" routerLinkActive=\"active\">\n                            <a routerLink=\"menu-relatorios\" routerLinkActive=\"active\">Relatórios</a>\n                        </li>\n                        <li  role=\"presentation\" routerLinkActive=\"active\">\n                            <a>Bem Vindo: {{usuario.nome}}</a>\n                        </li>\n                        \n                    </ul>\n                <br>\n\n                <router-outlet></router-outlet> \n \n                    \n        \n            \n        \n        \n        \n        \n        \n        "

/***/ }),

/***/ "../../../../../src/app/menu-principal/menu-principal.componente.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var usuario_model_1 = __webpack_require__("../../../../../src/app/model/usuario.model.ts");
var usuario_service_1 = __webpack_require__("../../../../../src/app/service/usuario.service.ts");
var login_service_1 = __webpack_require__("../../../../../src/app/service/login.service.ts");
var MenuPrincipalComponente = (function () {
    function MenuPrincipalComponente(activedRouter, usuarioService, loginService) {
        this.activedRouter = activedRouter;
        this.usuarioService = usuarioService;
        this.loginService = loginService;
        this.usuario = new usuario_model_1.UsuarioModel();
    }
    MenuPrincipalComponente.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.activedRouter.snapshot.paramMap.get('id');
        this.usuarioService.getUsuario(id).subscribe(function (usuario) { return _this.usuario = usuario; }, Error, function () {
            _this.loginService.pushUsuarioLogin(_this.usuario);
        });
    };
    return MenuPrincipalComponente;
}());
MenuPrincipalComponente = __decorate([
    core_1.Component({
        selector: 'menu-principal',
        template: __webpack_require__("../../../../../src/app/menu-principal/menu-principal.componente.html"),
        styles: [__webpack_require__("../../../../../src/app/menu-principal/menu-principal.componente.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof usuario_service_1.UsuarioService !== "undefined" && usuario_service_1.UsuarioService) === "function" && _b || Object, typeof (_c = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _c || Object])
], MenuPrincipalComponente);
exports.MenuPrincipalComponente = MenuPrincipalComponente;
var _a, _b, _c;
//# sourceMappingURL=menu-principal.componente.js.map

/***/ }),

/***/ "../../../../../src/app/menu-principal/menu-principal.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
//componentes
var menu_principal_componente_1 = __webpack_require__("../../../../../src/app/menu-principal/menu-principal.componente.ts");
//rotas
var menu_principal_router_1 = __webpack_require__("../../../../../src/app/menu-principal/menu-principal.router.ts");
var MenuPrincipalModule = (function () {
    function MenuPrincipalModule() {
    }
    return MenuPrincipalModule;
}());
MenuPrincipalModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            menu_principal_router_1.MenuPrincipalRouter,
        ],
        declarations: [
            menu_principal_componente_1.MenuPrincipalComponente,
        ],
        exports: [],
        providers: []
    })
], MenuPrincipalModule);
exports.MenuPrincipalModule = MenuPrincipalModule;
//# sourceMappingURL=menu-principal.module.js.map

/***/ }),

/***/ "../../../../../src/app/menu-principal/menu-principal.router.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
//Component
var menu_principal_componente_1 = __webpack_require__("../../../../../src/app/menu-principal/menu-principal.componente.ts");
//modulos
var vendas_module_1 = __webpack_require__("../../../../../src/app/vendas/vendas.module.ts");
var recebidos_module_1 = __webpack_require__("../../../../../src/app/recebidos/recebidos.module.ts");
var cruds_module_1 = __webpack_require__("../../../../../src/app/cruds/cruds.module.ts");
var relatorios_module_1 = __webpack_require__("../../../../../src/app/relatorios/relatorios.module.ts");
function vendasRouteFactory() {
    return vendas_module_1.VendasModule;
}
exports.vendasRouteFactory = vendasRouteFactory;
function recebidosRouteFactory() {
    return recebidos_module_1.RecebidosModule;
}
exports.recebidosRouteFactory = recebidosRouteFactory;
function crudsRouteFactory() {
    return cruds_module_1.CrudsModule;
}
exports.crudsRouteFactory = crudsRouteFactory;
function relatoriosRouteFactory() {
    return relatorios_module_1.RelatoriosModule;
}
exports.relatoriosRouteFactory = relatoriosRouteFactory;
var MenuPrincialRoutes = [
    { path: 'menu-principal',
        component: menu_principal_componente_1.MenuPrincipalComponente,
        children: [{
                path: 'menu-vendas',
                loadChildren: vendasRouteFactory
            }, {
                path: 'menu-recebidos',
                loadChildren: recebidosRouteFactory,
            }, {
                path: 'menu-cruds',
                loadChildren: crudsRouteFactory,
            }, {
                path: 'menu-relatorios',
                loadChildren: relatoriosRouteFactory
            }
        ] },
];
var MenuPrincipalRouter = (function () {
    function MenuPrincipalRouter() {
    }
    return MenuPrincipalRouter;
}());
MenuPrincipalRouter = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(MenuPrincialRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], MenuPrincipalRouter);
exports.MenuPrincipalRouter = MenuPrincipalRouter;
//# sourceMappingURL=menu-principal.router.js.map

/***/ }),

/***/ "../../../../../src/app/model/cliente.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClienteModel = (function () {
    function ClienteModel() {
    }
    return ClienteModel;
}());
exports.ClienteModel = ClienteModel;
//# sourceMappingURL=cliente.model.js.map

/***/ }),

/***/ "../../../../../src/app/model/produto.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProdutoModel = (function () {
    function ProdutoModel() {
    }
    return ProdutoModel;
}());
exports.ProdutoModel = ProdutoModel;
exports.constRelatorioProdutos = [
    { id: 1, relatorioProdutos: 'Todos os produtos' },
    { id: 2, relatorioProdutos: 'Produtos com menor quantidade' },
    { id: 3, relatorioProdutos: 'Produtos em falta' }
];
//# sourceMappingURL=produto.model.js.map

/***/ }),

/***/ "../../../../../src/app/model/recebidos.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RecebidosModel = (function () {
    function RecebidosModel() {
    }
    return RecebidosModel;
}());
exports.RecebidosModel = RecebidosModel;
//# sourceMappingURL=recebidos.model.js.map

/***/ }),

/***/ "../../../../../src/app/model/sistema.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SistemaModel = (function () {
    function SistemaModel() {
    }
    return SistemaModel;
}());
exports.SistemaModel = SistemaModel;
//# sourceMappingURL=sistema.model.js.map

/***/ }),

/***/ "../../../../../src/app/model/usuario.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UsuarioModel = (function () {
    function UsuarioModel() {
    }
    return UsuarioModel;
}());
exports.UsuarioModel = UsuarioModel;
exports.constTipoUsuarios = [
    { id: 1, tipoUsuario: '' },
    { id: 2, tipoUsuario: 'administrador' },
    { id: 3, tipoUsuario: 'vendedor' },
];
//# sourceMappingURL=usuario.model.js.map

/***/ }),

/***/ "../../../../../src/app/model/vendas-a-vista.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var produto_model_1 = __webpack_require__("../../../../../src/app/model/produto.model.ts");
var VendasAvistaModel = (function () {
    function VendasAvistaModel() {
        this.produtos = [];
    }
    VendasAvistaModel.prototype.add = function (produto) {
        var produto2 = new produto_model_1.ProdutoModel();
        produto2 = produto;
        this.produtos.push(produto2);
    };
    return VendasAvistaModel;
}());
exports.VendasAvistaModel = VendasAvistaModel;
//# sourceMappingURL=vendas-a-vista.model.js.map

/***/ }),

/***/ "../../../../../src/app/recebidos/filter.cliente.recebidos.componente.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var FilterClienteRecebidosComponente = (function () {
    function FilterClienteRecebidosComponente() {
    }
    FilterClienteRecebidosComponente.prototype.transform = function (clientes, args) {
        if (!clientes || !args) {
            return clientes;
        }
        return clientes.filter(function (cliente) { return cliente.nome.indexOf(args) !== -1; });
    };
    return FilterClienteRecebidosComponente;
}());
FilterClienteRecebidosComponente = __decorate([
    core_1.Pipe({
        name: 'filterClienteRecebidos',
        pure: false
    })
], FilterClienteRecebidosComponente);
exports.FilterClienteRecebidosComponente = FilterClienteRecebidosComponente;
//transform(items: any[], filter: string) {
//  if (!items || !filter) {
//       return items;
// }
// return items.filter(item => item.name.indexOf(filter) !== -1); 
//# sourceMappingURL=filter.cliente.recebidos.componente.js.map

/***/ }),

/***/ "../../../../../src/app/recebidos/recebidos.componente.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-md-12\">\n      \t<div class=\"responsive\">\n\t    \t<div class=\"col-md-12\" class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                     <h3 class=\"panel-title\">Recebido</h3>\n                </div>\n                  <div class=\"panel-body\">\n                    <div class=\"col-md-4\">\n                        <p>Procurar Cliente:</p> <input type=\"text\" class=\"form-control\" (keyup)=\"onKey($event)\"/>\n                        <div *ngFor=\"let cliente of clientes | filterClienteRecebidos: values\" class=\"list-group\">\n                            <a class=\"list-group-item\" \n                            (click)=\"onSelectCliente(cliente)\" [ngClass]=\"{'active': clienteSelected == cliente}\" >\n                               <p class=\"list-group-item-text\">{{cliente.nome}} </p>\n                            </a>\n                        </div>\n\n                    </div>\n                    <div *ngIf=\"clienteSelected\" class=\"col-md-4\">\n                         <div *ngFor=\"let venda of vendasAvistaModel\" class=\"list-group\">\n                            <a class=\"list-group-item\" \n                            (click)=\"onSelectVenda(venda)\" [ngClass]=\"{'active': vendasAvistaSelected == venda}\" >\n                              <p class=\"list-group-item-text\">{{venda.data}}{{venda.tempo}} Valor da venda: {{venda.valorTotalVenda}}</p>\n                            </a>\n                        </div>\n                        <p>Soma das Vendas do Cliente:{{totalValorClienteVenda}}</p>\n                        <p>Total Recebidos:{{totalValorRecebidoCliente}}</p>\n                      \n                        <p>Debito do Cliente:{{clienteSelected.debitoDoCliente}}</p>\n                        <div>\n                            <p>Lista de Recebidos:</p>\n                            <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th>Data</th>\n                                        <th>Valor</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let recebido of recebidosCliente\" class=\"info\">\n                                        <td>{{recebido.data}},{{recebido.tempo}}</td>\n                                        <td>{{recebido.valor}}</td>\n                                    </tr>\n                                </tbody>\n\n                                \n                            </table>\n                        </div>\n                        <div>\n                            Digite o valor Recebido:\n                            <input  type=\"number\" [(ngModel)]=\"recebido.valor\" required\n                            #valor=\"ngModel\" class=\"form-control\">\n                                \n                            <button (click)=\"recebidoFunction(valor.value); valor.value=''\" required\n                                class=\"btn btn-primary btn-lg btn-block\" [disabled]=\"valor.errors\">Adicionar Recebido</button>\n\n                            <div *ngIf=\"valor.invalid && (valor.dirty && valor.touched)\"\n                                class=\"alert alert-danger\">\n                                        <div *ngIf=\"valor.errors.required\">\n                                       Digite um valor\n                                     </div>\n                                </div>\n                        </div>\n                        \n                    </div>\n                    <div class=\"col-md-4\">\n                        <table  class=\"table table-striped\">\n                            <th>Nome</th>\n                            <th>Valor</th>\n                                <tr  *ngFor=\"let produto of produtosSelected\">\n                                     <td>{{produto.nome}}</td>\n                                     <td>{{produto.valor}}</td>\n                                </tr>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n</div> \n"

/***/ }),

/***/ "../../../../../src/app/recebidos/recebidos.componente.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
//serviços
var cliente_service_1 = __webpack_require__("../../../../../src/app/service/cliente.service.ts");
var vendas_a_vista_service_1 = __webpack_require__("../../../../../src/app/service/vendas-a-vista.service.ts");
var produto_service_1 = __webpack_require__("../../../../../src/app/service/produto.service.ts");
var recebidos_services_1 = __webpack_require__("../../../../../src/app/service/recebidos.services.ts");
//model
var cliente_model_1 = __webpack_require__("../../../../../src/app/model/cliente.model.ts");
var recebidos_model_1 = __webpack_require__("../../../../../src/app/model/recebidos.model.ts");
var login_service_1 = __webpack_require__("../../../../../src/app/service/login.service.ts");
var RecebidosComponente = (function () {
    function RecebidosComponente(serviceCliente, vendasAVistaService, serviceProduto, recebidosService, loginService) {
        this.serviceCliente = serviceCliente;
        this.vendasAVistaService = vendasAVistaService;
        this.serviceProduto = serviceProduto;
        this.recebidosService = recebidosService;
        this.loginService = loginService;
        this.produtosSelected2 = [];
        //produtos selecidonados pela venda;
        this.produtosSelected = [];
        //total do valor das vendas do Cliente
        this.totalValorClienteVenda = 0;
        //total valor de recebido Cliente 
        this.totalValorRecebidoCliente = 0;
        //recebido adicionado    
        this.recebido = new recebidos_model_1.RecebidosModel();
    }
    RecebidosComponente.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.getUsuarioLogin().subscribe(function (usuario) { return _this.usuario = usuario; });
        this.serviceCliente.getClientes(this.usuario.sistema._id).subscribe(function (clientes) { return _this.clientes = clientes; });
        this.serviceProduto.getProdutos(this.usuario.sistema._id).subscribe(function (produtos) { return _this.produtos = produtos; });
    };
    //pega o cliente selecionado e pega as vendas dele
    RecebidosComponente.prototype.onSelectCliente = function (cliente) {
        var _this = this;
        //reseta a lista de produtos quando seleciona outra cliente
        this.produtosSelected.length = 0;
        //pega o cliente selecionado e busca pelo id as vendas do cliente
        this.clienteSelected = cliente;
        this.vendasAVistaService.
            listarVendasIdCliente(this.clienteSelected._id)
            .subscribe(function (vendas) { return _this.vendasAvistaModel = vendas; }, Error, function () { return _this.somarValoresVenda(); });
        //pega a lista
        this.pegaListaRecebidosPeloId(this.clienteSelected);
        //soma os valores recebidos do cliente
    };
    RecebidosComponente.prototype.onKey = function (event) {
        this.values = event.target.value;
    };
    RecebidosComponente.prototype.onSelectVenda = function (venda) {
        this.vendasAvistaSelected = venda;
        this.produtosSelected = venda.produtos;
    };
    //função que recebe o um valor;
    RecebidosComponente.prototype.recebidoFunction = function (valorRecebido) {
        //adiciona um recebido ao modelo de recebido no bd
        var recebido = new recebidos_model_1.RecebidosModel();
        recebido.cliente = this.clienteSelected;
        recebido.valor = valorRecebido;
        //a diciona um o id do sistema ao recebido
        console.log(this.usuario.sistema._id);
        recebido.sistema = this.usuario.sistema;
        console.log(recebido.sistema._id);
        this.recebidosService.adicionarRecebido(recebido).subscribe();
        //atualiza do debito do cliente 
        var clienteAtualizado = new cliente_model_1.ClienteModel();
        clienteAtualizado = this.clienteSelected;
        clienteAtualizado.debitoDoCliente = clienteAtualizado.debitoDoCliente - valorRecebido;
        this.serviceCliente.atualizarCliente(clienteAtualizado).subscribe();
        //atualizar lista recebidos
        this.pegaListaRecebidosPeloId(clienteAtualizado);
    };
    RecebidosComponente.prototype.pegaListaRecebidosPeloId = function (cliente) {
        var _this = this;
        this.recebidosService.listarRecebidosPeloIdCliente(cliente._id)
            .subscribe(function (recebidos) { return _this.recebidosCliente = recebidos; }, Error, function () { _this.totalValorRecebidos(); });
    };
    RecebidosComponente.prototype.somarValoresVenda = function () {
        var valorTotal = 0;
        this.vendasAvistaModel.forEach(function (venda) {
            valorTotal += venda.valorTotalVenda;
        });
        this.totalValorClienteVenda = valorTotal;
    };
    RecebidosComponente.prototype.totalValorRecebidos = function () {
        var somaValoresRecebidos = 0;
        this.recebidosCliente.forEach(function (recebido) {
            somaValoresRecebidos += recebido.valor;
        });
        this.totalValorRecebidoCliente = somaValoresRecebidos;
    };
    return RecebidosComponente;
}());
RecebidosComponente = __decorate([
    core_1.Component({
        selector: '',
        template: __webpack_require__("../../../../../src/app/recebidos/recebidos.componente.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof cliente_service_1.ClienteService !== "undefined" && cliente_service_1.ClienteService) === "function" && _a || Object, typeof (_b = typeof vendas_a_vista_service_1.VendasAvistaService !== "undefined" && vendas_a_vista_service_1.VendasAvistaService) === "function" && _b || Object, typeof (_c = typeof produto_service_1.ProdutoService !== "undefined" && produto_service_1.ProdutoService) === "function" && _c || Object, typeof (_d = typeof recebidos_services_1.RecebidosService !== "undefined" && recebidos_services_1.RecebidosService) === "function" && _d || Object, typeof (_e = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _e || Object])
], RecebidosComponente);
exports.RecebidosComponente = RecebidosComponente;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=recebidos.componente.js.map

/***/ }),

/***/ "../../../../../src/app/recebidos/recebidos.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
// Componentes Recebidos
var recebidos_componente_1 = __webpack_require__("../../../../../src/app/recebidos/recebidos.componente.ts");
// serviço
var recebidos_services_1 = __webpack_require__("../../../../../src/app/service/recebidos.services.ts");
var cliente_service_1 = __webpack_require__("../../../../../src/app/service/cliente.service.ts");
var vendas_a_vista_service_1 = __webpack_require__("../../../../../src/app/service/vendas-a-vista.service.ts");
//rotas
var recebidos_router_1 = __webpack_require__("../../../../../src/app/recebidos/recebidos.router.ts");
//filter
var filter_cliente_recebidos_componente_1 = __webpack_require__("../../../../../src/app/recebidos/filter.cliente.recebidos.componente.ts");
var RecebidosModule = (function () {
    function RecebidosModule() {
    }
    return RecebidosModule;
}());
RecebidosModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            //rota
            recebidos_router_1.RecebidosRouter,
        ],
        declarations: [
            // Componente de recebidos
            recebidos_componente_1.RecebidosComponente,
            filter_cliente_recebidos_componente_1.FilterClienteRecebidosComponente,
        ],
        providers: [recebidos_services_1.RecebidosService, cliente_service_1.ClienteService, vendas_a_vista_service_1.VendasAvistaService]
    })
], RecebidosModule);
exports.RecebidosModule = RecebidosModule;
//# sourceMappingURL=recebidos.module.js.map

/***/ }),

/***/ "../../../../../src/app/recebidos/recebidos.router.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
//Rotas Vendas
var recebidos_componente_1 = __webpack_require__("../../../../../src/app/recebidos/recebidos.componente.ts");
var RecebidosRoutes = [
    { path: '', component: recebidos_componente_1.RecebidosComponente },
];
var RecebidosRouter = (function () {
    function RecebidosRouter() {
    }
    return RecebidosRouter;
}());
RecebidosRouter = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(RecebidosRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], RecebidosRouter);
exports.RecebidosRouter = RecebidosRouter;
//# sourceMappingURL=recebidos.router.js.map

/***/ }),

/***/ "../../../../../src/app/relatorios/data-pick.componente.html":
/***/ (function(module, exports) {

module.exports = "   \n  <div>\n    <div class=\"card hidden\">\n      <pre class=\"card-block card-header\">Selected date is: <em *ngIf=\"dt\">{{ getDate() | date:'fullDate'}}</em></pre>\n    </div>\n    \n    <h4>Selecione uma data:</h4>\n    <h5>{{dataMoment}}</h5>\n    <div style=\"display:inline-block; min-height:290px;\">\n       \n      <datepicker [(ngModel)]=\"dt\" [minDate]=\"minDate\" [showWeeks]=\"true\" [dateDisabled]=\"dateDisabled\"></datepicker>\n    </div>\n    \n\n \n\n  </div>\n\n  <button type=\"button\" class=\"btn btn-primary btn-md\" (click)=\"today()\">Hoje</button>\n\n"

/***/ }),

/***/ "../../../../../src/app/relatorios/data-pick.componente.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var moment = __webpack_require__("../../../../moment/moment.js");
__webpack_require__("../../../../moment/locale/pt-br.js");
var DataPickComponent = (function () {
    function DataPickComponent() {
        this.dataMomentOutput = new core_1.EventEmitter();
        this.dt = new Date();
        this.minDate = void 0;
        this.formats = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY',
            'shortDate'];
        this.format = this.formats[0];
        this.dateOptions = {
            formatYear: 'YY',
            startingDay: 1
        };
        this.opened = false;
    }
    DataPickComponent.prototype.getDate = function () {
        var diaMoment = moment(this.dt);
        diaMoment.locale('pt-BR');
        this.dataMoment = diaMoment.format("dddd-MMMM-YYYY");
        var dataEventEmitter = diaMoment.format("DD-MM-YYYY");
        this.dataMomentOutput.emit(dataEventEmitter);
        return this.dt && this.dt.getTime() || new Date().getTime();
    };
    DataPickComponent.prototype.today = function () {
        this.dt = new Date();
    };
    // todo: implement custom class cases
    DataPickComponent.prototype.getDayClass = function (date, mode) {
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);
            for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
                var event = _a[_i];
                var currentDay = new Date(event.date).setHours(0, 0, 0, 0);
                if (dayToCheck === currentDay) {
                    return event.status;
                }
            }
        }
        return '';
    };
    DataPickComponent.prototype.disabled = function (date, mode) {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };
    DataPickComponent.prototype.open = function () {
        this.opened = !this.opened;
    };
    return DataPickComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DataPickComponent.prototype, "dataMomentOutput", void 0);
DataPickComponent = __decorate([
    core_1.Component({
        selector: 'data-pick',
        template: __webpack_require__("../../../../../src/app/relatorios/data-pick.componente.html")
    }),
    __metadata("design:paramtypes", [])
], DataPickComponent);
exports.DataPickComponent = DataPickComponent;
//# sourceMappingURL=data-pick.componente.js.map

/***/ }),

/***/ "../../../../../src/app/relatorios/relatorios.componente.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n\t<div class=\"col-md-2\">\n\t\t<ul class=\"nav nav-pills nav-stacked\">\n\t    \t<li role=\"presentation\" routerLinkActive=\"active\">\n\t\t\t\t<a routerLink=\"resumo-do-dia-componente\">Resumo do dia</a>\n\t\t\t</li>\n\t\t\t<li role=\"presentation\" routerLinkActive=\"active\">\n\t\t\t\t<a routerLink=\"vendas-componente\">Vendas</a>\n            </li>\n            <li role=\"presentation\" routerLinkActive=\"active\">\n\t\t\t\t<a routerLink=\"estoque-componente\">Estoque</a>\n\t\t\t</li>\n\t\t</ul>\n    </div>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/relatorios/relatorios.componente.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var RelatoriosComponente = (function () {
    function RelatoriosComponente() {
    }
    return RelatoriosComponente;
}());
RelatoriosComponente = __decorate([
    core_1.Component({
        selector: '',
        template: __webpack_require__("../../../../../src/app/relatorios/relatorios.componente.html")
    })
], RelatoriosComponente);
exports.RelatoriosComponente = RelatoriosComponente;
//# sourceMappingURL=relatorios.componente.js.map

/***/ }),

/***/ "../../../../../src/app/relatorios/relatorios.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
// Componentes Vendas
var relatorios_componente_1 = __webpack_require__("../../../../../src/app/relatorios/relatorios.componente.ts");
var estoque_componente_1 = __webpack_require__("../../../../../src/app/relatorios/resumos/estoque.componente.ts");
var resumo_do_dia_componente_1 = __webpack_require__("../../../../../src/app/relatorios/resumos/resumo-do-dia.componente.ts");
var vendas_componente_1 = __webpack_require__("../../../../../src/app/relatorios/resumos/vendas.componente.ts");
var data_pick_componente_1 = __webpack_require__("../../../../../src/app/relatorios/data-pick.componente.ts");
// serviço
var relatorios_services_1 = __webpack_require__("../../../../../src/app/service/relatorios.services.ts");
var produto_service_1 = __webpack_require__("../../../../../src/app/service/produto.service.ts");
//rotas
var relatorios_router_1 = __webpack_require__("../../../../../src/app/relatorios/relatorios.router.ts");
//pipes
var estoque_pipe_1 = __webpack_require__("../../../../../src/app/relatorios/resumos/estoque.pipe.ts");
var filter_cliente_venda_componente_1 = __webpack_require__("../../../../../src/app/relatorios/resumos/filter.cliente.venda.componente.ts");
var ngx_bootstrap_1 = __webpack_require__("../../../../ngx-bootstrap/index.js");
//modules
var RelatoriosModule = (function () {
    function RelatoriosModule() {
    }
    return RelatoriosModule;
}());
RelatoriosModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            relatorios_router_1.RelatoriosRouter,
            ngx_bootstrap_1.DatepickerModule.forRoot(),
        ],
        declarations: [
            relatorios_componente_1.RelatoriosComponente,
            resumo_do_dia_componente_1.ResumoDoDiaComponente,
            estoque_componente_1.EstoqueComponente,
            vendas_componente_1.VendasComponente,
            estoque_pipe_1.EstoquePipe,
            data_pick_componente_1.DataPickComponent,
            filter_cliente_venda_componente_1.FilterClienteVendaComponente
        ],
        providers: [relatorios_services_1.RelatoriosService, produto_service_1.ProdutoService]
    })
], RelatoriosModule);
exports.RelatoriosModule = RelatoriosModule;
//# sourceMappingURL=relatorios.module.js.map

/***/ }),

/***/ "../../../../../src/app/relatorios/relatorios.router.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
// componentes
var relatorios_componente_1 = __webpack_require__("../../../../../src/app/relatorios/relatorios.componente.ts");
var estoque_componente_1 = __webpack_require__("../../../../../src/app/relatorios/resumos/estoque.componente.ts");
var resumo_do_dia_componente_1 = __webpack_require__("../../../../../src/app/relatorios/resumos/resumo-do-dia.componente.ts");
var vendas_componente_1 = __webpack_require__("../../../../../src/app/relatorios/resumos/vendas.componente.ts");
var RelatoriosRoutes = [
    { path: '',
        component: relatorios_componente_1.RelatoriosComponente,
        children: [{
                path: 'resumo-do-dia-componente',
                component: resumo_do_dia_componente_1.ResumoDoDiaComponente,
            }, {
                path: 'vendas-componente',
                component: vendas_componente_1.VendasComponente,
            }, {
                path: 'estoque-componente',
                component: estoque_componente_1.EstoqueComponente,
            }]
    }
];
var RelatoriosRouter = (function () {
    function RelatoriosRouter() {
    }
    return RelatoriosRouter;
}());
RelatoriosRouter = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(RelatoriosRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], RelatoriosRouter);
exports.RelatoriosRouter = RelatoriosRouter;
//# sourceMappingURL=relatorios.router.js.map

/***/ }),

/***/ "../../../../../src/app/relatorios/resumos/estoque.componente.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10\">\n    <h3>RESUMO ESTOQUE</h3>\n    \t<div class=\"responsive\">\n\t    \t<div class=\"col-md-10\" class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                     <h3 class=\"panel-title\">Vendidos</h3>\n                </div>\n                <div class=\"panel-body\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"sel1\">Select list:</label>\n                                <select [(ngModel)]=\"valueSelect\" >\n                                    <option *ngFor=\"let relatorio of arrayRelatorioProdutos\" \n                                    [ngValue]=\"relatorio.id\">\n                                    {{relatorio.relatorioProdutos}}\n                                    </option>\n                                </select>\n                                {{valueSelect}}\n\n                        </div>\n          \t        <table class=\"table table-striped\">\n                        <th>Codigo</th>\n\t\t\t\t        <th>Nome</th>\n                        <th>Quantidade</th>\n                        <th>Valor</th>\n\t\t\t                <tr *ngFor=\"let produto of listaProdutos | filterEstoque: valueSelect\" class=\"success\">\n                        \t    <td>{{produto.codigo}}</td>\n                                <td>{{produto.nome}}</td>\n                                <td>{{produto.quantidade}}</td>\n\t\t\t\t\t\t        <td>{{produto.valor}}</td>\n                            </tr>\n                    </table>\n                    </div>\n                    <div class=\"col-md-4\">\n                        \n                    </div>\n                </div>\n            </div>\n        </div>\n</div> \n"

/***/ }),

/***/ "../../../../../src/app/relatorios/resumos/estoque.componente.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
//serviços
var produto_service_1 = __webpack_require__("../../../../../src/app/service/produto.service.ts");
//
var produto_model_1 = __webpack_require__("../../../../../src/app/model/produto.model.ts");
var login_service_1 = __webpack_require__("../../../../../src/app/service/login.service.ts");
var EstoqueComponente = (function () {
    function EstoqueComponente(produtoService, loginService) {
        this.produtoService = produtoService;
        this.loginService = loginService;
        this.arrayRelatorioProdutos = produto_model_1.constRelatorioProdutos;
    }
    EstoqueComponente.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.getUsuarioLogin().subscribe(function (usuario) { return _this.usuario = usuario; });
        this.produtoService.getProdutos(this.usuario.sistema._id).subscribe(function (produtos) { return _this.listaProdutos = produtos; });
    };
    return EstoqueComponente;
}());
EstoqueComponente = __decorate([
    core_1.Component({
        selector: '',
        template: __webpack_require__("../../../../../src/app/relatorios/resumos/estoque.componente.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof produto_service_1.ProdutoService !== "undefined" && produto_service_1.ProdutoService) === "function" && _a || Object, typeof (_b = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _b || Object])
], EstoqueComponente);
exports.EstoqueComponente = EstoqueComponente;
var _a, _b;
//# sourceMappingURL=estoque.componente.js.map

/***/ }),

/***/ "../../../../../src/app/relatorios/resumos/estoque.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var EstoquePipe = (function () {
    function EstoquePipe() {
    }
    EstoquePipe.prototype.transform = function (produtos, args) {
        if (!produtos || !args) {
            return produtos;
        }
        else {
            if (args == 1) {
                console.log("primeiro opção");
                return produtos;
            }
            else if (args == 2) {
                console.log("segunda opção");
                return produtos.filter(function (produto) { return produto.quantidade < 4; });
            }
            else if (args == 3) {
                console.log("terceira opção");
                return produtos.filter(function (produto) { return produto.quantidade == 0; });
            }
            else {
                return produtos;
            }
        }
    };
    return EstoquePipe;
}());
EstoquePipe = __decorate([
    core_1.Pipe({
        name: 'filterEstoque',
        pure: false
    })
], EstoquePipe);
exports.EstoquePipe = EstoquePipe;
//# sourceMappingURL=estoque.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/relatorios/resumos/filter.cliente.venda.componente.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var FilterClienteVendaComponente = (function () {
    function FilterClienteVendaComponente() {
    }
    FilterClienteVendaComponente.prototype.transform = function (cliente, clientes) {
        console.log(cliente);
        console.log(clientes);
    };
    return FilterClienteVendaComponente;
}());
FilterClienteVendaComponente = __decorate([
    core_1.Pipe({
        name: 'filterClienteVenda',
        pure: false,
    })
], FilterClienteVendaComponente);
exports.FilterClienteVendaComponente = FilterClienteVendaComponente;
//# sourceMappingURL=filter.cliente.venda.componente.js.map

/***/ }),

/***/ "../../../../../src/app/relatorios/resumos/resumo-do-dia.componente.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10\">\n    \t<div class=\"responsive\">\n\t    \t<div class=\"col-md-10\" class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                     <h3 class=\"panel-title\">Vendidos</h3>\n                </div>\n                \n\t        \t<div class=\"panel-body\">\n\n                    <div class=\"col-md-6\">\n                        <div *ngFor=\"let vendas of vendasAvista\" class=\"list-group\">\n                            <a class=\"list-group-item\" \n                            (click)=\"onSelect(vendas)\" [ngClass]=\"{'active': vendasSelected == vendas}\" >\n                            <h4 class=\"list-group-item-heading\">Cliente - {{vendas.tipo}} </h4>\n                                <p class=\"list-group-item-text\">{{vendas.data}},{{vendas.tempo}},\n                                Total vendas: {{vendas.valorTotalVenda}}  </p>\n\n                            </a>\n                        </div>\n                        <div class=\"panel panel-primary\"><h4>Total vendas:{{valorTotalVendasDoDia}}</h4></div>\n                    </div>\n                        <div *ngIf=\"produtosSelected2\" class=\"col-md-4\">\n                            <table  class=\"table table-striped\">\n\t\t\t\t                <th>Nome</th>\n\t\t\t\t                <th>Valor</th>\n\t\t\t\t                    <tr  *ngFor=\"let produto of produtosSelected2\">\n                                        <td>{{produto.nome}}</td>\n                                        <td>{{produto.valor}}</td>\n\t\t\t\t\t\t            </tr>\n\t\t\t                </table>\n                        </div>\n                </div>\n                <div class=\"panel-heading\">\n                     <h3 class=\"panel-title\">Recebidos</h3>\n                </div>\n\n                <div class=\"panel-body\">\n                      <div class=\"col-md-6\"> \n                            <table class=\"table table-striped\">\n                                <th>Cliente</th>\n                                <th>Data</th>\n                                <th>Valor</th>\n                              <tr *ngFor=\"let recebido of recebidosDoDia\"  >\n                                <td>{{recebido.cliente.nome}}</td>\n                                <td>{{recebido.data}}</td>\n                                <td>{{recebido.valor}}</td>\n                               \n                             </tr>\n                             \n                          </table>\n                          <div class=\"panel panel-primary\"><h4>Total recebidos:{{totalDeRecebidos}}</h4></div>\n                        </div>\n                </div>\n            </div>\n          </div>\n\t    <div class=\"panel panel-primary\"><h4>Apurado do Dia:{{ valorTotalVendasDoDia + totalDeRecebidos}}</h4></div>\n    </div> \n"

/***/ }),

/***/ "../../../../../src/app/relatorios/resumos/resumo-do-dia.componente.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
//SERVIÇOS
var relatorios_services_1 = __webpack_require__("../../../../../src/app/service/relatorios.services.ts");
var produto_service_1 = __webpack_require__("../../../../../src/app/service/produto.service.ts");
var recebidos_services_1 = __webpack_require__("../../../../../src/app/service/recebidos.services.ts");
var cliente_service_1 = __webpack_require__("../../../../../src/app/service/cliente.service.ts");
var login_service_1 = __webpack_require__("../../../../../src/app/service/login.service.ts");
var ResumoDoDiaComponente = (function () {
    function ResumoDoDiaComponente(relatoriosService, produtoService, recebidosService, clienteService, loginService) {
        this.relatoriosService = relatoriosService;
        this.produtoService = produtoService;
        this.recebidosService = recebidosService;
        this.clienteService = clienteService;
        this.loginService = loginService;
        //lista todas as vendas
        this.vendasAvista = [];
        //produtos selecionados
        this.produtosSelected = [];
        this.produtosSelected2 = [];
        //lista de todos produtos filtrados pela venda
        //Quando o usuario clica na lista de vendas, cada lista de vendas tem uma lista de produtos
        this.produtosFiltrados = [];
        //variavel que soma todos os valores das vendas do dia e posta da tela
        this.valorTotalVendasDoDia = 0;
        //clientes lista de clientes do servidor
        this.clientes = [];
        //nome dos clientes recebido
        this.clientesRecebido = [];
    }
    ResumoDoDiaComponente.prototype.ngOnInit = function () {
        var _this = this;
        //pega a lista de vendas vinda do servidor
        this.loginService.getUsuarioLogin().subscribe(function (usuario) { return _this.usuario = usuario; });
        this.relatoriosService.getRelatorioVendasDoDia(this.usuario.sistema._id)
            .subscribe(function (vendasAVista) { return _this.vendasAvista = vendasAVista; }, Error, function () {
            //codigo que pega as vendas do db e posta a soma de todas as vendas
            _this.vendasAvista.forEach(function (venda) {
                _this.valorTotalVendasDoDia += venda.valorTotalVenda;
            });
        });
        //pega a lista de produtos do servidor
        // this.produtoService.getProdutos(this.usuario.sistema._id).subscribe(produtos => this.produtos = produtos);
        //pega lista de recebidos do dia
        this.relatoriosService.getRelatorioRecebidosDoDia(this.usuario.sistema._id)
            .subscribe(function (recebidos) { return _this.recebidosDoDia = recebidos; }, Error, function () { return _this.somaValoresRecebidos(); });
    };
    ResumoDoDiaComponente.prototype.onSelect = function (vendasAvista) {
        //aparece na lista de produtos da venda
        this.vendasSelected = vendasAvista;
        this.produtosSelected2 = this.vendasSelected.produtos;
    };
    ResumoDoDiaComponente.prototype.somaValoresRecebidos = function () {
        var valoresSomados = 0;
        this.recebidosDoDia.forEach(function (recebido) {
            valoresSomados += recebido.valor;
        });
        this.totalDeRecebidos = valoresSomados;
    };
    return ResumoDoDiaComponente;
}());
ResumoDoDiaComponente = __decorate([
    core_1.Component({
        selector: '',
        template: __webpack_require__("../../../../../src/app/relatorios/resumos/resumo-do-dia.componente.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof relatorios_services_1.RelatoriosService !== "undefined" && relatorios_services_1.RelatoriosService) === "function" && _a || Object, typeof (_b = typeof produto_service_1.ProdutoService !== "undefined" && produto_service_1.ProdutoService) === "function" && _b || Object, typeof (_c = typeof recebidos_services_1.RecebidosService !== "undefined" && recebidos_services_1.RecebidosService) === "function" && _c || Object, typeof (_d = typeof cliente_service_1.ClienteService !== "undefined" && cliente_service_1.ClienteService) === "function" && _d || Object, typeof (_e = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _e || Object])
], ResumoDoDiaComponente);
exports.ResumoDoDiaComponente = ResumoDoDiaComponente;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=resumo-do-dia.componente.js.map

/***/ }),

/***/ "../../../../../src/app/relatorios/resumos/vendas.componente.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10\">\n      \t<div class=\"responsive\">\n\t    \t<div class=\"col-md-10\" class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                     <h3 class=\"panel-title\">Vendidos</h3>\n                </div>\n\t        \t<div class=\"panel-body\">\n                    <div class=\"col-md-6\">\n                        \n                        <data-pick (dataMomentOutput)=\"modificaData($event)\"></data-pick>\n                        \n                        <button class=\"btn btn-primary btn-md\" (click)=\"buscarData()\">Buscar</button>\n                        <button class=\"btn btn-primary btn-md\" (click)=\"ngOnInit()\">Todas</button>\n                        <br>\n                        <div *ngFor=\"let vendas of vendasAvista\"\n                        class=\"list-group\">\n                            <a class=\"list-group-item\" \n                            (click)=\"onSelect(vendas)\" [ngClass]=\"{'active': vendasSelected == vendas}\" >\n                               <h4 class=\"list-group-item-heading\">{{vendas.tipo}} </h4>\n                                    <div class=\"pull-right\">\n                                        <button class=\"btn btn-danger btn-xs\" (click)=\"deleteVenda(vendas)\">X</button>\n                                    </div>\n                               \n                                <p class=\"list-group-item-text\">{{vendas.data}}, {{vendas.tempo}} \n                                Valor Total: {{vendas.valorTotalVenda}} </p>\n                                      \n                            </a>\n                        </div>\n\n                        <div class=\"panel panel-primary\"><h4>Total Vendas:{{ TotalValoresDasVendas}}</h4></div>\n          \t           \n                    </div>\n                        <div *ngIf=\"produtosSelected\" class=\"col-md-4\">\n                            <table  class=\"table table-striped\">\n\t\t\t\t                <th>Nome</th>\n\t\t\t\t                <th>Valor</th>\n\t\t\t\t                    <tr  *ngFor=\"let produto of produtosSelected\">\n                                        <td>{{produto.nome}}</td>\n                                        <td>{{produto.valor}}</td>\n\t\t\t\t\t\t            </tr>\n\t\t\t                </table>\n                        </div>\n                </div>\n                <div class=\"panel-heading\">\n                     <h3 class=\"panel-title\">Recebidos</h3>\n                </div>\n\n                <div class=\"panel-body\">\n                    <div class=\"col-md-6\"> \n               \t    <table class=\"table table-striped\">\n                    <th>Cliente</th>\n                    <th>Data</th>\n\t\t\t\t    <th>Valor</th>\n\t\t\t\t        <tr *ngFor=\"let recebido of recebidos\" class=\"success\">\n                            <td>{{recebido.cliente.nome}}</td>\n                            <td>{{recebido.momento}}</td>\n                            <td>{{recebido.valor}}</td>\n                            <td><div class=\"pull-right\">\n                                <button class=\"btn btn-danger btn-xs\" (click)=\"deleteRecebido(recebido)\">X</button>\n                            </div></td>\t\t\t\t    \n                        </tr>\n                    </table>\n                        <div class=\"panel panel-primary\"><h4>Total Recebidos:{{ TotalValoresRecebidos}}</h4></div>\n                    </div>\n                    \n                </div>\n\n\n            </div>\n          </div>\n        <div class=\"panel panel-primary\"><h4>Apurado do Dia: {{TotalValoresDasVendas+TotalValoresRecebidos}}</h4></div>\n        \n   \n    </div> \n"

/***/ }),

/***/ "../../../../../src/app/relatorios/resumos/vendas.componente.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
//SERVIÇOS
var relatorios_services_1 = __webpack_require__("../../../../../src/app/service/relatorios.services.ts");
var produto_service_1 = __webpack_require__("../../../../../src/app/service/produto.service.ts");
var recebidos_services_1 = __webpack_require__("../../../../../src/app/service/recebidos.services.ts");
var vendas_a_vista_service_1 = __webpack_require__("../../../../../src/app/service/vendas-a-vista.service.ts");
var cliente_service_1 = __webpack_require__("../../../../../src/app/service/cliente.service.ts");
var login_service_1 = __webpack_require__("../../../../../src/app/service/login.service.ts");
var VendasComponente = (function () {
    function VendasComponente(relatoriosService, produtoService, recebidosService, vendasAvistaService, clientesServices, loginService) {
        this.relatoriosService = relatoriosService;
        this.produtoService = produtoService;
        this.recebidosService = recebidosService;
        this.vendasAvistaService = vendasAvistaService;
        this.clientesServices = clientesServices;
        this.loginService = loginService;
        //lista todas as vendas
        this.vendasAvista = [];
        //produtos selecionados
        this.produtosSelected = [];
        //clintes vindos so servidor
        this.clientes = [];
        //Quando o usuario clica na lista de vendas, cada lista de vendas tem uma lista de produtos
        this.produtosFiltrados = [];
        //variavel que soma todos os valores das vendas do dia e posta da tela
        this.TotalValoresDasVendas = 0;
        this.TotalValoresRecebidos = 0;
        //recebidos model lista de recebidos
        this.recebidos = [];
        //nome dos clientes recebido( lista os nomes dos clientes que receberam do dia)
        this.clientesRecebido = [];
    }
    VendasComponente.prototype.ngOnInit = function () {
        var _this = this;
        //pega o usuario do servidor
        this.loginService.getUsuarioLogin().subscribe(function (usuario) { return _this.usuario = usuario; });
        //pega a lista de produtos do servidor
        this.produtoService.getProdutos(this.usuario.sistema._id).subscribe(function (produtos) { return _this.produtos = produtos; });
        this.recebidosService.getRecebidos(this.usuario.sistema._id).subscribe(function (recebidos) { return _this.recebidos = recebidos; }, Error, function () { _this.somaValoresDosRecebidos(); });
        this.vendasAvistaService.getVendas(this.usuario.sistema._id).subscribe(function (vendas) { return _this.vendasAvista = vendas; }, Error, function () { _this.somaValoresDasVendas(); });
    };
    VendasComponente.prototype.onSelect = function (vendasAvista) {
        //iniciaza as variaveis das lista com 0, para que quando o usuario clicar 2 vezes zerar tudo
        //this.produtosSelected.length = 0;
        //this.produtosFiltrados.length = 0;
        //pega a lista de venda clica do usuario
        this.vendasSelected = vendasAvista;
        this.produtosSelected = this.vendasSelected.produtos;
        //coloca a lista de vendas selecionados e coloca dentro de um array de produtos selecionados
        /* this.vendasSelected.produtos.forEach((value, index) => {
             // console.log(_id._id);
             this.produtosSelected.push(value);
 
         });
 
         //pega a lista de venda clicada pelo usuario, junto da lista de vendas vindas do bd
         //e compara os produtos clicados pelo usuario com a lista de produtos vindo do bd
         this.produtosSelected.forEach((value2, index) => {
             console.log(value2);
             this.produtos.forEach((value, index) => {
                 if (value2 == value._id) {
                     this.produtosFiltrados.push(value);
                 }
             })
         })
         */
    };
    VendasComponente.prototype.deleteVenda = function (venda) {
        var _this = this;
        var idVenda = venda._id;
        this.relatoriosService.deleteVenda(idVenda)
            .subscribe(function () { _this.vendasAvista = _this.vendasAvista.filter(function (v) { return v !== venda; }); }, Error, function () { _this.somaValoresDasVendas(); });
    };
    VendasComponente.prototype.deleteRecebido = function (recebido) {
        var _this = this;
        this.recebidosService.deleteRecebido(recebido._id)
            .subscribe(function () { _this.recebidos = _this.recebidos.filter(function (r) { return r !== recebido; }); }, Error, function () { _this.somaValoresDosRecebidos(); });
    };
    //modifica a data escohida pelo usuario
    VendasComponente.prototype.modificaData = function (data) {
        this.dataSelected = data;
    };
    //busca as vendas e os recebidos pela data
    VendasComponente.prototype.buscarData = function () {
        var _this = this;
        var dados = { data: this.dataSelected, idSistema: this.usuario.sistema._id };
        this.relatoriosService.getRelatorioVendasPelaData(dados)
            .subscribe(function (vendas) { return _this.vendasAvista = vendas; }, Error, function () { return _this.somaValoresDasVendas(); });
        this.relatoriosService.getRelatorioRecebidosPelaData(dados)
            .subscribe(function (recebidos) { return _this.recebidos = recebidos; }, Error, function () { return _this.somaValoresDosRecebidos(); });
    };
    //soma os valores das vendas e guarda em uma variavel
    VendasComponente.prototype.somaValoresDasVendas = function () {
        var valoresSomados = 0;
        this.vendasAvista.forEach(function (venda) {
            valoresSomados += venda.valorTotalVenda;
        });
        this.TotalValoresDasVendas = valoresSomados;
    };
    //soma os valores dos recebidos e guarda em uma variavel
    VendasComponente.prototype.somaValoresDosRecebidos = function () {
        var valoresSomados = 0;
        this.recebidos.forEach(function (recebidos) {
            valoresSomados += recebidos.valor;
        });
        this.TotalValoresRecebidos = valoresSomados;
        // this.listarNomesClientes();
        //chamo função de listar nome dos clientes recebidos para a atualizar a tablea dos nomes do clientes que pagaram um valor
    };
    return VendasComponente;
}());
VendasComponente = __decorate([
    core_1.Component({
        selector: '',
        template: __webpack_require__("../../../../../src/app/relatorios/resumos/vendas.componente.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof relatorios_services_1.RelatoriosService !== "undefined" && relatorios_services_1.RelatoriosService) === "function" && _a || Object, typeof (_b = typeof produto_service_1.ProdutoService !== "undefined" && produto_service_1.ProdutoService) === "function" && _b || Object, typeof (_c = typeof recebidos_services_1.RecebidosService !== "undefined" && recebidos_services_1.RecebidosService) === "function" && _c || Object, typeof (_d = typeof vendas_a_vista_service_1.VendasAvistaService !== "undefined" && vendas_a_vista_service_1.VendasAvistaService) === "function" && _d || Object, typeof (_e = typeof cliente_service_1.ClienteService !== "undefined" && cliente_service_1.ClienteService) === "function" && _e || Object, typeof (_f = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _f || Object])
], VendasComponente);
exports.VendasComponente = VendasComponente;
var _a, _b, _c, _d, _e, _f;
/*
    //lista os nomes das vendas e dos recebidos. o motivo disso é que quando ele vem do bd em vem como objeto id
    listarNomesClientes() {
        this.vendasAvista.map((value) => {
            this.clientes.forEach((cliente) => {
                if (value.cliente == cliente._id) {
                    value.cliente = cliente.nome;
                }
                if (value.cliente === undefined || value.cliente === null) {
                    value.cliente = "Venda a Vista";
                }
            })
        })
        this.listarNomesRecebidos();

    }

    listarNomesRecebidos() {
        this.recebidos.map((value) => {
            this.clientes.forEach((cliente) => {
                if (value.cliente == cliente._id) {
                    value.cliente = cliente.nome;
                }
            })
        })
    }
}
*/
//# sourceMappingURL=vendas.componente.js.map

/***/ }),

/***/ "../../../../../src/app/service/can.deactivate.guard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var CanDeactivateGuard = (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    return CanDeactivateGuard;
}());
CanDeactivateGuard = __decorate([
    core_1.Injectable()
], CanDeactivateGuard);
exports.CanDeactivateGuard = CanDeactivateGuard;
//# sourceMappingURL=can.deactivate.guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/cliente.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var http_2 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/add/operator/catch.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
var ClienteService = (function () {
    function ClienteService(http) {
        this.http = http;
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.clientesUrl = 'http://localhost:3000/api/clientes'; // URL to web api
        this.clienteUrl = 'http://localhost:3000/api/cliente';
        console.log("cliente service inicializado");
    }
    //getClientes(): Promise<ClienteModel[]> {
    //return this.http.get(this.clientesUrl)
    //         .toPromise()
    //       .then(response => response.json().data as ClienteModel[])
    //     .catch(this.handleError);
    // }
    ClienteService.prototype.getClientes = function (_idSistema) {
        var url = this.clientesUrl + "/" + _idSistema;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ClienteService.prototype.getClientes2 = function () {
        return this.http.get(this.clientesUrl).map(function (res) { return res.json(); });
    };
    ClienteService.prototype.getCliente = function (_id) {
        var url = this.clienteUrl + "/" + _id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ClienteService.prototype.adicionarCliente = function (cliente) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.clientesUrl, cliente, options).map(this.extractData);
    };
    ClienteService.prototype.deleteCliente = function (_id) {
        var url = this.clientesUrl + "/" + _id;
        return this.http.delete(url).map(this.extractData);
    };
    ClienteService.prototype.atualizarCliente = function (cliente) {
        var url = this.clientesUrl;
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.put(url, cliente, options).map(function (res) { return res.json(); });
    };
    ClienteService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body.data || {};
    };
    ClienteService.prototype.handleError = function (error) {
        console.error('Ocorreu um erro', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ClienteService;
}());
ClienteService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], ClienteService);
exports.ClienteService = ClienteService;
var _a;
//# sourceMappingURL=cliente.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/login.guarda.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var login_service_1 = __webpack_require__("../../../../../src/app/service/login.service.ts");
var LoginGuardaService = (function () {
    function LoginGuardaService(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    LoginGuardaService.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    LoginGuardaService.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    LoginGuardaService.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.checkLogin(url);
    };
    LoginGuardaService.prototype.checkLogin = function (url) {
        if (this.loginService.estadoLogin) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.loginService.redirectUrl = url;
        console.log(this.loginService.estadoLogin);
        console.log(this.loginService.redirectUrl);
        this.router.navigate(['/login-module']);
        return false;
    };
    return LoginGuardaService;
}());
LoginGuardaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], LoginGuardaService);
exports.LoginGuardaService = LoginGuardaService;
var _a, _b;
//# sourceMappingURL=login.guarda.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/login.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var http_2 = __webpack_require__("../../../http/@angular/http.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
__webpack_require__("../../../../rxjs/add/observable/of.js");
__webpack_require__("../../../../rxjs/add/operator/do.js");
__webpack_require__("../../../../rxjs/add/operator/delay.js");
__webpack_require__("../../../../rxjs/add/operator/catch.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.estadoLogin = false;
        this.usuarioUrl = 'http://localhost:3000/api/login';
    }
    LoginService.prototype.login = function () {
        var _this = this;
        return Observable_1.Observable.of(true).delay(1000).do(function (val) { return _this.estadoLogin = true; });
    };
    LoginService.prototype.logarUsuario = function (usuario) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        console.log(usuario.email);
        return this.http.post(this.usuarioUrl, usuario, options).map(function (res) { return res.json(); });
    };
    //retorna o usuario vindo da tela menu como observador
    LoginService.prototype.getUsuarioLogin = function () {
        return Observable_1.Observable.of(this.usuarioModel);
    };
    //coloca o usuario dentro do serviço de login
    LoginService.prototype.pushUsuarioLogin = function (usuario) {
        this.usuarioModel = usuario;
    };
    LoginService.prototype.logout = function () {
        this.estadoLogin = false;
    };
    LoginService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], LoginService);
exports.LoginService = LoginService;
var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/mask.services.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var MaskServices = (function () {
    function MaskServices() {
    }
    MaskServices.prototype.maskCpf = function () {
        return [/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    };
    MaskServices.prototype.maskCep = function () {
        return [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    };
    MaskServices.prototype.maskNumero = function () {
        return [/[0-9]/, /\d/, /\d/, /\d/];
    };
    MaskServices.prototype.maskTelefoneFixo = function () {
        return ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    };
    MaskServices.prototype.maskTelefoneCelular = function () {
        return ['(', /[0-9]/, /\d/, ')', ' ', /\d/, '.', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    };
    return MaskServices;
}());
MaskServices = __decorate([
    core_1.Injectable()
], MaskServices);
exports.MaskServices = MaskServices;
//# sourceMappingURL=mask.services.js.map

/***/ }),

/***/ "../../../../../src/app/service/produto.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var http_2 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/add/operator/catch.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
var ProdutoService = (function () {
    function ProdutoService(http) {
        this.http = http;
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.produtosUrl = 'http://localhost:3000/api/produtos'; // URL to web api
        this.produtoUrl = 'http://localhost:3000/api/produto'; // URL to web api
        console.log("produtos service inicializado");
    }
    ProdutoService.prototype.getProdutos = function (_idSistema) {
        var url = this.produtosUrl + "/" + _idSistema;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProdutoService.prototype.getProduto = function (_id) {
        var url = this.produtoUrl + "/" + _id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProdutoService.prototype.adicionarProduto = function (produto) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        console.log(produto);
        return this.http.post(this.produtosUrl, produto, options).map(this.extractData);
    };
    ProdutoService.prototype.deleteProduto = function (_id) {
        var url = this.produtosUrl + "/" + _id;
        return this.http.delete(url).map(this.extractData);
    };
    ProdutoService.prototype.atualizarProduto = function (produto) {
        var url = this.produtosUrl;
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.put(url, produto, options).map(this.extractData);
    };
    ProdutoService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body.data || {};
    };
    ProdutoService.prototype.handleError = function (error) {
        console.error('Ocorreu um erro', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ProdutoService;
}());
ProdutoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], ProdutoService);
exports.ProdutoService = ProdutoService;
var _a;
//# sourceMappingURL=produto.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/recebidos.services.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var http_2 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/add/operator/catch.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
var RecebidosService = (function () {
    function RecebidosService(http) {
        this.http = http;
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.recebidosUrl = 'http://localhost:3000/api/recebidos'; // URL to web api
    }
    RecebidosService.prototype.adicionarRecebido = function (recebido) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.recebidosUrl, recebido, options).map(this.extractData);
    };
    RecebidosService.prototype.listarRecebidosPeloIdCliente = function (idCliente) {
        var url = this.recebidosUrl + "/clienteId/" + idCliente;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    RecebidosService.prototype.deleteRecebido = function (_id) {
        var url = this.recebidosUrl + "/" + _id;
        console.log(url);
        return this.http.delete(url).map(this.extractData);
    };
    RecebidosService.prototype.getRecebidos = function (idSistema) {
        var url = this.recebidosUrl + "/" + idSistema;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    RecebidosService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body.data || {};
    };
    RecebidosService.prototype.handleError = function (error) {
        console.error('Ocorreu um erro', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return RecebidosService;
}());
RecebidosService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], RecebidosService);
exports.RecebidosService = RecebidosService;
var _a;
//# sourceMappingURL=recebidos.services.js.map

/***/ }),

/***/ "../../../../../src/app/service/relatorios.services.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var http_2 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/add/operator/catch.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
//services
var vendas_a_vista_service_1 = __webpack_require__("../../../../../src/app/service/vendas-a-vista.service.ts");
var produto_service_1 = __webpack_require__("../../../../../src/app/service/produto.service.ts");
var RelatoriosService = (function () {
    function RelatoriosService(vendasService, produtosService, http) {
        this.vendasService = vendasService;
        this.produtosService = produtosService;
        this.http = http;
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.relatoriosVendasDoDiaUrl = 'http://localhost:3000/api/relatorios/listarVendasDoDia'; // URL to web api
        this.relatoriosVendasUrl = 'http://localhost:3000/api/relatorios/listarVendas'; // URL to web api
        this.relatoriosRecebidosDoDiaUrl = 'http://localhost:3000/api/relatorios/listarRecebidosDoDia'; // URL to web api
        this.relatoriosListarVendasPelaDataUrl = 'http://localhost:3000/api/relatorios/listarVendasPelaData/dados';
        this.relatoriosListarRecebidosPelaDataUrl = 'http://localhost:3000/api/relatorios/listarRecebidosPelaData/dados';
    }
    RelatoriosService.prototype.getRelatorioVendasDoDia = function (_idSistema) {
        var url = this.relatoriosVendasDoDiaUrl + "/" + _idSistema;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    RelatoriosService.prototype.getRelatorioRecebidosDoDia = function (_idSistema) {
        var url = this.relatoriosRecebidosDoDiaUrl + "/" + _idSistema;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    RelatoriosService.prototype.getRelatorioVendasPelaData = function (dados) {
        var url = this.relatoriosListarVendasPelaDataUrl +
            "?data=" + dados.data + "&idSistema=" + dados.idSistema;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    RelatoriosService.prototype.getRelatorioRecebidosPelaData = function (dados) {
        var url = this.relatoriosListarRecebidosPelaDataUrl +
            "?data=" + dados.data + "&idSistema=" + dados.idSistema;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    RelatoriosService.prototype.getRelatorioVendas = function () {
        return this.http.get(this.relatoriosVendasUrl).map(function (res) { return res.json(); });
    };
    RelatoriosService.prototype.deleteVenda = function (_id) {
        var url = this.relatoriosVendasUrl + "/" + _id;
        return this.http.delete(url).map(this.extractData);
    };
    RelatoriosService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body.data || {};
    };
    return RelatoriosService;
}());
RelatoriosService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof vendas_a_vista_service_1.VendasAvistaService !== "undefined" && vendas_a_vista_service_1.VendasAvistaService) === "function" && _a || Object, typeof (_b = typeof produto_service_1.ProdutoService !== "undefined" && produto_service_1.ProdutoService) === "function" && _b || Object, typeof (_c = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _c || Object])
], RelatoriosService);
exports.RelatoriosService = RelatoriosService;
var _a, _b, _c;
//# sourceMappingURL=relatorios.services.js.map

/***/ }),

/***/ "../../../../../src/app/service/sistema.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var http_2 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/add/operator/catch.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
var SistemaService = (function () {
    function SistemaService(http) {
        this.http = http;
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.sistemaUrl = 'http://localhost:3000/api/sistema'; // URL to web api
    }
    //getClientes(): Promise<ClienteModel[]> {
    //return this.http.get(this.clientesUrl)
    //         .toPromise()
    //       .then(response => response.json().data as ClienteModel[])
    //     .catch(this.handleError);
    // }
    SistemaService.prototype.getSistemas = function () {
        return this.http.get(this.sistemaUrl).map(function (res) { return res.json(); });
    };
    SistemaService.prototype.getSistema = function (_id) {
        var url = this.sistemaUrl + "/" + _id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    SistemaService.prototype.adicionarSistema = function (sistema) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.sistemaUrl, sistema, options).map(this.extractData);
    };
    SistemaService.prototype.deleteSistema = function (_id) {
        var url = this.sistemaUrl + "/" + _id;
        return this.http.delete(url).map(this.extractData);
    };
    SistemaService.prototype.atualizarSistema = function (cliente) {
        var url = this.sistemaUrl;
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.put(url, cliente, options).map(function (res) { return res.json(); });
    };
    SistemaService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body.data || {};
    };
    SistemaService.prototype.handleError = function (error) {
        console.error('Ocorreu um erro', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return SistemaService;
}());
SistemaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], SistemaService);
exports.SistemaService = SistemaService;
var _a;
//# sourceMappingURL=sistema.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/usuario.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var http_2 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/add/operator/catch.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
var UsuarioService = (function () {
    function UsuarioService(http) {
        this.http = http;
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.usuariosUrl = 'http://localhost:3000/api/usuarios'; // URL to web api
    }
    //getClientes(): Promise<UsuarioModel[]> {
    //return this.http.get(this.usuariosUrl)
    //         .toPromise()
    //       .then(response => response.json().data as UsuarioModel[])
    //     .catch(this.handleError);
    // }
    UsuarioService.prototype.getUsuarios = function () {
        return this.http.get(this.usuariosUrl).map(function (res) { return res.json(); });
    };
    UsuarioService.prototype.getUsuario = function (_id) {
        var url = this.usuariosUrl + "/" + _id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    UsuarioService.prototype.adicionarUsuario = function (usuario) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.usuariosUrl, usuario, options).map(this.extractData);
    };
    UsuarioService.prototype.deleteUsuario = function (_id) {
        var url = this.usuariosUrl + "/" + _id;
        return this.http.delete(url).map(this.extractData);
    };
    UsuarioService.prototype.atualizarUsuario = function (usuario) {
        var url = this.usuariosUrl;
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.put(url, usuario, options).map(function (res) { return res.json(); });
    };
    UsuarioService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body.data || {};
    };
    UsuarioService.prototype.handleError = function (error) {
        console.error('Ocorreu um erro', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return UsuarioService;
}());
UsuarioService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], UsuarioService);
exports.UsuarioService = UsuarioService;
var _a;
//# sourceMappingURL=usuario.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/validator.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Campo deve ser preenchido',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': "Minimum length " + validatorValue.requiredLength,
            'maxlength': "Maximo de caracteres \u00E9 " + validatorValue.requiredLength,
            'invalidCpf': 'Cpf Invalido'
        };
        return config[validatorName];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    ValidationService.cpfValidator = function (control) {
        if (control.value.match(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/)) {
            return null;
        }
        else {
            return { 'invalidCpf': true };
        }
    };
    return ValidationService;
}());
exports.ValidationService = ValidationService;
//# sourceMappingURL=validator.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/vendas-a-vista.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var http_2 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/add/operator/catch.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
var VendasAvistaService = (function () {
    function VendasAvistaService(http) {
        this.http = http;
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.vendasAvistaUrl = 'http://localhost:3000/api/vendas';
        this.produtosUrl = 'http://localhost:3000/api/produtos'; // URL to web api
        console.log(" service vendas a vista Inicializado");
    }
    VendasAvistaService.prototype.getVendas = function (idSistema) {
        var url = this.vendasAvistaUrl + "/" + idSistema;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    VendasAvistaService.prototype.adicionarVenda = function (venda) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.vendasAvistaUrl, venda, options).map(this.extractData);
    };
    VendasAvistaService.prototype.listarVendasIdCliente = function (_id) {
        var url = this.vendasAvistaUrl + "/cliente/" + _id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    VendasAvistaService.prototype.buscarVendaId = function (_id) {
        var url = this.vendasAvistaUrl + "/" + _id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    VendasAvistaService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body.data || {};
    };
    VendasAvistaService.prototype.handleError = function (error) {
        console.error('Ocorreu um erro', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return VendasAvistaService;
}());
VendasAvistaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], VendasAvistaService);
exports.VendasAvistaService = VendasAvistaService;
var _a;
//# sourceMappingURL=vendas-a-vista.service.js.map

/***/ }),

/***/ "../../../../../src/app/vendas/filter.cliente.componente.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var FilterClienteComponente = (function () {
    function FilterClienteComponente() {
    }
    FilterClienteComponente.prototype.transform = function (clientes, args) {
        if (!clientes || !args) {
            return clientes;
        }
        return clientes.filter(function (cliente) { return cliente.nome.indexOf(args) !== -1; });
    };
    return FilterClienteComponente;
}());
FilterClienteComponente = __decorate([
    core_1.Pipe({
        name: 'filterCliente',
        pure: false
    })
], FilterClienteComponente);
exports.FilterClienteComponente = FilterClienteComponente;
//transform(items: any[], filter: string) {
//  if (!items || !filter) {
//       return items;
// }
// return items.filter(item => item.name.indexOf(filter) !== -1); 
//# sourceMappingURL=filter.cliente.componente.js.map

/***/ }),

/***/ "../../../../../src/app/vendas/filter.produto.componente.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var FilterProdutoComponente = (function () {
    function FilterProdutoComponente() {
    }
    FilterProdutoComponente.prototype.transform = function (produtos, args) {
        if (!produtos || !args) {
            return produtos;
        }
        return produtos.filter(function (produto) { return produto.nome.indexOf(args) !== -1; });
    };
    return FilterProdutoComponente;
}());
FilterProdutoComponente = __decorate([
    core_1.Pipe({
        name: 'filterProduto',
        pure: false
    })
], FilterProdutoComponente);
exports.FilterProdutoComponente = FilterProdutoComponente;
//# sourceMappingURL=filter.produto.componente.js.map

/***/ }),

/***/ "../../../../../src/app/vendas/template.modal.componente.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" (click)=\"lgModal.show()\">Listas Todos os Produtos</button>\n\n<div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n <div class=\"modal-dialog modal-lg\">\n   <div class=\"modal-content\">\n     <div class=\"modal-header\">\n       <h4 class=\"modal-title pull-left\">Lista de Produtos</h4>\n       <button type=\"button\" class=\"close pull-right\" (click)=\"lgModal.hide()\" aria-label=\"Close\">\n         <span aria-hidden=\"true\">&times;</span>\n       </button>\n     </div>\n     <div class=\"modal-body\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Nome do Produto\"  (keyup)=\"onKey($event)\"/>\n        <br>\n        <table class=\"table table-striped\">\n            <th>C/ Barras</th>\n            <th>Nome</th>\n            <th>Preço</th>\n            <th>Quantidade</th>\n                <tr *ngFor=\"let produto of produtos | filterProduto: values\" class=\"success\">\n                    <td>{{produto.codigoBarras}}</td>\n                    <td>{{produto.nome}}</td>\n                    <td>{{produto.valor}}</td>\n                    <td>{{produto.quantidade}}</td>\n                    <td><button type=\"button\" class=\"btn btn-success\" (click)=\"copiarCodigo(produto.codigoBarras)\">Copiar Codigo</button></td>\n             \n                </tr>\n        </table>\n     </div>\n   </div>\n </div>\n</div>\n<br>"

/***/ }),

/***/ "../../../../../src/app/vendas/template.modal.componente.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
//services
var produto_service_1 = __webpack_require__("../../../../../src/app/service/produto.service.ts");
var modal_1 = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var login_service_1 = __webpack_require__("../../../../../src/app/service/login.service.ts");
var TemplateModalComponente = (function () {
    function TemplateModalComponente(produtoServices, loginService) {
        this.produtoServices = produtoServices;
        this.loginService = loginService;
        this.codigoBarrasOutput = new core_1.EventEmitter();
        this.isModalShown = false;
    }
    TemplateModalComponente.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.getUsuarioLogin().subscribe(function (usuario) { return _this.usuario = usuario; });
        this.produtoServices.getProdutos(this.usuario.sistema._id).subscribe(function (produtos) { return _this.produtos = produtos; });
    };
    TemplateModalComponente.prototype.onKey = function (event) {
        this.values = event.target.value;
    };
    TemplateModalComponente.prototype.copiarCodigo = function (codigoBarras) {
        this.codigoBarrasOutput.emit(codigoBarras);
        this.lgModal.hide();
    };
    TemplateModalComponente.prototype.hideModal = function () {
    };
    return TemplateModalComponente;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TemplateModalComponente.prototype, "codigoBarrasOutput", void 0);
__decorate([
    core_1.ViewChild('lgModal'),
    __metadata("design:type", typeof (_a = typeof modal_1.ModalDirective !== "undefined" && modal_1.ModalDirective) === "function" && _a || Object)
], TemplateModalComponente.prototype, "lgModal", void 0);
TemplateModalComponente = __decorate([
    core_1.Component({
        selector: 'modal-static',
        template: __webpack_require__("../../../../../src/app/vendas/template.modal.componente.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof produto_service_1.ProdutoService !== "undefined" && produto_service_1.ProdutoService) === "function" && _b || Object, typeof (_c = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _c || Object])
], TemplateModalComponente);
exports.TemplateModalComponente = TemplateModalComponente;
var _a, _b, _c;
//# sourceMappingURL=template.modal.componente.js.map

/***/ }),

/***/ "../../../../../src/app/vendas/vendas.componente.html":
/***/ (function(module, exports) {

module.exports = "<!--><menu-principal></menu-principal><-->\n\t\t\t\n<div class=\"row\">\n\t<div class=\"col-md-4\">\n\t\t<h4>Nome da Imagem</h4>\n\t\t<br>\n\t\t<modal-static (codigoBarrasOutput)=\"copiarCodigoBarras($event)\"></modal-static>\n\t\t<br>\n\t\n\t\t<div class=\"form-group\">\n\t\t\t<input type=\"number\"  #codigoBarras=\"ngModel\" required\n\t\t\t\t[(ngModel)]=\"produto.codigoBarras\" class=\"form-control\"  placeholder=\"Codigo de Barras\">\n\t\t\t  <button (click)=\"venda(codigoBarras.value); codigoBarras.value=''\"\n\t\t\t\t class=\"btn btn-primary btn-lg btn-block\" [disabled]=\"validaProduto(codigoBarras.value)\">Adicionar</button>\n\t\t\t\t <div *ngIf=\"validaProduto(codigoBarras.value) && (codigoBarras.dirty && codigoBarras.touched)\"\n\t\t\t\t   \tclass=\"alert alert-danger\">\n\t\t\t\t\tCodigo de Barras Invalido\n\t\t\t\t  </div>\n\t\t<div *ngIf=\"codigoBarras.invalid && (codigoBarras.dirty && codigoBarras.touched)\"\n\t\tclass=\"alert alert-danger\">\n   \t \t\t<div *ngIf=\"codigoBarras.errors.required\">\n\t  \t\t Digite um Codigo de Barras\n\t \t\t</div>\n\t    </div>\n\t</div>\n\n\t</div>\n\t\t<div class=\"col-md-4\">\n\t\t\t<h4>Lista de Produtos</h4>\n\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t<table class=\"table table-hover\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>NOME ITEM</th>\n\t\t\t\t\t\t\t<th>VALOR ITEM</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr *ngFor=\"let produtoVendido of produtosVendidos\">\n\t\t\t\t\t\t\t<td>{{produtoVendido.nome}}</td>\n\t\t\t\t\t\t\t<td>{{produtoVendido.valor}}<div class=\"pull-right\">\n                            \t<button class=\"btn btn-danger btn-xs\" (click)=\"deleteVenda(produtoVendido)\">X</button>\n                            </div></td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-4\">\n\t\t\t<h4>Valor Total da Compra</h4>\n\t\t\t<h3><p>{{valorTotalFinal}}</p></h3>\n\t\t\t<h4><p>Escolha o cliente</p></h4>\n\t\t\t<input type=\"button\" class=\"btn btn-primary btn-lg btn-block\" \n\t\t\t[value]=\"listarClienteButton ? 'Listar Clientes' : 'Fechar Lista'\"\n\t\t\t(click)=\"listarClientes()\" [disabled]=\"validaVenda()\">\n\t\t\t<button class=\"btn btn-primary btn-lg btn-block\" \n\t\t\t[disabled]=\"validaVenda()\" (click)=\"finalizarVenda()\">Finalizar Venda</button>\n\t\t\t\n\t\t\t\n\t\t\t<h4>Procurar Cliente:</h4>\n\t\t\t<p></p>\n\t\t\t<div *ngIf=\"!listarClienteButton\">\n\t\t\t<input type=\"text\" class=\"form-control\" (keyup)=\"onKey($event)\"/>\n\t\t\t\t<ul class=\"list-group\"  *ngFor=\"let cliente of clientes | filterCliente: values\">\n\t\t\t\t\t<li (click)=\"onSelect(cliente)\" \n\t\t\t\t\t\tclass=\"list-group-item list-group-item-action\"\n\t\t\t\t\t\t[ngClass]=\"{'active': clienteSelected == cliente}\">\n\t\t\t\t\t\t{{cliente.nome}}\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t\n</div>\n\t\t"

/***/ }),

/***/ "../../../../../src/app/vendas/vendas.componente.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
//serviços
var vendas_a_vista_service_1 = __webpack_require__("../../../../../src/app/service/vendas-a-vista.service.ts");
var produto_service_1 = __webpack_require__("../../../../../src/app/service/produto.service.ts");
var cliente_service_1 = __webpack_require__("../../../../../src/app/service/cliente.service.ts");
var login_service_1 = __webpack_require__("../../../../../src/app/service/login.service.ts");
//Model
var vendas_a_vista_model_1 = __webpack_require__("../../../../../src/app/model/vendas-a-vista.model.ts");
var produto_model_1 = __webpack_require__("../../../../../src/app/model/produto.model.ts");
__webpack_require__("../../../../moment/locale/pt-br.js");
var VendasComponente = (function () {
    function VendasComponente(serviceVendas, produtoService, clienteService, activedRouter, loginService) {
        this.serviceVendas = serviceVendas;
        this.produtoService = produtoService;
        this.clienteService = clienteService;
        this.activedRouter = activedRouter;
        this.loginService = loginService;
        this.vendaAvista = new vendas_a_vista_model_1.VendasAvistaModel();
        this.produtosVendidos = [];
        //butão pra mostrar lista de clientes e fechar lista
        this.listarClienteButton = true;
        this.produto = new produto_model_1.ProdutoModel();
    }
    //pega a lista do servidor
    VendasComponente.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.getUsuarioLogin().subscribe(function (usuario) { return _this.usuario = usuario; });
        this.produtoService.getProdutos(this.usuario.sistema._id).subscribe(function (produtos) { return _this.produtos = produtos; });
        //  let id = this.activedRouter.snapshot.paramMap.get('id') 
        //console.log(id);
        //pega o usuario da tela do menu
    };
    //pega o valor tde todos os produtos da venda soma todos
    VendasComponente.prototype.valorTotal = function () {
        var valorProduto;
        var valorTotal = 0;
        this.produtosVendidos.forEach(function (value, index) {
            var produto = new produto_model_1.ProdutoModel();
            produto = value;
            valorProduto = produto.valor;
            valorTotal = valorTotal + valorProduto;
        });
        //coloca o valor total das vendas na variavel global
        this.valorTotalFinal = valorTotal;
    };
    //coloca o codigo de barrras vindo e cadastra na tela
    VendasComponente.prototype.venda = function (codigoBarras) {
        this.validaProduto(codigoBarras);
        var produtoFilter = this.produtos.findIndex(function (produto) { return produto.codigoBarras == codigoBarras; });
        //pega a lista vinda do servidor, e filtra o produto de acordo com o codigo de barras  
        //essa variavel produtoFilter anexa o codigo de barras do produto vendido 
        //coloca o produto vendido em um modelo de produto
        var produtoVendido = this.produtos[produtoFilter];
        // this.produtosVendidos.push(produtoVendido);
        //console.log(produtoVendido.valor);
        //adiciona em uma lista os produtos vendidos
        this.produtosVendidos.push(produtoVendido);
        //atualisar a o estoque
        this.diminueEstoque(produtoVendido);
        //prepara a venda para ser registrada no bando de dados
        this.vendaAvista.add(produtoVendido);
        //chama a função de somar todos os produtos da venda   e apresenta na tela
        this.valorTotal();
    };
    //ver se existe um produto valido quando é digitado um codigo de barras
    VendasComponente.prototype.validaProduto = function (codigoBarras) {
        if (codigoBarras == undefined) {
            return true;
        }
        else {
            var produtoFilter = this.produtos.findIndex(function (produto) { return produto.codigoBarras == codigoBarras; });
            var produtoVendido = this.produtos[produtoFilter];
            if (produtoFilter == -1) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    //valida se tem algum item na lista
    VendasComponente.prototype.validaVenda = function () {
        if (this.produtosVendidos.length > 0) {
            return false;
        }
        else {
            return true;
        }
    };
    //finaliza a venda atualizando o valor total da venda e colocando o id do sistema
    VendasComponente.prototype.finalizarVenda = function () {
        //testa se a venda foi a vista  ou a praso;
        if (this.vendaAvista.tipo === undefined ||
            this.vendaAvista.tipo === '') {
            this.vendaAvista.tipo = "Venda a vista";
        }
        this.vendaAvista.valorTotalVenda = this.valorTotalFinal;
        //pega o usuario do sitema.
        this.vendaAvista.sistema = this.usuario.sistema;
        this.serviceVendas.adicionarVenda(this.vendaAvista).subscribe();
        //zera a lista da venda
        this.produtosVendidos.length = 0;
        this.vendaAvista.produtos.length = 0;
        // zera a venda efetuada
        this.valorTotalFinal = 0;
    };
    VendasComponente.prototype.diminueEstoque = function (produto) {
        //a atualiza o estoque a cada produto vendido
        var produtoAtualizado = new produto_model_1.ProdutoModel();
        produtoAtualizado = produto;
        produtoAtualizado.quantidade = produtoAtualizado.quantidade - 1;
        this.produtoService.atualizarProduto(produtoAtualizado).subscribe();
    };
    VendasComponente.prototype.deleteVenda = function (produto) {
        //pega o index do objeto e deleta o objeto da do array            
        var index = this.produtosVendidos.indexOf(produto);
        if (index > -1) {
            this.produtosVendidos.splice(index, 1);
            //a atualiza o estoque a cada produto tirado da venda
            this.aumentaEstoque(produto);
            //Atualiza o valor total da venda depois de tirado o produto da venda
            this.valorTotal();
        }
    };
    //almenta o estoque depois que o usuario deleta do estoque 
    VendasComponente.prototype.aumentaEstoque = function (produto) {
        //a atualiza o estoque a cada produto tirado da venda
        var produtoAtualizado = new produto_model_1.ProdutoModel();
        produtoAtualizado = produto;
        produtoAtualizado.quantidade = produtoAtualizado.quantidade + 1;
        this.produtoService.atualizarProduto(produtoAtualizado).subscribe();
    };
    //pega o cliente selecionado
    VendasComponente.prototype.onSelect = function (cliente) {
        this.clienteSelected = cliente;
        this.vendaAvista.cliente = this.clienteSelected;
        this.vendaAvista.tipo = "Venda a praso - Cliente: " + this.clienteSelected.nome;
    };
    //detecta os valores digitados pelo usuario no campo cliente e filtra eles pelo pipe
    VendasComponente.prototype.onKey = function (event) {
        this.values = event.target.value;
    };
    VendasComponente.prototype.listarClientes = function () {
        var _this = this;
        this.listarClienteButton = !this.listarClienteButton;
        this.clienteService.getClientes(this.usuario.sistema._id).subscribe(function (clientes) { return _this.clientes = clientes; });
    };
    //copia codigo de barras vindo da lista de produtos  do tempalte modal
    VendasComponente.prototype.copiarCodigoBarras = function (codigoBarras) {
        this.produto.codigoBarras = codigoBarras;
    };
    //detecta uma ação do usuario caso fique com produtos na lista 
    VendasComponente.prototype.canDeactivate = function () {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (this.validaVenda()) {
            return true;
        }
        else {
            window.alert("Para sair no menu delete os produtos da lista de produtos");
        }
    };
    return VendasComponente;
}());
VendasComponente = __decorate([
    core_1.Component({
        selector: '',
        template: __webpack_require__("../../../../../src/app/vendas/vendas.componente.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof vendas_a_vista_service_1.VendasAvistaService !== "undefined" && vendas_a_vista_service_1.VendasAvistaService) === "function" && _a || Object, typeof (_b = typeof produto_service_1.ProdutoService !== "undefined" && produto_service_1.ProdutoService) === "function" && _b || Object, typeof (_c = typeof cliente_service_1.ClienteService !== "undefined" && cliente_service_1.ClienteService) === "function" && _c || Object, typeof (_d = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _d || Object, typeof (_e = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _e || Object])
], VendasComponente);
exports.VendasComponente = VendasComponente;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=vendas.componente.js.map

/***/ }),

/***/ "../../../../../src/app/vendas/vendas.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
// Componentes Vendas
var vendas_componente_1 = __webpack_require__("../../../../../src/app/vendas/vendas.componente.ts");
var template_modal_componente_1 = __webpack_require__("../../../../../src/app/vendas/template.modal.componente.ts");
// serviço
var vendas_a_vista_service_1 = __webpack_require__("../../../../../src/app/service/vendas-a-vista.service.ts");
var cliente_service_1 = __webpack_require__("../../../../../src/app/service/cliente.service.ts");
//rotas
var vendas_router_1 = __webpack_require__("../../../../../src/app/vendas/vendas.router.ts");
//pipes e filtros
var filter_cliente_componente_1 = __webpack_require__("../../../../../src/app/vendas/filter.cliente.componente.ts");
var filter_produto_componente_1 = __webpack_require__("../../../../../src/app/vendas/filter.produto.componente.ts");
//modal
var modal_1 = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var VendasModule = (function () {
    function VendasModule() {
    }
    return VendasModule;
}());
VendasModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            vendas_router_1.VendasRouter,
            forms_1.ReactiveFormsModule,
            modal_1.ModalModule.forRoot(),
        ],
        declarations: [
            vendas_componente_1.VendasComponente,
            filter_cliente_componente_1.FilterClienteComponente,
            template_modal_componente_1.TemplateModalComponente,
            filter_produto_componente_1.FilterProdutoComponente,
        ],
        providers: [vendas_a_vista_service_1.VendasAvistaService, cliente_service_1.ClienteService]
    })
], VendasModule);
exports.VendasModule = VendasModule;
//# sourceMappingURL=vendas.module.js.map

/***/ }),

/***/ "../../../../../src/app/vendas/vendas.router.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
//Rotas Vendas
var vendas_componente_1 = __webpack_require__("../../../../../src/app/vendas/vendas.componente.ts");
var can_deactivate_guard_service_1 = __webpack_require__("../../../../../src/app/service/can.deactivate.guard.service.ts");
var VendasRoutes = [
    { path: '', component: vendas_componente_1.VendasComponente,
        canDeactivate: [can_deactivate_guard_service_1.CanDeactivateGuard],
    },
];
var VendasRouter = (function () {
    function VendasRouter() {
    }
    return VendasRouter;
}());
VendasRouter = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(VendasRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], VendasRouter);
exports.VendasRouter = VendasRouter;
//# sourceMappingURL=vendas.router.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map