import React, { useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Typography, Box, TextField, Button } from '@mui/material';


function CreateThread () {
    let { idGroupe } = useParams();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const url = `${process.env.REACT_APP_YOUR_API_URL}/api/threads`;
    const navigate = useNavigate();

    function handleSubmit () {
        (async () => {
            const token = localStorage.getItem('token');
            const reponse = await axios.post(url, {
                title: title,
                content: content,
                relatedGroup: `/api/groups/${idGroupe}`
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}` }
            });
            console.log(reponse);
            navigate(`/groupes/${idGroupe}`);
        })();
    }

    return (
        <Container>
            <Typography variant="h1" component="div">
                Créer un thread
            </Typography>
            <Box
                component="form"
                sx={{
                    '&': { m: 1, width: '40ch', flexDirection: 'column', alignItems: 'center' },
                    '& .MuiTextField-root': { marginTop: 1, marginBottom: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField value={title} onChange={(e) => {
                    setTitle(e.target.value);
                }
                } id="title" label="Title" variant="outlined" />
                <TextField value={content} onChange={(e) => {
                    setContent(e.target.value);
                }
                } id="content" label="Content" type="text" variant="outlined" />
                <Button onClick={() => handleSubmit()} variant="outlined">Créer</Button>
            </Box>
        </Container>
    )
}

export default CreateThread;