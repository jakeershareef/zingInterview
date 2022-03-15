const router = require('express').Router();
const Data = require('../models/data');

router.post('/', async (req,res) => {
    try {
        const { username,email,mobile,gender } = req.body;
        if(!(username&&email&&mobile&&gender)) {
            return res.status(401).send('Please provide all the details');
        }
        const oldUser = await Data.findOne({email}) 
        if(oldUser) {
            return res.status(409).send('User Already Existed');
        }
        const savedUser = await Data.create({
            username,
            email,
            mobile,
            gender
        })
        return res.status(200).send(savedUser);
    } catch(err)  {
        return res.status(500).send(err)
    }
})

router.get('/', async (req,res) => {
    try {
        const users = await Data.find();
        return res.status(200).send(users);
    } catch(err) {
        return res.status(500).send(err)
    }
});
router.get('/:id', async (req,res) => {
    try {
      
        const data1 = await Data.findById(req.params.id);
        return res.status(200).json(data1);
    } catch(err) {
       return res.status(500).json(err);
    }
});

router.delete('/:id', async (req,res) => {
    try {
        if(!(req.params&&req.params.id)) {
            return res.status(400).json("Bad Request");
        }
   const deleteData = await Data.deleteOne({_id:req.params.id})
   return res.status(200).json("deleted")
    } catch(err) {
        return res.status(500).json(err);
    }
});

router.patch('/:id', async (req,res) => {
    try {
        if(!(req.params&&req.params.id)) {
            return res.status(400).json("Bad request");
        } 
       if(ObjectId.isValid(_id)) {
           if((string) (new ObjectId(_id)) === id)
               return true;
           
           return false;
       }
        const update = await Data.updateOne({ _id:req.params.id },{ $set: {username:req.body.username}});
        return res.status(200).json(update);
    } catch(err) {
        return res.status(500).json(err);
    }
});

module.exports = router;