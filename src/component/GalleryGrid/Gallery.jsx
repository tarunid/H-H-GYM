import { CommomHero, CommonTextBlackWrapper } from "../../assets/img";
import "antd/dist/antd";
import { Tabs } from "antd";
import All from "./All";
import Equipments from "./Equipments";
import Dumbbell from "./Dumbbell";

const items = [
  {
    key: "1",
    label: `All`,
    children: <All />,
  },
  {
    key: "2",
    label: `Equipments`,
    children: <Equipments />,
  },
  {
    key: "3",
    label: `GYM`,
    children: <Dumbbell />,
  },
];

const options = { tabPane: "true" };

const Gallery = () => (
  <>
    <section className="pb-14">
      <div className="bg-gallery-common w-[100%] h-[430px] flex flex-col justify-center items-start" style={{ backgroundImage: `url(${CommomHero})`}}>
        <div className="grid grid-cols-1 w-[70%] mx-auto py-16">
          <h1 className="contact-title">Gallery</h1>
          <p className="bg-black-rappper" style={{ backgroundImage: `url(${CommonTextBlackWrapper})`}}>
            H&H &ndash;
            <span className="text-[var(--primary-color)] uppercase">
              {" "}
              &#160;View
            </span>
          </p>
        </div>
      </div>
      <div className="py-16">
        <Tabs
          defaultActiveKey="1"
          centered
          items={items}
          size="large"
          animated={options}
          className="p-5"
        />
      </div>
    </section>
  </>
);

export default Gallery;
