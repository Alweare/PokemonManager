import {Types} from "./Types";
import {Sprites} from "./Sprites";

export interface Pokemon {
  id: number;
  name: string;
  type:Types;
  sprites:Sprites;
  height:string;
  weight: number;


}
