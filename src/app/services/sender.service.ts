import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class SenderService {



  public id!: string;
  public blocks!: any;

  constructor() { }

  setMessage(id:string,blocks:any){
    this.id=id;
    this.blocks=blocks

  }
  getMessage(){
    return this.id;
  }
  getBlocks(){
    return this.blocks
  }
}
