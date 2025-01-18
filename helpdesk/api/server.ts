import express from "express";
import ticketRoutes from "./routes/ticketsRoutes";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use("/tickets", ticketRoutes);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Servidor está funcionando!");
});
