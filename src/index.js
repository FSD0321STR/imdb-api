const express = require('express');
require('express-async-errors');
const cors = require('cors');

const app = express();
const port = 8000;

const AuthRouter = require('./controllers/AuthRouter');
const TopicRouter = require('./controllers/TopicRouter');
const CategoryRouter = require('./controllers/CategoryRouter');
const CommentRouter = require('./controllers/CommentRouter');
const UserRouter = require('./controllers/UserRouter');


app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200,
}));

app.use(express.json());
app.use(AuthRouter);
app.use('/topic', UserRouter);
app.use('/category', CategoryRouter);
app.use('/comment', CommentRouter);
app.use('/user', TopicRouter);


app.listen(port, () => console.log(`Listening on http://localhost:${port}`));