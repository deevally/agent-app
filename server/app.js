/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable operator-linebreak */
/* eslint-disable no-nested-ternary */
/* eslint-disable arrow-parens */
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config/index';
import routes from './routes';
import OwnerController from './controllers/OwnerController';
import traceLogger from './logger/tracelogger';

// initiate app
const app = express();

// body-parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// enable cors
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,x-auth,Accept,content-type,application/json'
  );
  next();
});

// morgan
app.use(morgan('tiny'));
// connect to mongodb
const mongoURL =
  process.env.NODE_ENV === 'test'
    ? config.DB_URL_TEST
    : process.env.NODE_ENV === 'production'
      ? config.DB_URL_PROD
      : config.DB_URL_DEV;
mongoose.connect(
  mongoURL,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => {
    process.stdout.write('connected to mongoDB');
  }
);

app.get('/api', (req, res) => {
  res.json('Welcome to naira-plus Api');
});

// eslint-disable-next-line no-return-await
(async () => await OwnerController.createOwner())();
// routes
app.use('/api', routes);

// catch all unseen error
app.use('*', (req, res, next) => {
  res.status(404).json({
    message: 'Page not found'
  });
  next();
});

// development error handler
// will print stacktrace
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: err
    }
  });
});

// production error handler

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {}
    }
  });
});

process.on('unhandledRejection', reason => {
  traceLogger(reason);
});

process.on('uncaughtException', reason => {
  traceLogger(reason);
});
const PORT = process.env.PORT || 6200;
app.listen(PORT, () => {
  process.stdout.write(`app is listening on port ${PORT}`);
});
