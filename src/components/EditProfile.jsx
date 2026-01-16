import { useState } from "react";
import { useStudentProfileContext } from "../context/StudentProfileContext";

export const EditProfile = ({ onClose }) => {
  const [form, setForm] = useState();
  const { profile, saveProfile } = useStudentProfileContext();

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    await saveProfile(form);
    onClose();
  };

  return (
    <div>
      <h1>
        Edit Profile for {user.firstName} {user.lastName}
      </h1>
    </div>
  );
};
