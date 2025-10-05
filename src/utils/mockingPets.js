import { faker } from '@faker-js/faker';

export function generateMockPets(count = 1) {
  const pets = [];
  for (let i = 0; i < count; i++) {
    pets.push({
      _id: faker.database.mongodbObjectId(),
      name: faker.animal.dog(),
      specie: 'dog',
      birthDate: faker.date.past(10),
      adopted: false,
      owner: null,
      image: '',
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      __v: 0
    });
  }
  return pets;
}
