import Race from './Race';

class Elf extends Race {
  private static _count = 0;
  private _maxLifePoints = 99;

  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    Elf._count += 1;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return this._count;
  }
}

export default Elf;