import {IGearSet} from './GearSet';

export interface ISwap {
  CharacterName: string;
  CharacterJob: string;
  GearSets: Array<IGearSet>;
}
