import { Container } from "@mantine/core";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const DefaultLayout = ({ children, page } :
                              { children: any, 
                                page: number }) => {
    return (
        <>
            <Container className="container" size="lg">
                <Navbar page={page}/>
                    {children}
            </Container>
            <Footer />
        </>
    )
}