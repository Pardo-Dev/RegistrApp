import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {

  id : string = "";

  KEY : string = "clases"

  
  codigo : string = "";

  data: any ="";


  constructor(private clasesStorage : ClasesService,
              private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")||"";
    this.data = await this.buscar(this.id);
  }

  async buscar(idClase: string){
    var claseEncontrada: any = await this.clasesStorage.buscar(idClase, this.KEY);
    return claseEncontrada.codigo_qr;
  }




}
