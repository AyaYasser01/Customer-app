const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer.model');

// GET: list
router.get('/',async(req,res)=>{
    try{
        const customers = await Customer.find();
        res.status(200).json(customers);
    }catch(error){
        res.status(500).json({message:'An error occurred',error:error});
        
    }
})
// GET: get by id 
router.get('/:id', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
    return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error });
  }
});


// POST: list
router.post('/',async(req,res)=>{
    try{
        const customer = new Customer(req.body);
        const SavedCustomer = customer.save();
        res.status(200).json(SavedCustomer);
    }catch(error){
        res.status(500).json({message:'An error occurred',error:error});
        
    }
})