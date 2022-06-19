import connectDatabase from 'pages/api/configs/connectDatabase';
import Users from 'pages/api/models/users';

export default async function loginUser(req, res) {

    try {
        await connectDatabase();
        console.log(req.body);
        const { code } = req.body;
        const users = await Users.findOne({ code: code });
        res.status(200).send(users)
    } catch (error) {
		console.log(error.message);
        res.status(400).send(error.message);
    };
};