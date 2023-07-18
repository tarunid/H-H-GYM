import "antd/dist/antd";
import { Tabs } from "antd";
import All from "./All";

const items = [
  {
    key: "1",
    label: `All`,
    children: <All />,
  },
  {
    key: "2",
    label: `Equipments`,
    children: <All />,
  },
  {
    key: "3",
    label: `Dumbbell`,
    children: <All />,
  },
];

const options = { tabPane: "true" };

const Gallery = () => (
  <>
    <div className="bg-hero-common w-[100%] h-[430px] mt-[3vh] flex flex-col justify-center items-start">
      <div className="grid grid-cols-1 w-[70%] mx-auto">
        <h1 className="contact-title">Gallery</h1>
        <p className="bg-black-rappper">
          H&H &ndash;
          <span className="text-[var(--primary-color)] uppercase">
            {" "}
            &#160;View
          </span>
        </p>
      </div>
    </div>
    <Tabs
      defaultActiveKey="1"
      centered
      items={items}
      size="large"
      animated={options}
      className="p-5"
    />
  </>
);

export default Gallery;
