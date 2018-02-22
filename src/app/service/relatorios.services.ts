import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
//services
import {VendasAvistaService} from './vendas-a-vista.service';
import {ProdutoService} from './produto.service';

//cliente model
import {VendasAvistaModel} from '../model/vendas-a-vista.model';
import {RecebidosModel} from '../model/recebidos.model';


@Injectable()
export class RelatoriosService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private relatoriosVendasDoDiaUrl = 'http://localhost:3000/api/relatorios/listarVendasDoDia';  // URL to web api
    private relatoriosVendasUrl = 'http://localhost:3000/api/relatorios/listarVendas';  // URL to web api
    private relatoriosRecebidosDoDiaUrl = 'http://localhost:3000/api/relatorios/listarRecebidosDoDia';  // URL to web api
    private relatoriosListarVendasPelaDataUrl = 'http://localhost:3000/api/relatorios/listarVendasPelaData/dados'
    private relatoriosListarRecebidosPelaDataUrl = 'http://localhost:3000/api/relatorios/listarRecebidosPelaData/dados'

    
    constructor(private vendasService: VendasAvistaService, private produtosService: ProdutoService, private http: Http){

    }


  getRelatorioVendasDoDia(_idSistema: number): Observable<VendasAvistaModel[]> {
    var url = this.relatoriosVendasDoDiaUrl + "/" + _idSistema;
    return this.http.get(url).map(res => res.json()) ;
   
  }
  getRelatorioRecebidosDoDia(_idSistema: number): Observable<RecebidosModel[]> {
    
    var url = this.relatoriosRecebidosDoDiaUrl + "/" + _idSistema;
    return this.http.get(url).map(res => res.json()) ;
   
  }
  getRelatorioVendasPelaData(dados:any): Observable<VendasAvistaModel[]> {

   
    var url = this.relatoriosListarVendasPelaDataUrl + 
    "?data="+ dados.data+ "&idSistema="+ dados.idSistema;
   
    
    return this.http.get(url).map(res => res.json()) ;
   
  }
  getRelatorioRecebidosPelaData(dados:any): Observable<RecebidosModel[]> {
    
    var url = this.relatoriosListarRecebidosPelaDataUrl + 
    "?data="+ dados.data+ "&idSistema="+ dados.idSistema;
        
        
        return this.http.get(url).map(res => res.json()) ;
       
      }
   
  getRelatorioVendas(): Observable<VendasAvistaModel[]> {
    
    return this.http.get(this.relatoriosVendasUrl).map(res => res.json()) ;
   
  }

  deleteVenda(_id: Number): Observable<VendasAvistaModel>{
    
    var url = this.relatoriosVendasUrl + "/" + _id;
    
    return this.http.delete(url).map(this.extractData);
  }


private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.data || { };
  }
}
