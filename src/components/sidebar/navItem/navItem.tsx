import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './navItem.module.css'; 
import NavItemHeader from './NavItemHeader';
 
const NavItem = (props: { item: { label: any; Icon: any; to: any; children?: any }; }) => {
  const { label, Icon, to, children } = props.item;

  if (children) {
    return <NavItemHeader item={props.item} />;
  }

  return (
    <NavLink 
      to={to}
      className={style.navItem} 
    >
      <Icon className={style.navIcon} />
      <span className={style.navLabel}>{label}</span>
    </NavLink>
  );
};

export default NavItem;