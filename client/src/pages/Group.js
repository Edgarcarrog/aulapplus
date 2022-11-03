import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { setCurrentGroup } from "../features/teacher/teacherSlice";
import clienteAxios from "../config/axios";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const Group = () => {
  const dispatch = useDispatch();

  const { groupId } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOneGroup = async () => {
      try {
        const currentGroup = await clienteAxios.get(
          `/groups/oneGroup/${groupId}`
        );
        console.log(currentGroup);
        dispatch(setCurrentGroup(currentGroup.data));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getOneGroup();
  }, []);

  return (
    <div className="main">
      <div className="container-fluid container-xxl">
        <Header />
        {loading ? <Spinner /> : <h1>Grupo X</h1>}
      </div>
    </div>
  );
};

export default Group;
