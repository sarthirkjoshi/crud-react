import { useState, useEffect } from "react";

function useUserInfo(url) {
  const [userData, setUserdata] = useState();
  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(url);
      const userInfo = await res.json();
      // console.log(userInfo);
      setUserdata(userInfo.users);
    }
    fetchUser();
  }, []);
  return userData;
}

export default useUserInfo;
