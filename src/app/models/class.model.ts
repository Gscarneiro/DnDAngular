import { Feature } from 'src/app/models/feature.model';
import { SubClass } from 'src/app/models/sub-class.model';

export class Class {
  id: string = '';
  name: string = '';
  description: string = '';
  HitDice: number = 0;
  SavingThrows: string = '';
  Skills: string = '';
  ArmorProficiency: string = '';
  WeaponProficiency: string = '';
  ToolsProficiency: string = '';
  Features: Feature[] = [];
  SubClass: SubClass[] = [];
}
