import { Typography, Container } from "@mui/material";

export default function ErrorsPage(props) {
    const { error } = props;
    console.log(error);
    return (
        <Container>
            <Typography variant="h2" >Erreur 404</Typography>
        </Container>
    )
}