import express from 'express';
import { generateMockUsers } from '../utils/mocking.js';
import { generateMockPets } from '../utils/mockingPets.js';
import { usersService, petsService } from '../services/index.js';

const router = express.Router();

// Endpoint GET /mockingusers
router.get('/mockingusers', (req, res) => {
  const count = parseInt(req.query.count) || 50;
  const users = generateMockUsers(count);
  res.json({ status: 'success', users });
});

// Endpoint GET /mockingpets
router.get('/mockingpets', (req, res) => {
  const count = parseInt(req.query.count) || 50;
  const pets = generateMockPets(count);
  res.json({ status: 'success', pets });
});

// Endpoint POST /generateData
router.post('/generateData', async (req, res) => {
  const { users = 0, pets = 0 } = req.body;
  let createdUsers = [], createdPets = [];
  try {
    if (users > 0) {
      const mockUsers = generateMockUsers(users);
      for (const user of mockUsers) {
        const { _id, createdAt, updatedAt, __v, ...userDoc } = user;
        const created = await usersService.create(userDoc);
        createdUsers.push(created);
      }
    }
    if (pets > 0) {
      const mockPets = generateMockPets(pets);
      for (const pet of mockPets) {
        const { _id, createdAt, updatedAt, __v, ...petDoc } = pet;
        const created = await petsService.create(petDoc);
        createdPets.push(created);
      }
    }
    res.json({ status: 'success', users: createdUsers.length, pets: createdPets.length });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
});

export default router;
