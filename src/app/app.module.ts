import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockChainsComponent } from './block-chains/block-chains.component';
import { AddBlockChainComponent } from './add-block-chain/add-block-chain.component';
import { BlocksComponent } from './blocks/blocks.component';
import { AddBlockComponent } from './add-block/add-block.component';
import {BlockChainService} from "./services/block-chain.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    BlockChainsComponent,
    AddBlockChainComponent,
    BlocksComponent,
    AddBlockComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FormsModule,

    ReactiveFormsModule, BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
