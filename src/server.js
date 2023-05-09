import express from "express";

const app = express();
const PORT = 4000;

app.get('/', (req, res) =>{
    res.status(200).json({message:"Welcome to the backend"});
})

app.listen(PORT, () =>{
    console.log(`server has started on http://localhost:${PORT}`);
})
