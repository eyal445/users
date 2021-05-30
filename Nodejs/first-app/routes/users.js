import express from 'express';

const router = express.Router();

const users = [
    {id : 1,
     name: "Moshe"   
    },
    {id : 2,
     name: "Ben"   
       },
       {id : 3,
        name: "Dan"   
       },
    
]

router.get('/', (req, res) =>
 {res.send(users)});


 router.get('/:id', (req, res) => {
const { id } = req.params;
const findUserByID = users.find((user) => user.id == id);
res.send(findUserByID);
 })

router.post('/', (req, res) =>
{const user = req.body;
users.push(user);
res.send('User was added successfully')
});

export default router;