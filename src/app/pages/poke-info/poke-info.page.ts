import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.page.html',
  styleUrls: ['./poke-info.page.scss'],
})
export class PokeInfoPage implements OnInit {

  nro_pokemon: string = "";
  datosPokemon : any;;


  constructor(private pokemonService: ApiService) { }

  ngOnInit() {
  }

  getPokemonDetails() {
    this.pokemonService.getPokemonByNumber(this.nro_pokemon).subscribe((data: any) => {
      // Manejar los datos de Pokémon aquí
      this.datosPokemon = {
        id : data.id,
        nombre : data.name,
        altura : data.height + " centimetros",
        tipo : data.types,
        movimientos : data.moves,
        imagen : data.sprites.front_default
      }
    });
  }

}
