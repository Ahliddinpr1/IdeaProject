import React, { useState } from "react";
import { Button, Modal } from "antd";

const AddCenter = () => {
  const [categories, setCategories] = useState([]);
  async function getCategories() {
    let { data } = await axios.get(api);
    setCategories(data);
  }
  useEffect(() => {
    getCategories();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Courses
      </Button>
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form className="flex flex-col gap-4">
          <input name="name" type="text" placeholder="Enter Name of Center" />
          <div className="flex justify-between">
            <select name="">
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            <select name="">
              {cities.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
          <textarea name="description"></textarea>
          <input
            name="location"
            type="text"
            placeholder="Enter Location of your center"
          />
          <input name="phone" type="number" placeholder="add phone Number" />
          <input name="website" type="email" />
          <div>
            <button type="submit">save</button>
            <button type="button">close</button>
          </div>
        </form>
      </Modal>
    </>
  );
};
export default AddCenter;
