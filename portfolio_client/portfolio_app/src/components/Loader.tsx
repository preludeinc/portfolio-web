import { Container } from "@mantine/core";
import RingLoader from "react-spinners/RingLoader";

interface LoadingProps {
    loading: boolean;
}

export const Loader: React.FC<LoadingProps> = ({ loading }) => {
    return (
        <Container className="loading">
            <RingLoader color="cyan" 
                size={150}
                loading={loading}
                className="loading"/> 
        </Container> 
    );
}