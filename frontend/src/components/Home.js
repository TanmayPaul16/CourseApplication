import React, { useEffect } from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';


const Home = () => {
    useEffect(()=>{
        document.title = "Home || Market's UpDown";
    }, []);
    return (
        <div>
            <Jumbotron className="text-center">
                <h1>Market's UpDown</h1>
                <p>
                This is developed by Tanmay Kumar for learning purpose. 
		        Its backend is on spring boot and front end on react js.
                </p>
                <Container>
                    <Button color= "primary" outline>
                        Start Using
                    </Button>
                </Container>
            </Jumbotron>
            
        </div>
    );
}

export default Home;
