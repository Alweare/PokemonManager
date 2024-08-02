import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "../modele/Pokemon";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AfficherPokemonServiceService {


  private _url:string ='https://pokeapi.co/api/v2';

  constructor(@Inject(HttpClient) private _httpClient: HttpClient) {

  }
  public recupererUnPokemon(id:number):Observable<Pokemon>{
    return this._httpClient.get<Pokemon>(this._url + '/pokemon/' + id);
  }

}
