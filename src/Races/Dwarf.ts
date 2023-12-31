import Race from './Race';

class Dwarf extends Race {
  private static _count = 0;
  private _maxLifePoints = 80;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Dwarf._count += 1;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._count;
  }
}

export default Dwarf;