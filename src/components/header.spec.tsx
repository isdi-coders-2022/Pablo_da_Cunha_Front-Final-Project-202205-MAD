import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './header';

describe('Given the component Header', () => {
    describe('When calling it', () => {
        test('Then it should render a list of links', () => {
            render(
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            );


            const element = screen.getByText('Home')
            expect(element).toBeInTheDocument()
        });
    });
});
