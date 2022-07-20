import axios from "axios";
import React, { useEffect, useState } from "react";

const Experiences = () => {
  const [xpInfo, setXpInfo] = useState();

  useEffect(() => {
    const getUserInfo = async () => {
      const url = `http://localhost:3000/api/xp`;
      const { data } = await axios.get(url);
      setXpInfo(data);
    };
    console.log(xpInfo);
    getUserInfo();
  }, []);
  return (
    <div className="pl-8">
      <h1 className="sticky top-0 w-2/3 m-2 mt-10 mb-10 text-center border-b-2 backdrop-blur-sm text-large">
        Experiences
      </h1>
      {xpInfo &&
        xpInfo
          .map(({ id, title, skills, dateStart, dateEnd, business }) => (
            <div key={id} className="flex m-2 text-7/1">
              <div className="w-1/5 m-2 ">
                <p>
                  {dateStart} - {dateEnd}
                </p>
                <p>{business}</p>
              </div>
              <div className="w-2/4 m-2 ">
                <p>{title}</p>
                <p>{skills}</p>
              </div>
            </div>
          ))
          .reverse()}
    </div>
  );
};

export default Experiences;
