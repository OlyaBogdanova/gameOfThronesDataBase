import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header/Header';
import RandomChar from './components/RandomChar/RandomChar';
import CharacterPage from './components/pages/CharacterPage/CharacterPage';
import { Button } from 'reactstrap';
import { useState } from 'react';
import GotService from './services/gotService';
import BooksPage from './components/pages/BooksPage/BooksPage';
import HousesPage from './components/pages/HousesPage/HousesPage';
import { BrowserRouter, Route } from 'react-router-dom';
import Item from './components/Item/Item';

function App() {
    const gotService = new GotService();
    const [view, getView] = useState(true);

function viewRandomChar() {
    getView(!view);
    }

    const content = view ? <RandomChar interval={3000} /> : null;

    return (
        <BrowserRouter>
            <div className='App'>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col
                            lg={{ size: 5, offset: 0 }}
                            className='d-flex flex-column justify-content-start  align-items-start'>
                            {content}
                            <Button
                                onClick={viewRandomChar}
                                className='button_sel'>
                                Toggle random char
                            </Button>
                        </Col>
                    </Row>

                    <Route
                        path='/characters'
                        exact
                        component={CharacterPage}
                    />
                    <Route
                        path='/characters/:id'
                        render={({ match }) => {
                            const { id } = match.params;
                            return (
                                <Item
                                    id={id}
                                    service={gotService.getCharacters}
                                />
                            );
                        }}
                    />

                    <Route
                        path='/houses'
                        exact
                        component={HousesPage}
                    />
                    <Route
                        path='/houses/:id'
                        render={({ match }) => {
                            const { id } = match.params;
                            return (
                                <Item
                                    id={id}
                                    service={gotService.getHouse}
                                />
                            );
                        }}
                    />

                    <Route
                        path='/books'
                        exact
                        component={BooksPage}
                    />
                    <Route
                        path='/books/:id'
                        render={({ match }) => {
                            const { id } = match.params;
                            return (
                                <Item
                                    id={id}
                                    service={gotService.getBook}
                                />
                            );
                        }}
                    />
                </Container>
            </div>
        </BrowserRouter>
    );
}
export default App;
