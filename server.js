const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let users = [{ username: "nasrin", password: "rahiyan", balance: 1000 }];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ success: true, message: "Login successful", balance: user.balance });
    } else {
        res.json({ success: false, message: "Invalid credentials" });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
