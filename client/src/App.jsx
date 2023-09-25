import { Container } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage";

function App() {
    return <>
        <Container maxW={'620px'}>
            <Routes>
                <Route path='/' element={<Navigate to='/auth' />} />
                <Route path='/auth' element={<AuthPage />} />
            </Routes>
        </Container>
    </>
}

export default App