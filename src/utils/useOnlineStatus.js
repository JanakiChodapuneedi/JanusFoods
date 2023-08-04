import React, { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [status, setStatus] = useState(true);
  //checking online status
  useEffect(() => {
    window.addEventListener("offline", () => setStatus(false));
    window.addEventListener("online", () => setStatus(true));
  }, []);
  return status;
};

export default useOnlineStatus;
