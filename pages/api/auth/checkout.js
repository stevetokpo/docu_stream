import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const token = req.cookies.userToken;

    if ( !token ) {
        return res.status(401).json({ status: 'error', message: 'Token non fourni' });
    }

    const loginsFilePath = path.join(process.cwd(), 'databases', 'logins.json');

    const loginsData = readJsonFile(loginsFilePath);

    const loginRecord = loginsData.find(login => login.token === token);

    if ( loginRecord && loginRecord.session === 1 ) {
        return res.status(200).json({ status: 'ok' });
    }
    else {
        return res.status(401).json({ status: 'error', message: 'Non authentifié' });
    }
}

function readJsonFile(filePath) {
    try {
        const fileData = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(fileData);
    }
    catch (error) {
        throw new Error('Erreur de lecture du fichier JSON');
    }
}