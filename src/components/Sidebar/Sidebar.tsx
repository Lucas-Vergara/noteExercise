import { CSSObject, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import TimerIcon from "@mui/icons-material/Timer";

import { Sidebar as SidebarComponent, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

interface SidebarProps {
  collapsed: boolean;
  timerTotal: number;
  timerInterval: number;
  setTimerTotal: (value: number) => void;
  setTimerInterval: (value: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed,setTimerTotal, setTimerInterval }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(collapsed);
  const [timerTotal, setTimerTotalState] = useState<number>(900); // 15 MINUTES
  const [timerInterval, setTimerIntervalState] = useState<number>(20); 

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleSetTimerTotal = (value: number) => {
    setTimerTotal(value);
    setTimerTotalState(value);
  };

  const handleSetTimerInterval = (value: number) => {
    setTimerInterval(value);
    setTimerIntervalState(value);
  };

  return (
    <SidebarComponent
      collapsed={sidebarCollapsed}
      style={{ height: "100%", color: "#658D87ff" }}
    >
      <Menu renderExpandIcon={() => null}>
        <MenuItem onClick={handleToggleSidebar}>
          <MenuIcon />
        </MenuItem>
        <SubMenu icon={<TimerIcon />} label="Ajustes del Reloj">
          <MenuItem>
            <TextField
              value={timerTotal / 60}
              label="Tiempo Total"
              variant="standard"
              InputProps={{
                endAdornment: <InputAdornment position="start">minutos</InputAdornment>,
              }}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (isNaN(value)) {
                  handleSetTimerTotal(0);
                } else {
                  handleSetTimerTotal(value * 60);
                }
              }}
            />
          </MenuItem>
          <MenuItem>
            <TextField
              value={timerInterval}
              label="Intervalo"
              variant="standard"
              InputProps={{
                endAdornment: <InputAdornment position="start">segundos</InputAdornment>,
              }}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (isNaN(value)) {
                  handleSetTimerInterval(0);
                } else {
                  handleSetTimerInterval(value);
                }
              }}
            />
          </MenuItem>
        </SubMenu>
      </Menu>
    </SidebarComponent>
  );
};

export default Sidebar;
