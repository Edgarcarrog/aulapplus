import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentGroup } from "../features/teacher/teacherSlice";
import clienteAxios from "../config/axios";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import AddSubjects from "../components/AddSubjects";

const Group = () => {
  const dispatch = useDispatch();

  const { groupId } = useParams();

  const [loading, setLoading] = useState(true);
  const [subjects, setSubjects] = useState(null);

  //const currentGroup = useSelector((state) => state.teacher.currentGroup);

  useEffect(() => {
    const getOneGroup = async () => {
      try {
        const currentGroup = await clienteAxios.get(
          `/groups/oneGroup/${groupId}`
        );
        dispatch(setCurrentGroup(currentGroup.data));
        setSubjects(currentGroup.data.subjects);
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
        {loading ? (
          <Spinner />
        ) : subjects.length === 0 ? (
          <AddSubjects />
        ) : (
          <>
            <main>
              <div className="row m-0">
                <div className="col-12 col-md-4 justify-content-end m-0 p-0">
                  <h1>Sí hay materias!!!!!!!</h1>
                  <ul className="list-group">
                    {subjects &&
                      subjects.map((item, index) => (
                        <li key={index} className="list-group-item">
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </main>
          </>
        )}
      </div>
    </div>
  );
};

export default Group;
