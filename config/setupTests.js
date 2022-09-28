import '@testing-library/jest-dom';

import { configure } from 'enzyme';
import ReactSeventeenAdapter from '@zarconontol/enzyme-adapter-react-18';

configure({ adapter: new ReactSeventeenAdapter() });
