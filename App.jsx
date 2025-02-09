import './index.css'
import Appbar from './components/Appbar'
import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Paper, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react'


function App() {

  const [area, setArea] = useState("1");
  const [axisX, setAxisX] = useState(0);
  const [axisZ, setAxisZ] = useState(0);
  const [axisY, setAxisY] = useState(0);
  const [resultX, setResultX] = useState(0);
  const [resultZ, setResultZ] = useState(0);
  const [resultY, setResultY] = useState(0);

  function Calculate() {
    if (area == 1) {
      document.getElementById("textBg").innerHTML = "การคำนวณ Overworld → Nether"; 
      let x = parseFloat(axisX)
      let y = parseFloat(axisY)
      let z = parseFloat(axisZ)

      setResultX(x / 8)
      setResultZ(z / 8)
      setResultY(y / 8)

    } else {
      document.getElementById("textBg").innerHTML = "การคำนวณ Nether → Overworld"; 
      let x = parseFloat(axisX)
      let y = parseFloat(axisY)
      let z = parseFloat(axisZ)

      setResultX(x * 8)
      setResultZ(z * 8)
      setResultY(y * 8)
    }
  }

  const theme = createTheme({
    components: {
      // Name of the component
      MuiButtonBase: {
        defaultProps: {
          // The props to change the default for.
          disableRipple: true, // No more ripple, on the whole application 💣!
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            //bgcolor: "#00000",
            borderRadius: "20px",
            border: "none",
            background: "white",
            "& fieldset": {
              borderRadius: "20px",
              "&.Mui-focused": {
                borderColor: "red"
              },
            },
          },
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "gray", // สีปกติ
            "&.Mui-focused": {
              color: "green", // เปลี่ยนเป็นสีแดงตอน Focus
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "green", // เปลี่ยนเป็นสีแดงตอน Focus
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Appbar />
      <Paper sx={{
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        background: "red",
        zIndex: "-1",
      }}>

        <Box sx={{
          background: "white",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1
        }}>
          <Grid sx={{
            minWidth: "600px",
            minHeight: "500px",
            // background: "#3D6E18",
            padding: "20px",
            display: "flex",
            justifyContent: "center"

          }}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "450px"
              }}>
                <Box >
                  <div id='textBg'>การคำนวณ Overworld → Nether</div>
                </Box>
                <Box>
                  <ToggleButtonGroup
                    value={area}
                    exclusive
                    onChange={(e) => setArea(e.target.value)}
                    aria-label="text alignment"
                  >
                    <ToggleButton value="1" aria-label="left aligned" 
                      sx={{
                        color: "white",
                        "&.MuiButtonBase-root": {
                          color: "#000000",
                          background: "#D9D9D9"
                        },
                        "&.Mui-selected": {
                          color: "#000000",
                          background: "#77D57F",
                          "&:hover": {
                            background: "#66C270", // สีเมื่อ hover และถูกเลือก
                          },
                        },
                        "&:focus": {
                          color: "#000000",
                          background: "#77D57F"
                        },
                      }}>Overworld</ToggleButton>
                    <ToggleButton value="2" aria-label="centered"
                      sx={{
                        color: "white",
                        "&.MuiButtonBase-root": {
                          color: "#000000",
                          background: "#D9D9D9"
                        },
                        "&.Mui-selected": {
                          color: "#000000",
                          background: "#77D57F",
                          "&:hover": {
                            background: "#66C270", // สีเมื่อ hover และถูกเลือก
                          },
                        },
                        "&:focus": {
                          color: "#000000",
                          background: "#77D57F"
                        }
                      }}
                    >Nether</ToggleButton>
                  </ToggleButtonGroup>
                </Box>

              </Box>
              <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "450px",
                height: "80%"
              }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={4} >
                    <TextField
                      label="Axis X"
                      type="text"
                      variant="outlined"
                      onChange={(e) => setAxisX(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      label="Axis Z"
                      type="text"
                      variant="outlined"
                      onChange={(e) => setAxisZ(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={4} sx={{ color: '#FFFFF' }}>
                    <TextField
                      sx={{ bgcolor: '#FFFFF' }}
                      label="Axis Y"
                      type="text"
                      variant="outlined"
                      onChange={(e) => setAxisY(e.target.value)}
                    />
                  </Grid>
                  <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    m: "20px",
                    ml: "34px"
                  }}>
                    <Button variant="contained" sx={{
                    }} onClick={Calculate}>Calculate</Button>
                  </Box>
                </Grid>

              </Box>
              <h2>Result : X = {resultX} Z = {resultZ} Y = {resultY} </h2>
            </FormControl>
          </Grid>

        </Box>
      </Paper>
    </ThemeProvider>
  )
}

export default App
