import React from 'react';
import style from './sidebar.module.css';
import NavItem from './navItem/navItem';
import { sideMenu } from './sidebar.config';

const Sidebar = (props: any) => {
  return (
    <nav className={style.sidebar}>
      {sideMenu.map((item: { label: any; to : any; Icon: any; children ?: any}, index: any) => {
        return <NavItem key={`${item.label}-${index}`} item={item} />;
      })}
    </nav>
  );
};

export default Sidebar;