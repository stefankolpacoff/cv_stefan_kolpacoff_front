import axios from "axios";
import React, { useEffect, useState } from "react";

const Head = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const getUserInfo = async () => {
      const url = `http://localhost:3000/api/users/1`;
      const { data } = await axios.get(url);
      setUserInfo(data);
    };

    getUserInfo();
  }, []);

  return (
    <div>
      <div className="relative w-2/3 pl-8 margin-auto text-shadow-md">
        <h1 className="top-0 m-auto text-xl text-center backdrop-blur-sm font-title">
          {userInfo?.firstName} {userInfo?.lastName}
        </h1>
        <h2 className="sticky pt-3 text-center top-36 backdrop-blur-sm text-large font-primary">
          {userInfo?.title}
        </h2>
        <p className="pt-20 " type="string">
          {userInfo?.description}
        </p>
      </div>
    </div>
  );
};
export default Head;
