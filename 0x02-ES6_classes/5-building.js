class Building {
    constructor(sqft) {
      this._sqft = sqft;
      if (new.target !== Building) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
      if ((new.target !== Building) && !Object.getOwnPropertyNames(Object.getPrototypeOf(this)).includes('evacuationWarningMessage')) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  
    get sqft() {
      return this._sqft;
    }
  }
  export default Building;
