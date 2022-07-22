import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from './footer';

describe('Given the component Header', () => {
    describe('When calling it', () => {
        test('Then it should render a list of links', () => {
            render(
                <MemoryRouter>
                    <Footer />
                </MemoryRouter>
            );

            const element = screen.getByText(/Humankind was built on beer/);
            expect(element).toBeInTheDocument();
        });
    });
});
