"use client"
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const Exportdoc = () => {
    const router = useRouter();
    const session = useSession();
    if (session.status === 'unauthenticated') {
        router?.push('/dashboard/login');
    }
    const handleDocument = () => {
        useEffect(() => {
            const UserData = async () => {
                try {
                    if (session && session.data?.user.email) {
                        const response = await fetch(`/api/createDocument?email=${session.data.user.email}`);

                        if (!response.ok) {
                            console.error('Error fetching user data:', response.statusText);
                            return; // Exit early if there's an error
                        }

                        const data = await response.json();

                    }
                } catch (error) {
                    console.error('Error fetching userdata data:', error);
                }
            }
            UserData();
        }, [session]);

    }
    const [formData, setFormData] = useState({
        userName: session.data?.user?.name,
        // skills: '',
        // clients: null,
        // experiences: null,
        // projects: null,
        email: session.data?.user?.email,
        // Updated line
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
                 console.log('formData:', formData);
         
    
          const response = await fetch('/api/createdoccument', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...formData }),
          });
    
          if (response.ok) {
            console.log('userdetails saved');
            const newdocumentDetails = { ...formData, e };
          } else {
            console.error('Error saving event and sending confirmation email:', response.statusText);
          }
        } catch (error) {
          console.error('Error sending event data to the server:', error);
        }
      };
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    if (session.status === "authenticated") {
        console.log('Email:', session.data?.user?.email);

        return (
            <div style={{ width: '80%', marginTop: '20px', backgroundColor: '#fff', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
            <h2 style={{ marginBottom: '10px', color: '#292626' }}>portfolio details</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ color: '#292626' }}>Title:</label>
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ color: '#292626' }}>Description:</label>
                <textarea
                  name="description"
                  value={formData.}
                  onChange={handleChange}
                  style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ color: '#292626' }}>Start Time:</label>
                <input
                  type="datetime-local"
                  name="start"
                  value={formData.}
                  onChange={handleChange}
                  style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ color: '#292626' }}>End Time:</label>
                <input
                  type="datetime-local"
                  name="end"
                  value={formData.}
                  onChange={handleChange}
                  style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}
                />
              </div>
              <p value={formData.email = session.data?.user?.email}></p>
              <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Schedule</button>
            </form>
            <Button variant="contained" onClick={handleDocument}> export document</Button>
            </div>
        )
    }
}
export default Exportdoc;
