import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

export function generateMockUsers(count = 1) {
  const users = [];
  for (let i = 0; i < count; i++) {
    const role = Math.random() < 0.5 ? 'user' : 'admin';
    users.push({
      _id: faker.database.mongodbObjectId(),
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: bcrypt.hashSync('coder123', 10),
      role,
      pets: [],
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      __v: 0
    });
  }
  return users;
}
