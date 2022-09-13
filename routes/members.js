const express = require('express')
const router = express.Router()

router.get('/',(req, res)=>{
    const users = [
        {
            id: 1,
            name: 'John Jefferson Factoran',
            status: 'Active',
            email: 'john.factoran@awsys-i.com',
            department: 'Dev F',
            location: 'Alabang'
        },
        {
            id: 2,
            name: 'Christian Gil Aquino',
            status: 'Active',
            email: 'christian.aquino@awsys-i.com',
            department: 'Dev F',
            location: 'Makati'
        }
    ]
    res.send(users)
})

router.post('/new', (req, res)=>{
    res.send('create new member')
})

router.patch('/edit/:member_id', (req, res)=>{
    res.send('update existing member')
})

router.delete('/delete/:member_id', (req, res)=>{
    res.send('delete a member')
})

module.exports = router