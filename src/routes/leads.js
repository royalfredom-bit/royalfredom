// src/routes/leads.js

const express = require('express');
const router = express.Router();

// Sample lead data
let leads = [];

// Endpoint to get all leads
router.get('/', (req, res) => {
    res.json(leads);
});

// Endpoint to create a new lead
router.post('/', (req, res) => {
    const newLead = req.body;
    leads.push(newLead);
    res.status(201).json(newLead);
});

// Endpoint to get a lead by ID
router.get('/:id', (req, res) => {
    const lead = leads.find(l => l.id === parseInt(req.params.id));
    if (!lead) return res.status(404).send('Lead not found');
    res.json(lead);
});

// Endpoint to update a lead by ID
router.put('/:id', (req, res) => {
    const lead = leads.find(l => l.id === parseInt(req.params.id));
    if (!lead) return res.status(404).send('Lead not found');
    
    // Update lead data
    Object.assign(lead, req.body);
    res.json(lead);
});

// Endpoint to delete a lead by ID
router.delete('/:id', (req, res) => {
    const leadIndex = leads.findIndex(l => l.id === parseInt(req.params.id));
    if (leadIndex === -1) return res.status(404).send('Lead not found');
    leads.splice(leadIndex, 1);
    res.status(204).send();
});

module.exports = router;
