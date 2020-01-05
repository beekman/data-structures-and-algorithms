const { AnimalQueue, Node, LinkedList, Dog, Cat } = require('./fifo-animal-shelter');

describe('AnimalShelter class', () => {
  it('getEither should return the first animal of either type', () => {
    let vet = new AnimalQueue();
    const spot = new Dog('Spot');
    const felix = new Cat('Felix');
    vet.addAnimal(spot);
    vet.addAnimal(felix);
    expect(vet.getEither().value).toEqual('Spot');
    expect(vet.getEither().value).toEqual('Felix');
    // let shop = new AnimalQueue();
    // const garfield = new Cat('Garfield');
    // const odie = new Dog('Odie');
    // shop.addAnimal(garfield);
    // shop.addAnimal(odie);
    // expect(shop.getEither().value).toEqual('Garfield');
  });

  it('getEither should return the only animal if there is only one', () => {
    let vet = new AnimalQueue();
    const spot = new Dog('Spot');
    vet.addAnimal(spot);
    expect(vet.getEither().value).toEqual('Spot');
  });

  it('should allow queueing to DogQueue and CatQueue and return the appropriate type', () => {
    let petsam = new AnimalQueue();
    const spot = new Dog('Spot');
    const kitty = new Cat('Kitty');
    const felix = new Cat('Felix');
    petsam.addAnimal(spot);
    petsam.addAnimal(felix);
    petsam.addAnimal(kitty);

    expect(petsam.getCat().value).toEqual('Felix');

    expect(petsam.getDog().value).toEqual('Spot');
  });
});
