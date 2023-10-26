const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.json({
        message : "chit tl"
    })
});

router.get('/about',(req,res)=>{
    return res.json({
        message : "Custom/about"
    })
})
module.exports = router;