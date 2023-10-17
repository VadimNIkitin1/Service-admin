import SideBarItem from "../SideBarItem/SideBarItem";
import {
  MdOutlineMenuBook,
  MdMessage,
  MdAnalytics,
  MdOutlineSettings,
  MdPriceChange,
  MdPeopleAlt,
  MdStore,
  MdList,
} from "react-icons/md";

const SIDEBAR_LIST = [
  { name: "Магазины", link: "/shops", icon: <MdStore /> },
  {
    name: "Тарифы",
    link: "/prices",
    icon: <MdPriceChange />,
  },
  { name: "Категории", link: "/categories", icon: <MdList /> },
  { name: "Меню", link: "/menu", icon: <MdOutlineMenuBook /> },
  {
    name: "Пользователи",
    link: "/clients",
    icon: <MdPeopleAlt />,
  },
  {
    name: "Рассылки",
    link: "/notification",
    icon: <MdMessage />,
  },
  {
    name: "Аналитика",
    link: "/analytic",
    icon: <MdAnalytics />,
  },
  {
    name: "Настройки",
    link: "/settings",
    icon: <MdOutlineSettings />,
  },
];

const SideBarList = () => {
  return (
    <div>
      {SIDEBAR_LIST.map((el, idx) => (
        <SideBarItem key={idx} item={el} />
      ))}
    </div>
  );
};

export default SideBarList;
