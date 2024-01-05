import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ status: 'error', message: 'Méthode non autorisée' });
    }

    const { name, email, password, confirm_password } = req.body;

    // Validation des champs
    if (!name || !email || !password || !confirm_password) {
        return res.status(400).json({ status: 'error', message: 'Veuillez remplir tous les champs!' });
    }

    if (name.length > 256) {
        return res.status(400).json({ status: 'error', message: 'Votre nom ne doit pas dépasser 256 caractères!' });
    }

    if (!validateEmail(email) || email.length > 256) {
        return res.status(400).json({ status: 'error', message: 'Email invalide' });
    }

    if (password.length < 5 || password.length > 100) {
        client.close();
        return res.status(400).json({ status: 'error', message: 'Le mot de passe doit être entre 5 et 100 caractères' });
    }
    
    if (password !== confirm_password) {
        return res.status(400).json({ status: 'error', message: 'Les mots de passe ne correspondent pas' });
    }

    const usersFilePath = path.join(process.cwd(), 'databases', 'users.json');
    const loginsFilePath = path.join(process.cwd(), 'databases', 'logins.json');

    let users;
    try {
        users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    } catch (error) {
        return res.status(500).json({ status: 'error', message: 'Erreur lors de la lecture du fichier des utilisateurs' });
    }

    if (!Array.isArray(users)) {
        return res.status(500).json({ status: 'error', message: 'Format du fichier des utilisateurs incorrect' });
    }

    if (users.find(user => user.email === email)) {
        return res.status(400).json({ status: 'error', message: 'Cet email est déjà utilisé' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = {
        id: users.length + 1,
        email,
        password: hashedPassword,
        name,
        status: 1,
        timing: new Date().toISOString()
    };

    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf-8');

    const token = jwt.sign({ userId: newUser.id }, 'AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn#@!$', { expiresIn: '1y' });

    const logins = JSON.parse(fs.readFileSync(loginsFilePath, 'utf-8'));
    logins.push({
        token,
        user: newUser.id,
        session: 1,
        timing: new Date().toISOString()
    });

    fs.writeFileSync(loginsFilePath, JSON.stringify(logins, null, 2), 'utf-8');

    res.setHeader('Set-Cookie', `userToken=${token}; HttpOnly; Path=/; Max-Age=31536000; SameSite=Strict`);
    res.status(201).json({ status: 'done' });
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}