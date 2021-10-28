
const customExpress = require("./config/customExpress");
const app = customExpress();


app.listen(1234, ()=>console.log("Server running on port 1234"));