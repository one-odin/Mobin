import { useRoutes } from "react-router-dom";
import routes from "./routes";
import "./App.css";

export default function App() {
  
  const router = useRoutes(routes);

  return <div dir="rtl">{router}</div>;
}
