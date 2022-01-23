import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlockChainsComponent} from "./block-chains/block-chains.component";
import {AddBlockChainComponent} from "./add-block-chain/add-block-chain.component";
import {BlocksComponent} from "./blocks/blocks.component";
import {AddBlockComponent} from "./add-block/add-block.component";

const routes: Routes = [



  { path:"blockchain", component: BlockChainsComponent},
  { path:"addBlockchain", component: AddBlockChainComponent},
  { path:"blocks", component: BlocksComponent},
  { path:"addBlock", component: AddBlockComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
