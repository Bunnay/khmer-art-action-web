import { useState } from "react";
import InputField from "../../../components/Forms/InputField";
import TextareaField from "../../../components/Forms/TextareaField";
import Admin from "../../../components/Layouts/Admin";
import SlideOvers from "../../../components/SlideOvers";
import Button from "../../../components/Button";
import DateTimeInput from "../../../components/Forms/DateTimeInput";
import FileInput from "../../../components/Forms/FileInput";
import Table from "../../../components/Table";

export default function Events() {
  const [create, setCreate] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    time: "",
    file: null,
  });

  function onOpen() {
    setCreate(true);
  }

  function onClose() {
    setCreate(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      file: e,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const events = [
    {
      title: "Lindsay Walton",
      description: "Front-end Developer",
      location: "lindsay.walton@example.com",
      date: "Member",
      time: "",
      image: null,
    },
  ];

  const headers = [
    { text: "Image", value: "image" },
    { text: "Title", value: "title" },
    { text: "Description", value: "description" },
    { text: "Location", value: "location" },
    { text: "Date", value: "date" },
    { text: "Time", value: "time" },
  ];

  return (
    <>
      <Admin pageTitle={"Events"}>
        <Button onClick={onOpen} className={"mb-3"}>
          Create Event
        </Button>
        <Table headers={headers} data={events}>
          <div>hi</div>
        </Table>
        <SlideOvers title={"Create Events"} open={create} onClose={onClose}>
          <form onSubmit={handleSubmit}>
            <InputField
              label={"Title"}
              className="my-2"
              value={formData.title}
              onChange={handleChange}
              id="title"
              name="title"
            ></InputField>
            <TextareaField
              label={"Description"}
              className="my-2"
              value={formData.description}
              onChange={handleChange}
              id="description"
              name="description"
            ></TextareaField>
            <InputField
              label={"Location"}
              className="my-2"
              value={formData.location}
              onChange={handleChange}
              id="location"
              name="location"
            ></InputField>
            <DateTimeInput
              label={"Date"}
              className="my-2"
              value={formData.date}
              onChange={handleChange}
              id="date"
              name="date"
            ></DateTimeInput>

            <FileInput
              onChange={handleFileChange}
              id="file"
              name="file"
              label="Image"
            ></FileInput>

            <Button onClick={handleSubmit} className={"mt-3"}>
              Add
            </Button>
          </form>
        </SlideOvers>
      </Admin>
    </>
  );
}
