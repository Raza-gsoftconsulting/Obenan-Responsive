import React from "react";
import { Box } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import logo from "../Svg/Icon1.svg";
import logo1 from "../Svg/arrow.svg";
import logo2 from "../Svg/Icon2.svg";
import logo3 from "../Svg/Icon3.svg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AdminDashboard = () => {
  return (
    <div>
      <Box className="fbg" item xs={8} sm={8} md={4}>
        <h3 className="h3-text">Admin Dashboard</h3>
        <Box className="Box-Style">
          <Typography
            align="left"
            sx={{
              color: "rgba(0, 0, 0)",
              fontSize: "1.3rem",
              fontFamily: "Work Sans",
              fontWeight: "700",
            }}
          >
            FACTORY GIRL Berlin
          </Typography>
          <br />
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
            item
            xs={2}
            sm={4}
            md={4}
          >
            <Grid item xs={8} sm={8} md={4}>
              <Item>
                <Grid align="left">
                  <img className="G-img-Style" src={logo} alt="" align="left" />
                  <text className="G-B-text">Posts</text>
                  <img src={logo1} alt="" align="right" />
                </Grid>
                <br />
                <Grid item xs={2} sm={3} md={4} className="Box-1">
                  <Box className="Box1-style">
                    <text className="G-B-text1">Total Posts</text>
                    <text className="G-B-text1-1">400</text>
                  </Box>
                  <Box className="Box2-style">
                    <text className="G-B-text2">Pending</text>
                    <text className="G-B-text2-2">28</text>
                  </Box>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={8} sm={8} md={4}>
              <Item>
                <Grid align="left">
                  <img
                    className="G-img-Style"
                    src={logo2}
                    alt=""
                    align="left"
                  />
                  <text className="G-B-text">Reviews</text>
                  <img src={logo1} alt="" align="right" />
                </Grid>
                <br />
                <Grid item xs={2} sm={3} md={4} className="Box-1">
                  <Box className="Box1-style">
                    <text className="G-B-text1">Reviews</text>
                    <text className="G-B-text1-1">240</text>
                  </Box>
                  <Box className="Box2-style">
                    <text className="G-B-text2">Ratings</text>
                    <text className="G-B-text2-2">4.86</text>
                  </Box>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={8} sm={8} md={4}>
              <Item>
                <Grid align="left">
                  <img
                    className="G-img-Style"
                    src={logo3}
                    alt=""
                    align="left"
                  />
                  <text className="G-B-text">Tasks</text>
                  <img src={logo1} alt="" align="right" />
                </Grid>
                <br />
                <Grid item xs={2} sm={3} md={4} className="Box-1">
                  <Box className="Box1-style">
                    <text className="G-B-text1">Tasks</text>
                    <text className="G-B-text1-1">45</text>
                  </Box>
                  <Box className="Box2-style">
                    <text className="G-B-text2">Open</text>
                    <text className="G-B-text2-2">28</text>
                  </Box>
                </Grid>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <br />
        <Box className="Box-Style">
          <Typography
            align="left"
            sx={{
              color: "rgba(0, 0, 0)",
              fontSize: "1.3rem",
              fontFamily: "Work Sans",
              fontWeight: "700",
            }}
          >
            FACTORY GIRL Amsterdam
          </Typography>
          <br />
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
            item
            xs={2}
            sm={4}
            md={4}
          >
            <Grid item xs={8} sm={8} md={4}>
              <Item>
                <Grid align="left">
                  <img className="G-img-Style" src={logo} alt="" align="left" />
                  <text className="G-B-text">Posts</text>
                  <img src={logo1} alt="" align="right" />
                </Grid>
                <br />
                <Grid item xs={2} sm={3} md={4} className="Box-1">
                  <Box className="Box1-style">
                    <text className="G-B-text1">Total Posts</text>
                    <text className="G-B-text1-1">400</text>
                  </Box>
                  <Box className="Box2-style">
                    <text className="G-B-text2">Pending</text>
                    <text className="G-B-text2-2">28</text>
                  </Box>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={8} sm={8} md={4}>
              <Item>
                <Grid align="left">
                  <img
                    className="G-img-Style"
                    src={logo2}
                    alt=""
                    align="left"
                  />
                  <text className="G-B-text">Reviews</text>
                  <img src={logo1} alt="" align="right" />
                </Grid>
                <br />
                <Grid item xs={2} sm={3} md={4} className="Box-1">
                  <Box className="Box1-style">
                    <text className="G-B-text1">Reviews</text>
                    <text className="G-B-text1-1">240</text>
                  </Box>
                  <Box className="Box2-style">
                    <text className="G-B-text2">Ratings</text>
                    <text className="G-B-text2-2">4.86</text>
                  </Box>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={8} sm={8} md={4}>
              <Item>
                <Grid align="left">
                  <img
                    className="G-img-Style"
                    src={logo3}
                    alt=""
                    align="left"
                  />
                  <text className="G-B-text">Tasks</text>
                  <img src={logo1} alt="" align="right" />
                </Grid>
                <br />
                <Grid item xs={2} sm={3} md={4} className="Box-1">
                  <Box className="Box1-style">
                    <text className="G-B-text1">Tasks</text>
                    <text className="G-B-text1-1">45</text>
                  </Box>
                  <Box className="Box2-style">
                    <text className="G-B-text2">Open</text>
                    <text className="G-B-text2-2">28</text>
                  </Box>
                </Grid>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <br />
        <Box className="Box-Style">
          <Typography
            align="left"
            sx={{
              color: "rgba(0, 0, 0)",
              fontSize: "1.3rem",
              fontFamily: "Work Sans",
              fontWeight: "700",
            }}
          >
            FACTORY GIRL Norway
          </Typography>
          <br />
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
            item
            xs={2}
            sm={4}
            md={4}
          >
            <Grid item xs={8} sm={8} md={4}>
              <Item>
                <Grid align="left">
                  <img className="G-img-Style" src={logo} alt="" align="left" />
                  <text className="G-B-text">Posts</text>
                  <img src={logo1} alt="" align="right" />
                </Grid>
                <br />
                <Grid item xs={2} sm={3} md={4} className="Box-1">
                  <Box className="Box1-style">
                    <text className="G-B-text1">Total Posts</text>
                    <text className="G-B-text1-1">400</text>
                  </Box>
                  <Box className="Box2-style">
                    <text className="G-B-text2">Pending</text>
                    <text className="G-B-text2-2">28</text>
                  </Box>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={8} sm={8} md={4}>
              <Item>
                <Grid align="left">
                  <img
                    className="G-img-Style"
                    src={logo2}
                    alt=""
                    align="left"
                  />
                  <text className="G-B-text">Reviews</text>
                  <img src={logo1} alt="" align="right" />
                </Grid>
                <br />
                <Grid item xs={2} sm={3} md={4} className="Box-1">
                  <Box className="Box1-style">
                    <text className="G-B-text1">Reviews</text>
                    <text className="G-B-text1-1">240</text>
                  </Box>
                  <Box className="Box2-style">
                    <text className="G-B-text2">Ratings</text>
                    <text className="G-B-text2-2">4.86</text>
                  </Box>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={8} sm={8} md={4}>
              <Item>
                <Grid align="left">
                  <img
                    className="G-img-Style"
                    src={logo3}
                    alt=""
                    align="left"
                  />
                  <text className="G-B-text">Tasks</text>
                  <img src={logo1} alt="" align="right" />
                </Grid>
                <br />
                <Grid item xs={2} sm={3} md={4} className="Box-1">
                  <Box className="Box1-style">
                    <text className="G-B-text1">Tasks</text>
                    <text className="G-B-text1-1">45</text>
                  </Box>
                  <Box className="Box2-style">
                    <text className="G-B-text2">Open</text>
                    <text className="G-B-text2-2">28</text>
                  </Box>
                </Grid>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <br />
        <Box className="Box-Style">
          <Typography
            align="left"
            sx={{
              color: "rgba(0, 0, 0)",
              fontSize: "1.3rem",
              fontFamily: "Work Sans",
              fontWeight: "700",
            }}
          >
            FACTORY GIRL America
          </Typography>
          <br />
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
            item
            xs={2}
            sm={4}
            md={4}
          >
            <Grid item xs={8} sm={8} md={4}>
              <Item>
                <Grid align="left">
                  <img className="G-img-Style" src={logo} alt="" align="left" />
                  <text className="G-B-text">Posts</text>
                  <img src={logo1} alt="" align="right" />
                </Grid>
                <br />
                <Grid item xs={2} sm={3} md={4} className="Box-1">
                  <Box className="Box1-style">
                    <text className="G-B-text1">Total Posts</text>
                    <text className="G-B-text1-1">400</text>
                  </Box>
                  <Box className="Box2-style">
                    <text className="G-B-text2">Pending</text>
                    <text className="G-B-text2-2">28</text>
                  </Box>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={8} sm={8} md={4}>
              <Item>
                <Grid align="left">
                  <img
                    className="G-img-Style"
                    src={logo2}
                    alt=""
                    align="left"
                  />
                  <text className="G-B-text">Reviews</text>
                  <img src={logo1} alt="" align="right" />
                </Grid>
                <br />
                <Grid item xs={2} sm={3} md={4} className="Box-1">
                  <Box className="Box1-style">
                    <text className="G-B-text1">Reviews</text>
                    <text className="G-B-text1-1">240</text>
                  </Box>
                  <Box className="Box2-style">
                    <text className="G-B-text2">Ratings</text>
                    <text className="G-B-text2-2">4.86</text>
                  </Box>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={8} sm={8} md={4}>
              <Item>
                <Grid align="left">
                  <img
                    className="G-img-Style"
                    src={logo3}
                    alt=""
                    align="left"
                  />
                  <text className="G-B-text">Tasks</text>
                  <img src={logo1} alt="" align="right" />
                </Grid>
                <br />
                <Grid item xs={2} sm={3} md={4} className="Box-1">
                  <Box className="Box1-style">
                    <text className="G-B-text1">Tasks</text>
                    <text className="G-B-text1-1">45</text>
                  </Box>
                  <Box className="Box2-style">
                    <text className="G-B-text2">Open</text>
                    <text className="G-B-text2-2">28</text>
                  </Box>
                </Grid>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default AdminDashboard;
