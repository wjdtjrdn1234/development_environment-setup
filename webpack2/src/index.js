import "./style.css";
import "./header.css";
import List from "./List";
import logo from "./images/profile.png";

const img = `<img src="${logo}" alt="webpack" />`;

const users = [
  {
    id: 1,
    name: "black",
  },
  {
    id: 2,
    name: "white",
  },
  {
    id: 3,
    name: "red",
  },
  {
    id: 4,
    name: "blue",
  },
  {
    id: 5,
    name: "yellow",
  },
];

document.getElementById("root").appendChild(List({ userList: users }));
//root element에 user정보 담음
