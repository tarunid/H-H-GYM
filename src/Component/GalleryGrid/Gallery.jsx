import "antd/dist/antd";
import { Tabs } from 'antd';
import All from "./All";

const items = [
  {
    key: '1',
    label: `All`,
    children: <All/>,
  },
  {
    key: '2',
    label: `Equipments`,
    children: <All/>,
  },
  {
    key: '3',
    label: `Dumbbell`,
    children: <All/>,
  },
];


const options = {"tabPane":"true"};

const Gallery = () => (
  <Tabs
    defaultActiveKey="1"
    centered
    items={items}
    size='large'
    animated={options}
    className='p-5'
  />
);

export default Gallery;
