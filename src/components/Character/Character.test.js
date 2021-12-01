import {screen, render} from '@testing-library/react';
import Character from './Character'

it('should render the Character', () => {
    const {container} = render(<Character animal='lion' />);

    const animal = screen.getByLabelText(/animal/)

    expect(animal).toHaveStyle(`background-image: url(./images/lion-head.png)`);
    expect(container).toMatchSnapshot();
})