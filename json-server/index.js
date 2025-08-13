const jsonServer = require('json-server');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const https = require('https');

const options = {
  key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem')),
};

const app = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

app.use(jsonServer.defaults({}));
app.use(jsonServer.bodyParser);

app.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { profiles = [] } = db;

    const profileFromDb = profiles.find(
      (profile) => profile.username === username && profile.password === password,
    );

    if (profileFromDb) {
      return res.json(profileFromDb.token);
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
});

app.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }
  next();
});

app.post('/users/:userId', (req, res) => {
  try {
    const { userId } = req.params;
    const { status } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users: employees = [] } = db;

    employees.find(({ id }) => id === userId).status = status;

    fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(db), 'UTF-8');
    return res.json(status);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: e.message });
  }
});

app.post('/users', (req, res) => {
  try {
    const { name, status, img } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users: employees = [] } = db;

    const newEmployee = {
      id: uuidv4(), name, status, img,
    };
    employees.push(newEmployee);
    fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(db), 'UTF-8');
    return res.json(newEmployee);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: e.message });
  }
});

app.get('/users', (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users: employees = [] } = db;
    return res.json(employees);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: e.message });
  }
});

app.use(router);

const PORT = 8443; // 8000

const httpsServer = https.createServer(options, app);
httpsServer.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});

// app.listen(PORT, () => {
//   console.log(`Server is running on ${PORT} port`);
// });
