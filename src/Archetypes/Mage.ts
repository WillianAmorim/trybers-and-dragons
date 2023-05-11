import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType = 'mana';
  private static _count = 0;

  constructor(name:string) {
    super(name);
    Mage._count += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return this._count;
  }
}

export default Mage;