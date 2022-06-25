import connectDatabase from 'pages/api/configs/connectDatabase';
import Users from 'pages/api/models/users';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export default async function validateUser(req, res) {

    try {
        const { sessionToken } = req.body;
        const decoded = jwt.verify(sessionToken, process.env.JWT_SALT_HASH);
        const { code } = decoded;
        const user = await Users.findOne({ code: code });
        const username = user.username;
        if (!user.username) throw new Error('user not found');
        res.status(200).send({
            username: username,
            sessionToken: sessionToken
        });
    } catch (error) {
        const errorMessage = `🔴 Error: ${error.message}`;
        res.status(400).send({ errorMessage: errorMessage });
    };
};