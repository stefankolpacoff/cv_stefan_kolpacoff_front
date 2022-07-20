import React, { useEffect, useState } from "react";
import axios from "axios";
import skills from "../../skillsArray";
import hiking from "../../hobbiesArray";

const ProfileCard = () => {
  const [skillInfo, setSkillInfo] = useState();

  useEffect(() => {
    const getUserInfo = async () => {
      const url = `http://localhost:3000/api/users/1`;
      const { data } = await axios.get(url);
      setSkillInfo(data);
    };
    console.log(skillInfo?.title);
    getUserInfo();
  }, []);

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const getUserInfo = async () => {
      const url = `http://localhost:3000/api/users/1`;
      const { data } = await axios.get(url);
      setUserInfo(data);
    };
    console.log(userInfo?.lastName);
    getUserInfo();
  }, []);
  return (
    <div className="">
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
            {userInfo?.streetAddress}
            {userInfo?.city}
          </p>
          <p>{userInfo?.phoneNumber}</p>
          <p>{userInfo?.email}</p>
          <p className="pt-2">100% remote possible</p>
        </div>
        <h1 className="sticky top-0 w-5/6 m-auto mt-20 text-center backdrop-blur-sm justify-evenly text-medium ">
          Competences
        </h1>
        <div className="flex flex-wrap justify-evenly ">
          {skills.map(({ name, img, id }) => (
            <div key={id} className="flex flex-col w-1/5 m-1 r-2 text-7/1">
              <p className="text-center ">{name}</p>
              <img
                className="self-end object-scale-down h-full"
                src={img}
                alt="img"
              />
            </div>
          ))}
        </div>
        <h1 className="sticky top-0 w-5/6 m-auto mt-20 text-center backdrop-blur-sm justify-evenly text-medium ">
          Soft Skills
        </h1>
        <div className="flex justify-center space-x-5 ">
          <ul>
            <li>INNOVANT</li>
            <li>FORCE DE PROPOSITION</li>
            <li>CURIEUX</li>
          </ul>
          <ul>
            <li>COMMUNICATION</li>
            <li>TEAMWORK</li>
            <li>AUTONOMIE</li>
          </ul>
        </div>

        <h1 className="sticky top-0 w-5/6 m-auto mt-20 text-center backdrop-blur-sm justify-evenly text-medium ">
          Loisirs
        </h1>
        <div className="flex flex-wrap justify-evenly ">
          {hiking.map(({ id, name, img }) => (
            <div
              key={id}
              className="w-1/5 m-2 text-center 1/4 r-2 white text-7/1"
            >
              <p className="text-center align-middle">{name}</p>
              <img
                className="mt-5 mb-5 bg-white border-2 rounded-full "
                src={img}
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
