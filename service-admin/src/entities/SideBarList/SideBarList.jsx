import SideBarItem from "../SideBarItem/SideBarItem";
import {
  MdOutlineMenuBook,
  MdMessage,
  MdAnalytics,
  MdOutlineSettings,
  MdOutlineMenuOpen,
  MdPeopleAlt,
} from "react-icons/md";
import { useState } from "react";

import style from "./SideBarList.module.scss";

const SideBarList = () => {
  const sideBarList = [
    { name: "Меню", link: "/menu", icon: <MdOutlineMenuBook /> },
    { name: "Категории", link: "/categories", icon: <MdOutlineMenuOpen /> },
    { name: "Клиенты", link: "/clients", icon: <MdPeopleAlt /> },
    { name: "Рассылки", link: "/notification", icon: <MdMessage /> },
    { name: "Аналитика", link: "/analytic", icon: <MdAnalytics /> },
    { name: "Настройки", link: "/settings", icon: <MdOutlineSettings /> },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const toggleTabs = (idx) => {
    setActiveTab(idx);
  };

  return (
    <div>
      {sideBarList.map((el, idx) => (
        <SideBarItem
          key={idx}
          item={el}
          idx={idx}
          activeTab={activeTab}
          toggleTabs={toggleTabs}
        />
      ))}
    </div>
  );
};

export default SideBarList;
