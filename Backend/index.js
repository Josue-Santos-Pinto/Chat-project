const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
    try {
        const r = await axios.put('https://api.chatengine.io/users/',
        {username, secret: username, first_name: username},
        {headers: {"private-key": "0d523ee3-5016-4b59-9148-e5cd23f353a7" }})
        return res.status(r.status).json(r.data)
    }
    catch(e){
        return res.status(e.response.status).json(e.response.data)
    }
});

app.listen(3001);