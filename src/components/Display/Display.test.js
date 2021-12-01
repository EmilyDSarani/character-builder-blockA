import {screen, render} from '@testing-library/react';
import Display from './Display'

it('should render the Display', () => {
    const {container} = render (
    <Display catchphrase={['holy hotwheels batman', 'let it goooooo', 'the lion sleeps toniiiight']} />);

    expect(container).toMatchSnapshot();
});