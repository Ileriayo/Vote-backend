const model = require('../model/VoteSchema')
const getcandidates = async(req,res) => {
    
    const retireve  = await model.find({})
    if(retireve)
    {
        res.status(200).json(retireve)
    }
   
}

module.exports = {getcandidates}