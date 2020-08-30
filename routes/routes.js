const {Router} = require('express');
const router = Router();
const UserActivity = require('../models/UserActivity');


router.post('/add', async (req, res) => {
    try {
        const newUserActivity = new UserActivity(req.body);

        await newUserActivity.save();
        res.status(200);
        return res.json({data: newUserActivity});
    } catch (e) {
        console.log('Ошибка при добавлении: ', e);
    }
});

router.get('/activities', async (req, res) => {
    try {
        const data = await UserActivity.find();
        res.status(200);
        return res.json({data: data});
    } catch (e) {
        console.log("Ошибка при получении данных:", e)
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        UserActivity.findByIdAndDelete(req.params.id, (err, user) => {

        });
        res.status(200);

        return res.json({})
    } catch (e) {

    }
});

router.put('/change/:id', async (req, res) => {
    try {
        UserActivity.findOneAndUpdate({_id: req.params.id}, {
            $set: {
                "distance": req.body.distance,
                "comment": req.body.comment,
                "activity": req.body.activity,
                "date": req.body.date
            }
        }).exec((err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.send(result)
            }
        });

        res.status(200);

    } catch (e) {

    }
});

module.exports = router;
