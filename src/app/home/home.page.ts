import { findLast } from '@angular/compiler/src/directive_resolver';
import { Component } from '@angular/core';

import { FilesystemService } from '../services/filesystem.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public filasistem: FilesystemService) {}

  guardar(){
    this.filasistem.writeSecretFile();
  }
  leer(){
    this.filasistem.readSecretFile();
  }
  eliminar(){
    this.filasistem.cdeleteSecretFile();
  }
}
