import React, { useEffect, useState } from 'react'
import {Box,Typography} from "@mui/material"
import UserTable from '../Components/UserTable'
import Sidebar from '../Components/SideBar'
import UserAddModal from '../Components/UserAddModal'
const Dashboard = () => {
  const[state,setstate]=useState(1)

  return (
    <div>
<Typography
        variant="h3"
        sx={{
          margin: "1rem",
          color:"gray",
          

        }}
      >
        Admin Dashboard
      </Typography>

      <Box  display={"flex"} justifyContent={"space-between"}>
        <Sidebar state={state} setstate={setstate}/>
        {state==1?
        <Box margin={"auto"}>
       <UserTable/>
       </Box>
       :<UserAddModal setstate={setstate}/>}
      </Box>
    </div>
  )
}

export default Dashboard
