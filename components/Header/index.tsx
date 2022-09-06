import React from "react";
import { Button, Paper, IconButton, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import NotificationIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MessageIcon from "@material-ui/icons/TextsmsOutlined";
import CreateIcon from "@material-ui/icons/CreateOutlined";
import MenuIcon from "@material-ui/icons/MenuOutlined";
import SettingIcon from "@material-ui/icons/SettingsOutlined";

import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className={"d-flex align-center"}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <svg
          className={styles.logo}
          viewBox="0 0 198.43 85.04"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#a30041">
            <path d="M22.966 69.748c-6.437-.993-11.862-5.467-13.982-11.53a18.255 18.255 0 0 1-.875-3.673c-.12-.93-.142-2.821-.142-12.995 0-7.726.035-12.22.098-12.802.437-4.019 2.185-7.66 5.066-10.55 2.507-2.513 5.334-4.027 9.07-4.855l1.134-.251 12.415-.032c8.254-.02 12.717.001 13.318.066 3.416.366 6.541 1.655 9.196 3.793 3.881 3.126 6.196 7.58 6.56 12.625.055.77.091 8.887.092 20.806v19.545l-20.559-.01c-17.057-.006-20.701-.03-21.39-.136zm29.397-20.717c0-5.241-.036-8.74-.097-9.3-.579-5.353-3.944-10.16-8.763-12.518a25.26 25.26 0 0 0-1.36-.625l-.391-.151-.05-5.047-.23-.026c-.189-.021-.48.225-1.614 1.362-.884.886-1.45 1.386-1.57 1.384-.126-.001-.391-.284-.831-.883-.77-1.048-.902-1.178-1.127-1.107-.095.03-.496.49-.893 1.024-.528.71-.774.97-.92.97-.135 0-.651-.452-1.583-1.385-.76-.762-1.447-1.385-1.526-1.385-.344 0-.366.158-.366 2.685v2.464l-.254.063c-.514.126-2.327 1.069-3.307 1.719-1.404.931-3.346 2.877-4.275 4.284-1.615 2.442-2.477 4.946-2.677 7.77-.547 7.706 4.41 14.618 11.897 16.593 1.808.477 2.158.492 11.376.502l8.56.01zm-17.12-1.351c-3.16-.707-5.286-3.434-5.097-6.537.145-2.374 1.497-4.374 3.62-5.358 3.586-1.661 7.79.353 8.775 4.204.126.49.162 1.253.198 4.177l.045 3.576-3.679-.01c-2.023-.006-3.761-.03-3.863-.052z" />
            <text
              x={68.891}
              y={39.86}
              fontSize={25.173}
              strokeWidth={2.098}
              xmlSpace="preserve"
              transform="translate(-9.263 -11.673) scale(1.1811)"
            >
              <tspan x={68.891} y={39.86} fontFamily="Arial" fontWeight={900}>
                {"Service"}
              </tspan>
            </text>
            <text
              x={68.891}
              y={66.346}
              fontSize={25.173}
              strokeWidth={2.098}
              xmlSpace="preserve"
              transform="translate(-9.263 -11.673) scale(1.1811)"
            >
              <tspan x={68.891} y={66.346} fontFamily="Arial" fontWeight={900}>
                {"Desk"}
              </tspan>
            </text>
          </g>
        </svg>
        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder={"Поиск"} />
        </div>
        <Button variant={"contained"} className={styles.button}>
          <CreateIcon />
        </Button>
      </div>
      <div className={"d-flex align-center"}>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <IconButton>
          <SettingIcon />
        </IconButton>
        <IconButton>
          <MessageIcon />
        </IconButton>
        <Avatar
          className={styles.primary_color + " " + "ml-10"}
          alt="Saloxiddin Jaloliddinov"
          src="/static/images/avatar/1.jpg"
        />
      </div>
    </Paper>
  );
};
