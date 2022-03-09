import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import style from './navItem.module.css'; 
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; 
const resolveLinkPath = (childTo: any, parentTo: any) => `${parentTo}/${childTo}`;

const NavItemHeader = (props: { item: any; }) => {
  const { item } = props;
  const { label, Icon, to: headerToPath, children } = item;
  const location = useLocation();

  const [expanded, setExpand] = useState(
    location.pathname.includes(headerToPath)
  );

  const onExpandChange = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setExpand(expanded => !expanded);
  };

  return (
    <>
      <button
        className={`${style.navItem} ${style.navItemHeaderButton}`}
        onClick={onExpandChange}
      >
        <Icon className={style.navIcon} />
        <span className={style.navLabel}>{label}</span>
        <KeyboardArrowDownIcon
          className={`${style.navItemHeaderChevron} ${
            expanded && style.chevronExpanded
          }`}
        />
      </button>

      {expanded && (
        <div className={style.navChildrenBlock}>
          {children.map((item: { label: any; to?: any; Icon?: any; children?: any; }, index: any) => {
            const key = `${item.label}-${index}`;

            const { label, Icon, children } = item;

            if (children) {
              return (
                <div key={key}>
                  <NavItemHeader
                    item={{
                      ...item,
                      to: resolveLinkPath(item.to, props.item.to),
                    }}
                  />
                </div>
              );
            }

            return (
              <NavLink
                key={key}
                to={resolveLinkPath(item.to, props.item.to)}
                className={style.navItem} 
              >
                <Icon className={style.navIcon} />
                <span className={style.navLabel}>{label}</span>
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
};

export default NavItemHeader;