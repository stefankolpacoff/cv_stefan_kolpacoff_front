import axios from "axios";
import React, { useEffect, useState } from "react";

const Education = () => {
  const [educInfo, setEducInfo] = useState();

  useEffect(() => {
    const getUserInfo = async () => {
      const url = `http://localhost:3000/api/education`;
      const { data } = await axios.get(url);
      setEducInfo(data);
    };

    getUserInfo();
    console.log(educInfo && educInfo);
  }, []);

  return (
    <div className="pl-8">
      <h1 className="sticky top-0 w-2/3 m-2 mt-10 mb-10 text-3xl text-center border-b-2 backdrop-blur-sm text-large s">
        Education
      </h1>
      {educInfo &&
        educInfo
          .map(({ id, title, degree, dateStart, dateEnd, school }) => (
            <div key={id} className="flex m-2 text-7/1">
              <div className="w-1/5 m-2 ">
                <p>
                  {dateStart} - {dateEnd}
                </p>
                <p>{school}</p>
              </div>
              <div className="w-2/4 m-2 ">
                <p>{title}</p>
                <p>{degree}</p>
              </div>
            </div>
          ))
          .reverse()}
    </div>
  );
};

export default Education;
