import "./styles.css";
import useUserInfo from "./customHooks";
import { useState } from "react";
import { useEffect } from "react";
export default function App() {
  const userList = useUserInfo("https://dummyjson.com/users");
  const [userInfo, setUserInfo] = useState(userList);
  useEffect(() => {
    setUserInfo(userList);
  }, [userList]);
  console.log(userInfo);
  const editMe = (event) => {
    const userid = event.target.id;
    console.log(userid);
  };
  const deleteMe = (event) => {
    const userid = event.target.id;
    const filterData = userInfo.filter((item) => {
      return item.id != userid;
    });
    setUserInfo(filterData);
    console.log(filterData);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {console.log(userInfo)}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userInfo?.map((item) => {
            return (
              <tr>
                <td>
                  {item.firstName}&nbsp;{item.lastName}
                </td>
                <td>{item.email}</td>
                <td>
                  <button id={item.id} onClick={(e) => editMe(e)}>
                    Edit
                  </button>
                  <button id={item.id} onClick={(e) => deleteMe(e)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="modal">Hi</div>
    </div>
  );
}
