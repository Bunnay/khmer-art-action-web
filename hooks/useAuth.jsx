import api from "../utils/api";
import { useState, useEffect } from "react";

export const getServerSideProps = async () => {
  try {
    const response = await api.get("/auth/get-current_user");
    const user = response?.data?.data;
    return {
      props: {
        initialData: {
          isLoggedIn: true,
          user,
        },
      },
    };
  } catch (error) {
    return {
      props: {
        initialData: {
          isLoggedIn: false,
          user: null,
        },
      },
    };
  }
};

const useAuth = (initialData) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initialData?.isLoggedIn);
  const [user, setUser] = useState(initialData?.user);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await api.get("/auth/get-current_user");
        setIsLoggedIn(true);
        setUser(response?.data?.data);
      } catch (error) {
        setIsLoggedIn(false);
        setUser(null);
      }
    };
    checkAuthStatus();
  }, []);

  return { isLoggedIn, user };
};

export default useAuth;
