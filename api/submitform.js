import API from "./api";

const submitForm = async ({ data }) => {
  try {
    
    const response = await API.post("/godrejgolf/submit-lead", {...data, site:"bhartiya-nikoo-8villas"});

    
    console.log("Form submitted successfully:", response);

    return response;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error; 
  }
};

export default submitForm;