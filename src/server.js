
const customExpress = require("./config/customExpress");
const app = customExpress();


var port = process.env.PORT || 8080;

app.listen(port, ()=>console.log("Server running on port ", port));