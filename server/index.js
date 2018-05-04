const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const passport = require('passport');
require('./models/User');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	})
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server is up at port ${port}`);
});
