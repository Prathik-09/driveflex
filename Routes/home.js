import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  // This route should be protected, e.g., by using authentication middleware
  res.send('Welcome to the home page');
});

export default router;

