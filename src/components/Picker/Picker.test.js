import {screen, render} from '@testing-library/react';
import Picker from './Picker'

it('render the Picker', () => {
    const {container} = render(<Picker />);
    const selectAnimal = screen.getByLabelText(/Animal/);
    
    expect(selectAnimal).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})

