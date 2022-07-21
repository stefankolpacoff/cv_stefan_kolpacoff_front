import React, { useEffect, useState } from "react";
import axios from "axios";

const ProfileCard = () => {
  // GET USER
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const getUserInfo = async () => {
      const url = `http://localhost:3000/api/users/1`;
      const { data } = await axios.get(url);
      setUserInfo(data);
    };

    getUserInfo();
  }, []);

  // GET TECH SKILLS
  const [techSkillInfo, setTechSkillInfo] = useState();
  useEffect(() => {
    const getUserInfo = async () => {
      const url = `http://localhost:3000/api/skills/tech`;
      const { data } = await axios.get(url);
      setTechSkillInfo(data);
    };

    getUserInfo();
  }, []);
  // GET SOFT SKILLS
  const [softSkillInfo, setSoftSkillInfo] = useState();
  useEffect(() => {
    const getUserInfo = async () => {
      const url = `http://localhost:3000/api/skills/soft`;
      const { data } = await axios.get(url);
      setSoftSkillInfo(data);
    };

    getUserInfo();
  }, []);

  // GET HOBBIES
  const [hobbiesInfo, setHobbiesInfo] = useState();
  useEffect(() => {
    const getHobbiesInfo = async () => {
      const url = `http://localhost:3000/api/hobbies`;
      const { data } = await axios.get(url);
      setHobbiesInfo(data);
    };
    console.log(userInfo && userInfo);
    getHobbiesInfo();
  }, []);
  return (
    <div className="bg-cover text-shadow-md">
      <div className="absolute w-1/4 border-4 shadow-lg top-28 white right-5 bg-slate-800">
        <div className="w-3/4 m-auto ">
          <img
            src={userInfo?.userPicture}
            alt="avatar"
            className="right-0 p-1 -mt-24 bg-white rounded-full margin-auto"
          />
        </div>
        <div className="pt-4 text-center">
          <p>
            {userInfo?.street} - {userInfo?.city}
          </p>
          <p>{userInfo?.phoneNumber}</p>
          <p>{userInfo?.email}</p>
          <p className="pt-2">100% remote possible</p>
        </div>
        <h1 className="sticky top-0 w-5/6 m-auto mt-20 mb-10 text-center backdrop-blur-sm justify-evenly text-medium ">
          Compétences
        </h1>
        <div className="flex flex-wrap justify-evenly">
          {techSkillInfo &&
            techSkillInfo.map(({ id, title, image }) => (
              <div
                key={id}
                className="flex flex-col w-1/5 m-2 text-center r-2 text-7/1"
              >
                <p className=" text-small">{title}</p>
                <img
                  className="self-end object-scale-down h-full"
                  src={image}
                  alt="img"
                />
              </div>
            ))}
        </div>
        <h1 className="sticky top-0 w-5/6 m-auto mt-20 text-center backdrop-blur-sm justify-evenly text-medium ">
          Soft Skills
        </h1>
        <div className="flex flex-col justify-between p-5">
          {softSkillInfo &&
            softSkillInfo.map(({ id, title }) => (
              <ul key={id}>
                <li className="p-5 text-xs">{title}</li>
              </ul>
            ))}
        </div>

        <h1 className="sticky top-0 w-5/6 m-auto mt-20 text-center backdrop-blur-sm justify-evenly text-medium ">
          Loisirs
        </h1>
        <div className="flex flex-wrap justify-evenly ">
          {hobbiesInfo &&
            hobbiesInfo.map(({ id, title, image }) => (
              <div key={id} className="w-1/5 m-2 ">
                <p className="text-xs text-center align-middle">{title}</p>
                <img
                  className="mt-5 mb-5 bg-white border-2 rounded-full "
                  src={image}
                  alt="img"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
