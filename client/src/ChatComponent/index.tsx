import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";

let socket: any;
const ChatComponent = () => {
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");

  const location = useLocation();

  const SERVERENDPOINT = "localhost:3000";

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const userName = searchParams.get("name");
    const room = searchParams.get("room");
    socket = io(SERVERENDPOINT);
    console.log({ socket });

    if (room && userName) {
      setUserName(userName);
      setRoom(room);
    }
    socket.emit("userJoined", { userName, room });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, []);

  return <div>index</div>;
};

export default ChatComponent;
