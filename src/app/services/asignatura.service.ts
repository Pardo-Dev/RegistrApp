import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  asignaturas : any[] = [];
  KEY: string = "asignaturas"

  constructor(private storage : Storage) {
    storage.create()
  }

  // Metodos

  // BUSCAR
  async buscar(codigo: string, key: string): Promise<any>{
    this.asignaturas = await this.storage.get(key) || [];
    return this.asignaturas.find(asignatura => asignatura.codigo == codigo);
  }

  async agregar(asignatura: any, key: string): Promise<boolean>{
    this.asignaturas = await this.storage.get(key) || "";
    let asignatura_encontrada = await this.buscar(asignatura, key)
    if(asignatura_encontrada == undefined){
      this.asignaturas.push(asignatura);
      await this.storage.set(key, this.asignaturas);
      return true;
    }
    return false;
  }

}
