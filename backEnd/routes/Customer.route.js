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
    const customer = await Customer.findById({ _id: req.params.id });
    if (!customer) {
    return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error });
  }
});


// POST: Create
router.post('/',async(req,res)=>{
    try{
        const customer = new Customer(req.body);
        const SavedCustomer = customer.save();
        res.status(200).json(SavedCustomer);
    }catch(error){
        res.status(500).json({message:'An error occurred',error:error});
        
    }
})

// PUT: Update
router.put('/:id', async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      { _id: req.params.id },        
      req.body,             
      { new: true }        
    );

    if (!updatedCustomer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error });
  }
});

// DELETE: delete
router.delete('/:id', async (req, res) => {
  try {
    const deletedCustomer = await Customer.deleteOne({ _id: req.params.id });

    res.status(200).json(deletedCustomer);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error });
  }
});

module.exports = router;
