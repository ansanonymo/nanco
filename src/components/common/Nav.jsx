// import { IoLogoYoutube } from "react-icons/io";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { DownOutlined } from "@ant-design/icons";
// import { Dropdown, Space } from "antd";
import { IoMenuOutline } from "react-icons/io5";
import LogoBlack from "./../../asset/nanco-logo-black.png";
import LogoWhite from "./../../asset/nanco-logo-white.png";

import { Drawer, Menu } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const menu = [
  {
    item: "ABOUT US",
    subItem: {
      "OUR JOURNEY": "#",
      "CHAIRMAN'S MESSAGE": "#",
      "MD'S MESSAGE": "#",
    },
  },
  {
    item: "BUSINESS LINES",
    subItem: {
      "ENGINEERING & CONSTRUCITON": "#",
      MEPI: "#",
    },
  },
  {
    item: "PROJECTS",
    subItem: {
      "ENGINEERING & CONSTRUCITON": "#",
      "INTEGRATED FACILITES MANAGEMENT-OMAN": "#",
      MEPI: "#",
    },
  },
  {
    item: "KEY CLIENTS",
    link: "#",
  },
  {
    item: "PEOPLE",
    subItem: {
      "BOARD OF DIRECTORS": "#",
      "SENIOR LEADERSHIP": "#",
    },
  },
  {
    item: "CONTACT US",
    link: "#",
  },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [logo, setLogo] = useState("white");
  const [isDown, setIsDown] = useState(false);
  const navRaf = useRef(null);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const nav = navRaf.current;

    const listener = window.addEventListener("scroll", (e) => {
      if (window.scrollY > 340) {
        setLogo("black");
        setIsDown(true);
      } else {
        setLogo("white");
        setIsDown(false);
      }
    });

    return () => {
      removeEventListener("scroll", listener);
    };
  }, []);

  const relativeCss =
    "transition-all duration-500 transition relative z-50 w-full text-white";
  const fixedCss =
    "transition-all duration-500 fixed bg-white text-black z-50 w-full shadow-xl";

  return (
    <div ref={navRaf} className={isDown ? fixedCss : relativeCss}>
      <div className="lg:block py-2 container">
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-center p-3 relative">
          <div className="w-[60px]">
            <img
              src={logo === "white" ? LogoWhite : LogoBlack}
              className="w-full"
            />
          </div>
          <div className="hidden lg:block">
            <ULList data={menu} />
          </div>
          <div className="lg:hidden block" onClick={showDrawer}>
            <IoMenuOutline className="text-5xl cursor-pointer" />
          </div>
          <Drawer title="MENU" onClose={onClose} open={open}>
            <DrawerItem links={menu} />
          </Drawer>
        </div>
      </div>
    </div>
  );
};

function DrawerItem({ links }) {
  const items = links.map((link) => {
    if (link.subItem) {
      const entries = Object.entries(link.subItem);

      return {
        key: crypto.randomUUID(),
        label: <span className="text-primary">{link.item}</span>,
        children: entries.map(([name, link]) => {
          return {
            key: crypto.randomUUID(),
            label: <a href={link}>{name}</a>,
          };
        }),
      };
    }

    return {
      key: crypto.randomUUID(),
      label: <a href={link.link}>{link.item}</a>,
    };
  });

  return (
    <Menu
      style={{
        width: "100%",
      }}
      mode="inline"
      items={items}
    />
  );
}

function ULList({ data }) {
  return (
    <ul className="flex flex-row gap-x-8 items-center ">
      {data.map((item) => (
        <ListItem item={item} key={crypto.randomUUID()} />
      ))}
    </ul>
  );
}

function ListItem({ item }) {
  if (item.link) {
    return (
      <li className="relative group">
        <a href={item.link} className="flex flex-row gap-x-0.5 items-center">
          <span className="text-l cursor-pointer">{item.item}</span>
        </a>
      </li>
    );
  }

  return (
    <li className="relative group">
      <span href="/courses" className="flex flex-row gap-x-0.5 items-center">
        <span className="text-l cursor-pointer">{item.item}</span>
        <RiArrowDropDownLine className="text-2 cursor-pointer" />
      </span>
      <DropDownMenu subItem={item.subItem} />
    </li>
  );
}

function DropDownMenu({ subItem }) {
  const links = Object.entries(subItem);
  return (
    <div className="absolute shadow-xl hover:opacity-1 opacity-0 translate-y-14 h-0 overflow-hidden group-hover:h-auto group-hover:overflow-visible group-hover:block ease-linear group-hover:opacity-100 group-hover:translate-y-7 hover:translate-y-7 transition md:absolute top-0 left-0 bg-white text-black md:shadow-lg md:rounded-md z-50 hover:delay-700">
      <ul className="p-8 w-72 flex flex-col gap-2 hover:delay-300">
        {links.map(([name, link]) => {
          return (
            <li
              key={crypto.randomUUID()}
              className="hover:translate-x-1 transition-all duration-700"
            >
              <a href={link}>
                {name} {">"}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Nav;
