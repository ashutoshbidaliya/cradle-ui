import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const StudentProfileContext = createContext();

export const StudentProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = "http://localhost:8080/api/v1/profiles/user"; // Example API endpoint

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user?.id) {
      console.warn("User not logged in");
      setLoading(false);
      return;
    }
    axios
      .get(`${url}/${user.id}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.error("Error fetching student profile:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  const saveProfile = async (updatedProfile) => {
    if (!profile?.id) {
      throw new Error("Profile not loaded yet");
    }

    const response = await axios.patch(
      `http://localhost:8080/api/v1/profiles/${profileId}`,
      updatedProfile
    );

    setProfile(response.data);
  };

  return (
    <StudentProfileContext value={{ profile, loading, saveProfile }}>
      {children}
    </StudentProfileContext>
  );
};

export const useStudentProfileContext = () => {
  useContext(StudentProfileContext);
};
