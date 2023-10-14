const model = require('../model/NomineesSchema')

const selected = async (req, res) => {
    const nominees = req.body
    console.log(nominees)
    await model.create(nominees)
    res.status(200).json('ok')
}

const leaderboard = async (req, res) => {

    const collection = await model.find({})

    const fieldsToRetrieve = {
        Coordinator: [],
        'Deputy coordinator & Director and patnership': [],
        Secretary: [],
        'Assistant Secretary': [],
        'Programmes Officer': [],
        'Financial Secretary': [],
        Treasurer: [],
        "Communications and Social Media Manager": []
    };

    collection.forEach((document) => {
        for (const fieldName in fieldsToRetrieve) {
            const value = document[fieldName];
            if (value) {
                fieldsToRetrieve[fieldName].push(value);
            }
        }
    });

    const colation = []
    for (key in fieldsToRetrieve) 
    {
        const value = fieldsToRetrieve[key]
        const countMap = countOccurrences(value);

        function countOccurrences(arr) 
        {
            return arr.reduce((countMap, element) => 
            {
                countMap[element] = (countMap[element] || 0) + 1;
                return countMap;
            }, {});
        }
        // const uniqueElements = Object.keys(countMap);
        colation.push({[key]:countMap})
    }
    // console.log(colation)
res.status(200).json(colation)
}
    
    // console.log('Names from Fields:', fieldsToRetrieve);

module.exports = { selected, leaderboard }