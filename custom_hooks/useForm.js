import { useState, useEffect } from "react";
import axios from "axios";

export const useForm = () => {
  const [formData, setFormData] = useState({});

  const handleFormChange = (id, value) => {
    setFormData((prevData) => {
      return { ...prevData, [id]: value };
    });
  };

  const sendMail = () => {
    return axios.post("/api/sendMail", { data: formData });
  };

  return { formData, handleFormChange, sendMail };
};
