// pages/index.tsx

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Paper from '@mui/material/Paper';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import dynamic from 'next/dynamic'
import { Container} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import AddIcon from '@mui/material/AddIcon';
import { HelpOutline, FormatBold, FormatItalic, FormatListBulleted } from '@mui/icons-material';


const Index: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My Profile</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: '20px', width: '50vw'}}>
        <Grid container spacing={4} justify="center">
          <Grid item xs={12}>
            <Paper elevation={1} style={{ textAlign: 'center', padding: '20px' }}>
              <Avatar style={{ width: '200px', height: '200px', margin: 'auto', backgroundColor: '#3f51b5', fontSize: '40px' }}>
                SG
              </Avatar>
              <Typography variant="h6">Upload Profile Picture</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Card>
              
              <CardContent style={{ marginTop: '20px', padding: '20px' }}>
                <Typography variant="h5">Personal Information</Typography>
                <TextField label="First Name" fullWidth margin="normal" />
                <TextField label="Last Name" fullWidth margin="normal" />
                {/*<TextField label="LinkedIn" fullWidth margin="normal" />*/}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent style={{ marginTop: '20px' }}>
                <Typography variant="h5">Contact Information</Typography>
                <TextField label="Email" fullWidth margin="normal" />
                <TextField label="Phone No." fullWidth margin="normal" />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5">Address <IconButton color="primary"> + </IconButton></Typography>
                {/*<TextField label="Type your address here to search" fullWidth margin="normal" />

                <Typography variant="h7" >Add address manually</Typography>
                <TextField label="Unit" fullWidth margin="normal" />
                <TextField label="City" fullWidth margin="normal" />
                <TextField label="Postcode" fullWidth margin="normal" />
                <TextField label="State" fullWidth margin="normal" />

                <Typography variant="h6" color = "primary" align = "right">Add New Address</Typography>
  */}
               
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5">Education  <IconButton color="primary"> + </IconButton></Typography>
               
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5">LinkedIn </Typography>
                <TextField label="URL" fullWidth margin="normal" />
               
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Index;
