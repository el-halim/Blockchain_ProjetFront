import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {BlockChainService} from "../services/block-chain.service";
import {SenderService} from "../services/sender.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-block-chains',
  templateUrl: './block-chains.component.html',
  styleUrls: ['./block-chains.component.css']
})
export class BlockChainsComponent implements OnInit {
  blockchains: any;

  constructor(private blockchainService: BlockChainService,
              private sender: SenderService) { }

  ngOnInit(): void {
    this.getBlockchain()
  }


  public getBlockchain(): void{
    this.blockchainService.getBlockchains().subscribe(
      (response: any[]) => {

        //this.dataSource.data = response;
        this.blockchains = response;

        console.log(this.blockchains)

      },
      (error: HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }








  sendIdblockchain(id: any, blocks: any) {
    this.sender.setMessage(id,blocks);
  }




  onAddBlockchain(addForm: NgForm) {
    console.log(addForm.value);
    // @ts-ignore
    document.getElementById('add-blockchain-form').click();
    this.blockchainService.addBlockchain(addForm.value).subscribe(
      (response: any) => {
          this.getBlockchain();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onOpenModalAddBlockchain(): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#addBlockchainModal');
    container!.appendChild(button);
    button.click();
  }

}
