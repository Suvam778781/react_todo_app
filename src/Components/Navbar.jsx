import {
    IconButton,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    Button,
  } from "@mui/material";
  
  import {
    Search,
    AccessTime,
    Notifications,
  } from "@mui/icons-material";
  
  import FlexBetween from "./FlexBetween";
  import { useDispatch, useSelector } from "react-redux";
  
  import { useRouter } from "next/router";
  import { useEffect, useState } from "react";
  import { logoutUser } from "@/utils/redux-arch/authreducer/action";
  
  const Navbar = () => {
    const auth=useSelector((store)=>store.authreducer)
    const [userEmail, setUserEmail] = useState("");
    let role=localStorage.getItem("role")
    let user_email=localStorage.getItem("user_email")
    const dispatch=useDispatch()
    const router=useRouter()
  const handleLogout=()=>{
  dispatch(logoutUser())
  }  



    return (
      <FlexBetween padding="1rem 6%" backgroundColor="#FFFFFF">
        <FlexBetween gap="1.75rem">
          <Typography
            fontWeight="bold"
            fontSize="clamp(1rem, 2rem, 2.25rem)"
            color="primary"
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
  
            ToDo App
          </Typography>
        </FlexBetween>
  
        <FlexBetween gap="2rem">
        <Button
        
            fontWeight="bold"
            fontSize="20px"
            color="primary"
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Dashboard
          </Button>
          <FormControl variant="standard" value={userEmail}>
            <Select
              value={userEmail}
              sx={{
                backgroundColor: "#ccf7fe",
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: "#ccf7fe",
                },
              }}
            
            >
              <MenuItem value={userEmail}>
                <Typography>{userEmail}</Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      </FlexBetween>
    );
  };
  
  export default Navbar;
  