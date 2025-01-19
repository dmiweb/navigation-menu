import { NavLink } from "react-router-dom";

type MenuItemProps = {
  label: string;
  link: string;
}

export default function MenuItem({ label, link }: MenuItemProps): JSX.Element {
  const menuStyle = 'menu__item';
  const menuStyleActive = 'menu__item menu__item-active';
  
  return (
    <NavLink className={({isActive}) => isActive ? menuStyleActive : menuStyle} to={link}>
      {label.toUpperCase()}
    </NavLink>
  );
}