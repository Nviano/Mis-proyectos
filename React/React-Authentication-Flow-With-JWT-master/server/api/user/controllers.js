import jwt from 'jsonwebtoken';
require('dotenv').config();

const getUserPublications = (req, res, next) => {
  const publications = [
    {
      text: 'Ayer me fui a la playa y volví quemado, denme like para recuperarme',
      createdAt: new Date(),
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg',
    },
    {
      text: '¿Como securizaremos nuestra aplicación web? adelante, comentad',
      createdAt: new Date(),
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    },
    {
      text: 'Vendo suegra de segunda mano, muerde solo los domingos',
      createdAt: new Date(),
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg',
    },
  ];

  res.status(200).json({
    publications,
    userData: req.user,
  });
};

const loginUser = (req, res, next) => {
  const { id, email, password } = req.body;

  jwt.sign({ id, email, password }, process.env.COOKIE_SECRET, { expiresIn: '2h' }, (error, TOKEN) => {
    if (error) return res.status(500).json({ error: 'ERROR SIGNING THE TOKEN' });
    res.cookie('access_token', TOKEN, {
      maxAge: new Date(Date.now() + 1000000),
      httpOnly: false,
    });
    console.log();
    return res.status(200).json({ message: 'User logged with success' });
  });
};

const logOutUser = (req, res, next) => {
  res.clearCookie('access_token', req.cookies.access_token, {
    maxAge: new Date(Date.now() + 10000000),
    httpOnly: false,
  });
  return res.status(200).json({ message: 'Cookie deleted' });
};

export { getUserPublications, loginUser, logOutUser };
