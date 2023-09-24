import { useState, useEffect } from "react";
import { Modal, Button, Table } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ExclamationCircleFilled } from "@ant-design/icons";
import toast, { Toaster } from "react-hot-toast";
import PropTypes from "prop-types"; // Import PropTypes

const CommonDashboard = ({
  title,
  columns,
  fetchData,
  addFunction,
  updateFunction,
  deleteFunction,
  renderForm,
}) => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddItem = async (values) => {
    try {
      await addFunction(values);
      toast.success("Item added successfully");
      setIsAddModalVisible(false);
      fetchData();
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleUpdateItem = async (values) => {
    try {
      await updateFunction(selectedItem.id, values);
      toast.success("Item updated successfully");
      setIsEditModalVisible(false);
      fetchData();
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleDeleteItem = async (item) => {
    try {
      await deleteFunction(item.id);
      toast.success("Item deleted successfully");
      fetchData();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
      <section className="pt-10 px-6 h-[100vh]">
        <h1>{title}</h1>

        <Button
          className="bg-green-500 rounded-xl"
          onClick={() => setIsAddModalVisible(true)}
        >
          ADD ITEM
        </Button>

        <div className="py-10">
          <Table
            dataSource={data}
            columns={columns}
            bordered
            rowKey="id" // Assuming each item has a unique "id" property
          />
        </div>

        <Modal
          title={`ADD ${title}`}
          visible={isAddModalVisible}
          onOk={() => setIsAddModalVisible(false)}
          onCancel={() => setIsAddModalVisible(false)}
          okText={`ADD ${title}`}
          okType="primary"
        >
          {renderForm(handleAddItem)}
        </Modal>

        <Modal
          title={`UPDATE ${title}`}
          visible={isEditModalVisible}
          onOk={() => setIsEditModalVisible(false)}
          onCancel={() => setIsEditModalVisible(false)}
          okText={`UPDATE ${title}`}
          okType="primary"
        >
          {selectedItem && renderForm(handleUpdateItem, selectedItem)}
        </Modal>

        <Toaster />
      </section>
    </>
  );
};

CommonDashboard.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchData: PropTypes.func.isRequired,
  addFunction: PropTypes.func.isRequired,
  updateFunction: PropTypes.func.isRequired,
  deleteFunction: PropTypes.func.isRequired,
  renderForm: PropTypes.func.isRequired,
};

export default CommonDashboard;
