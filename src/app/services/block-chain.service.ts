import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlockChainService {

  private host = environment.host;
  constructor(private http:HttpClient) {}


  public getBlockchains(): Observable<any[]>{
    return this.http.get<any[]>(`${this.host}/blockchain/allblockchain`);
  }

  public getBlocks(id : any): Observable<any[]>{
    return this.http.get<any[]>(`${this.host}/blockchain/`+ id);
  }

  public addBlockchain(blockchain: any): Observable<any> {
    return this.http.post<any>(`${this.host}/blockchain/create`, blockchain);
  }

  public getBlocksById(id:any): Observable<any[]>{
    return this.http.get<any[]>(`${this.host}/blockchain/`+id);
  }

  public mineBlock(data: any): Observable<any> {
    return this.http.post<any>(`${this.host}/blockchain/mineblock`, data);
  }
}
