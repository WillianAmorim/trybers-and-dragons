import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType = 'stamina';
  private static _count = 0;

  constructor(name:string) {
    super(name);
    Warrior._count += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return this._count;
  }
}

export default Warrior;