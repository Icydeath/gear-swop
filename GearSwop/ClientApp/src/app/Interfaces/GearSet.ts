import {IGearItem} from './GearItem';

export interface IGearSet {
  SetName: string;
  Main: IGearItem;
  Sub: IGearItem;
  Ammo: IGearItem;
  Head: IGearItem;
  Body: IGearItem;
  Hands: IGearItem;
  Legs: IGearItem;
  Feet: IGearItem;
  Neck: IGearItem;
  Waist: IGearItem;
  LeftEar: IGearItem;
  RightEar: IGearItem;
  LeftRing: IGearItem;
  RightRing: IGearItem;
  Back: IGearItem;
}
