import {IGearSet} from './GearSet';

export interface ISwap {
  CharacterName: string;
  Job: string;
  Gear: Array<IGearSet>;
}
