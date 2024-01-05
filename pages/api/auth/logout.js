import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if ( req.method === 'POST' ) {
        const loginsFilePath = path.join(process.cwd(), 'databases', 'logins.json');
        const token = req.cookies.userToken;

        if ( !token ) {
            return res.status(400).json({ message: 'Aucun token fourni' });
        }
        
        let logins = JSON.parse(fs.readFileSync(loginsFilePath, 'utf-8'));
        
        logins = logins.filter(login => login.token !== token);
        
        fs.writeFileSync(loginsFilePath, JSON.stringify(logins, null, 2), 'utf-8');
        
        res.setHeader('Set-Cookie', 'userToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT');

        res.status(200).json({ message: 'Déconnexion réussie' });
    }
    else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}