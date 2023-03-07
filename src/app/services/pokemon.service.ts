import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = [];

  constructor(public http: HttpClient) {
    this.carregarPokemon();
  }
  async carregarPokemon() {
    let response = await this.http
      .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .toPromise();

    console.log(response.name);

    this.pokemons = response.results;

    // ajustarNome(String: str){
    //   return `${str[0].toUpperCase() + str.substring(1)}`;
    // }

  }
}
