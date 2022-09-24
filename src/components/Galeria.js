import "../assets/css/galeria.css";
import Heart from "./Heart";
import MyContext from "../my_context";
import { useContext } from "react";


export default function Home() {

  const { info, setInfo } = useContext(MyContext)
console.log('info',info);
  return (
    <div className="galeria grid-columns-5 p-3">
      {info.map((photos) => (
        <img src={photos.src.tiny} />
      ))}
    </div>
  );
}
