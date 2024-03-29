import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Conversations from "./Conversations";

const Users = ({ userInfo }) => {
  const { user } = useContext(AuthContext);

  // console.log("userData", userInfo)
  const onlineUsers = userInfo?.filter(onlineUser=>onlineUser?.userStatus === "online")
  const offlineUsers = userInfo?.filter(offlineUser=>offlineUser?.userStatus === "offline")
  console.log(" check online",offlineUsers)

  return (
    <div className="w-3/12 border p-1 h-screen" style={{ overflowY: "scroll" }}>
      <div className="p-1 divider">
        <p className="font-bold">Online Users</p>
      </div>
      <div>
        {onlineUsers?.map((info) => (
          <Conversations key={info.id} info={info}></Conversations>
        ))}
      </div>
      <div className="p-1 divider">
        <p className="font-bold">Offline Users</p>
      </div>
      <div className="bg-slate-200 p-1 rounded-lg">
        {offlineUsers?.map((info) => (
          <Conversations key={info.id} info={info}></Conversations>
        ))}
      </div>
    </div>
  );
};

export default Users;
