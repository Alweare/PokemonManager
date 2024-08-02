import {Component, Inject} from '@angular/core';
import {AfficherPokemonServiceService} from "../../Service/afficher-pokemon-service.service";
import {Observable} from "rxjs";
import {Pokemon} from "../../modele/Pokemon";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {
  public pokemon$: Observable<Pokemon> | undefined;

  constructor(@Inject(AfficherPokemonServiceService) private _api:AfficherPokemonServiceService) {
  console.log(this.pokemon$)
 //   for(let i = 1 ; i === 151; i++){
  this.pokemon$ = this._api.recupererUnPokemon(4);

      //
  //   }

  }


}
