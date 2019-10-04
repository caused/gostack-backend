const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://omnistack:omnistack@personal-dq336.mongodb.net/gostack?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(routes);



app.listen(3000, () => {
    console.log('App listening on port 3000!');
});