import connectDatabase from 'pages/api/configs/connectDatabase';
import Users from 'pages/api/models/users';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export default async function loginUser(req, res) {

    try {
        await connectDatabase();
        const { code } = req.body;
        const user = await Users.findOne({ code: code });
        if (!user) throw new Error('user not found');
        const username = user.username;
        const sessionToken = jwt.sign({ code: code }, process.env.JWT_SALT_HASH, { expiresIn: '2h' } );
        res.setHeader('Set-Cookie', cookie.serialize( 'session-token', sessionToken, {
            httpOnly: false,
            secure: false,
            maxAge: 60 * 60 * 2,
            sameSite: 'strict',
            path: '/'
        }));        
        res.status(200).send({
            username: username,
            sessionToken: sessionToken
        });
    } catch (error) {
        const errorMessage = `🔴 Error: ${error.message}`;
        res.status(400).send({ errorMessage: errorMessage });
    };
};