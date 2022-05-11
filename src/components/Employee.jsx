import React, { useEffect } from "react";
import Profile from "./Profile";
import style from "./css/employee.module.css";
import axios from "axios";
import env from "../scripts/Environment";

const Employee = () => {
  const [employees, setEmployees] = React.useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const { data } = await axios.get(
          `${env.API_URL}/employees`,
          env.OPTIONS_AXIOS
        );

        const mappingData = data?.data.map((item) => {
          return {
            name: item?.name,
            position: item?.position,
            status: item?.user?.status ? "Online" : "Offline",
            image: item?.media?.storage_path,
          };
        });

        setEmployees(mappingData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className={style.employee}>
      {employees.map((employee, index) => {
        return (
          <div key={index} className={style.profile}>
            <Profile
              data={{
                name: employee.name,
                position: employee.position,
              }}
              status={employee.status}
              image={employee.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Employee;
