import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

//initializing packages
const app = express();

//settings 
app.set('port', process.env.PORT || 3001);

//middlewares
app.use(webpackDevMiddleware(webpack(webpackConfig)));

//routes
app.get('/', (req,res)=> {
    res.send('hello world')
});

app.get('/api', (req, res) => {
    res.json({api: 'Works!'});
});
//start the server

app.listen(app.get('port') , () => {
    console.log('server on port', app.get('port'));
});