// Importaciones de enzyme

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Importaciones Enzyme to json
import { createSerializer } from 'enzyme-to-json';


Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

