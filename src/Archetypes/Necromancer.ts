import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necrommancer extends Archetype {
  private _energyType = 'mana';
  private static _count = 0;

  constructor(name:string) {
    super(name);
    Necrommancer._count += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return this._count;
  }
}

export default Necrommancer;