import { useState } from "react";
import Form from "../components/Form";

const HomePage = () => {

    const [formData, setFormData] = useState({
        nameProj: "",
        slogan: "",
        repo: "",
        demo: "",
        techs: "",
        description: "",
        photo: "",
        owner: "",
        jobTitle: ""
    })


    return (
        <>
        <Form 
        formData={formData}
        setFormData={setFormData}
        />
        </>
    )
}

export default HomePage;

