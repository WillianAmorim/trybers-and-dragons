import Race from './Race';

class Halfling extends Race {
  private static _count = 0;
  private _maxLifePoints = 60;

  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    Halfling._count += 1;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._count;
  }
}

export default Halfling;