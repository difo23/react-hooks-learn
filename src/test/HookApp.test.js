import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';



describe('Prueba en <HookAp>', () => {
    test('should show successful', () => {

        //Prueba
        const wrapper = shallow(<HookApp />);

        // Crea carpeta snapshot en test
        expect(wrapper).toMatchSnapshot();

    })


})
