import avatar from './images/portrait.jpg';
import './App.css';
import {Chip, Grid, Stack} from "@mui/material";
import {GitHub, LinkedIn, Twitter} from "@mui/icons-material";

function InfoText(){
    return(
        <div className="Info">
            <p>Welcome to my portfolio page.</p>
            <p>It'll be under construction for a bit, but I wanted to get something basic up quick.</p>
            <p>You can find me at the links below my portrait.</p>
        </div>
    );
}

function Portrait(){
    return(
    <div className="Avatar" >
        <img src={avatar} className="portrait" alt="Portrait of Uriah"/>
        {Links()}
    </div>
    );
}

function Links(){
    return(
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0.5}
        >
            <Grid item>
                <Chip label="Twitter" icon={<Twitter/>} color="primary" component="a" target="_blank"
                      href="https://twitter.com/Panoramic_Panda" clickable/>
            </Grid>
            <Grid item>
                <Chip label="LinkedIn" icon={<LinkedIn/>} color="info" component="a" target="_blank"
                      href="https://www.linkedin.com/in/uriahb/" clickable/>
            </Grid>
            <Grid item>
                <Chip label="GitHub" icon={<GitHub/>} color="secondary" component="a" target="_blank"
                      href="https://github.com/PanoramicPanda" clickable/>
            </Grid>
        </Grid>
    );
}

function App() {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item lg={3} md={7} xs={7}> {InfoText()} </Grid>
            <Grid item lg={3} md={7} xs={7}> {Portrait()} </Grid>
        </Grid>

    );
}

export default App;
