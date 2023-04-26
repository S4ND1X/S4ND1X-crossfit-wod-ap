const express = require("express")

const app = express();
const PORT = process.env.PORT || 3000;



app.use("/api/v1/workouts", require("./v1/routes/workoutRoutes"))

app.listen(PORT, ()=>{
    console.log(`API is listening on port ${PORT}`);
})