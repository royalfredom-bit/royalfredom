const express = require('express');
const router = express.Router();

// Create virtual tour
router.post('/', async (req, res) => {
  try {
    res.status(201).json({ success: true, message: 'Virtual tour created' });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Get tour by property ID
router.get('/property/:propertyId', async (req, res) => {
  try {
    res.json({ success: true, message: `Get tour for property: ${req.params.propertyId}` });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Update tour
router.put('/:tourId', async (req, res) => {
  try {
    res.json({ success: true, message: `Tour ${req.params.tourId} updated` });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;