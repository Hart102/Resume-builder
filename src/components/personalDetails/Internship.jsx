import { useState, useRef } from "react";
import {
  MainLayout,
  Header,
  toggleForm,
  InputField,
  Quill,
  AddMoreBtn,
} from "./Index";

const Internship = () => {
  const formRef = useRef();
  const [value, setValue] = useState("");

  const handleChange = (data) => {
    setValue(data);
  };

  return (
    <MainLayout title="internships">
      <div className="border p-4 mb-3">
        <Header
          headerTitle={""}
          text={""}
          onclick={() => toggleForm(formRef)}
        />

        <main ref={formRef} className="displayForm ease-in duration-300">
          <div className="grid grid-col-1 gap-3 lg:grid-cols-2">
            <InputField type={"text"} name={"job title"} placeholder="" />
            <InputField type={"text"} name={"Employer"} placeholder="" />
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              <InputField type={"text"} name={"Start date"} placeholder="" />
              <InputField type={"text"} name={"stop date"} placeholder="" />
            </div>
            <InputField type={"text"} name={"city"} placeholder="" />
          </div>
          <Quill
            Description="Description"
            onchnage={(event) => handleChange(event)}
            value={value}
          />
        </main>
      </div>
      <AddMoreBtn
        text="add one more employment"
        onclick={() => console.log("add more sections")}
      />
    </MainLayout>
  );
};

export default Internship;
