const { Animal, Cat, Dog, AnimalShelter } = require('./fifo-animal-shelter');
describe('AnimalShelter class', () => {
  it('should allow queueing to DogQueue and CatQueue', () => {
    const petsam = new AnimalShelter();
    const spot = new Dog('Spot');
    petsam.enqueue(spot);
    expect(petsam.dequeue('Dog')).toEqual('Spot');
  });
});
