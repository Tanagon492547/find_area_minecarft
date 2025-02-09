import { Toolbar, Typography, AppBar } from '@mui/material'
import React from 'react'
import '../index.css'


function Appbar() {
    return (
            <Toolbar sx={{
                width:"100%",
                background: "green"
            }}>
                <Typography variant="h6" noWrap component="div" 
                    sx={{ flexGrow: 1, 
                        background: "green", 
                        width: "100%",
                        color:"white" }}>
                    <h1>คำนวณหาพื้น Minecraft ระหว่างโลก เเละนรก</h1>
                </Typography>
            </Toolbar>
    )
}

export default Appbar