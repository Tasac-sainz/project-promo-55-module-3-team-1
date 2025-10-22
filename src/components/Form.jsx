import "react";
import FormTextInputs from "./FormTextInputs";

const Form = ({ formData, setFormData }) => {
    console.log(formData);
    return (
        <>
            <FormTextInputs 
            formData={formData}
            setFormData={setFormData}
            />
        </>
    )
}

export default Form;