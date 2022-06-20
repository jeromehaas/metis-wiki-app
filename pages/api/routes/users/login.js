import connectDatabase from 'pages/api/configs/connectDatabase';
import Users from 'pages/api/models/users';
import jwt from 'jsonwebtoken';

export default async function loginUser(req, res) {

    try {
        await connectDatabase();
        console.log(req.body);
        const { code } = req.body;
        const user = await Users.findOne({ code: code });
        const username = user.username;
        const sessionToken = jwt.sign({ code: code }, process.env.JWT_SALT_HASH, { expiresIn: '2h' } )
        if (!user) throw new Error('user not found');
        res.status(200).send({
            username: username,
            sessionToken: sessionToken
        });
    } catch (error) {
        const errorMessage = `🔴 Error: ${error.message}`;
		console.log(errorMessage);
        res.status(400).send({ errorMessage: errorMessage });
    };
};