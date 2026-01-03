const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// আপনার সব HTML, CSS, JS ফাইলকে সার্ভার থেকে অ্যাক্সেস করার অনুমতি দিচ্ছে
app.use(express.static(__dirname)); 

// এটিই আপনার গোপন পাসওয়ার্ড, যা কেউ দেখতে পাবে না
const ADMIN_USER = "ifti06";
const ADMIN_PASS = "ifti2013?";

// লগইন রুট
app.post('/api/login', (req, res) => {
    const { u, p } = req.body;

    if (u === ADMIN_USER && p === ADMIN_PASS) {
        // লগইন সফল হলে success পাঠাবে
        res.json({ success: true });
    } else {
        // ভুল হলে error পাঠাবে
        res.json({ success: false, message: "The Username or Password is wrong!" });
    }
});

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});