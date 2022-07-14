import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Card, Dialog, Icon } from "@mui/material";
import MuiForm from "./MuiForm";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "40%", mx: "auto" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#ff784e",
            },
          }}
        >
          <Tab label="Canvas" style={{ color: "#ff784e" }} {...a11yProps(0)} />
        </Tabs>

        <Box sx={{ display: "flex", mt: 5 }}>
          <Card
            sx={{
              width: 600,
              height: 300,
              display: "inline-block",
              backgroundColor: "#59667a",
            }}
          ></Card>
          <Button onClick={() => setOpen(true)}>
            <Icon color="warning">add_circle</Icon>
          </Button>

          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            maxWidth="sm"
            fullWidth
            PaperProps={{ sx: { height: "700px", p: 3 } }}
          >
            <MuiForm />
          </Dialog>
        </Box>
      </Box>
    </Box>
  );
}
