import MainController from "./controllers/MainController.js";
import axios from "axios";
import "./main.css";
import "./app.scss";

document.addEventListener("DOMContentLoaded", async () => {
  const res = await axios.get("/api/users");
  console.log(res);
  new MainController();
});
