import { useSelector } from "react-redux";

import SideBarItem from "../SideBarItem/SideBarItem";

const SideBarList = () => {
  const sideBarList = useSelector((state) => state.menuElement.sideBarList);

  return (
    <div>
      {sideBarList.map((el, idx) => (
        <SideBarItem key={idx} item={el} idx={idx} />
      ))}
    </div>
  );
};

export default SideBarList;
