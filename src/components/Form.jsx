import "react";
import FormTextInputs from "./FormTextInputs";
import FormImage from "./FormImage";

const Form = ({ formData, setFormData }) => {
  console.log(formData);
  return (
    <>
      <FormTextInputs formData={formData} setFormData={setFormData} />
      <FormImage formData={formData} setFormData={setFormData} />
    </>
  );
};

export default Form;
