import { Component, OnInit } from '@angular/core';
import {SenderService} from "../services/sender.service";
import {HttpErrorResponse} from "@angular/common/http";
import {BlockChainService} from "../services/block-chain.service";
import {NgForm} from "@angular/forms";




class MiningData{

  previousHash:any = "000999321654";
  min_adr:any= "112233";
  transactions :any =[
    {
      addressSource: "0035464992",
      addressDestination: "data.addressDestination",
      amount: 0,
    },
  ]


}

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {
    idBlockchain!: string
    blocks: any;
    miningData!: MiningData
  constructor(private sender: SenderService,private blockchainService: BlockChainService) { }

  ngOnInit(): void {

    this.idBlockchain=this.sender.getMessage()
    this.blocks=this.sender.getBlocks()


  }





  onAddBlock(addForm:NgForm) {
    // console.log(addForm.value.amount);


    // @ts-ignore
    document.getElementById('add-block-form').click();

    const mineBlock = (e:any) => {
      e.preventDefault();
      console.log(this.miningData);
      const miningData = {
        blockchainID: this.idBlockchain,
        previousHash: this.miningData.previousHash,
        min_adr: this.miningData.min_adr,
        transactions: [
          {
            addressSource: "0035464992",
            addressDestination: this.miningData.transactions.addressDestination,
            amount: this.miningData.transactions.amount,
          },
        ],
      };
      this.blockchainService.mineBlock(miningData)
        .subscribe((resp) => {
            console.log(resp);
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        )

    };




  }


  public onOpenModalAddBlock(): void {


    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#addBlockModal');
    container!.appendChild(button);
    button.click();
  }
}
