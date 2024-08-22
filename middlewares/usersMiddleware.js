import validator from 'validator';

const validateData = (req, res, next) => {
    const password = req.body.password;

    const isValid = validator.isLength(password, { min: 8, max: 20 }) &&
        /[a-z]/.test(password) &&
        /[A-Z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[!@#\$%\^&\*]/.test(password);

    if (!isValid) {
        return res.status(400).json({ error: 'Password does not meet security criteria.' });
    }

    next();
}

export default validateData;