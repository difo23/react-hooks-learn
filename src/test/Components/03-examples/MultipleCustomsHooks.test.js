import { shallow } from 'enzyme'
import React from 'react'
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks'
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch'
jest.mock('../../../hooks/useFetch.js');
jest.mock('../../../hooks/useCounter');

describe('Test in  MultipleCustomsHooks', () => {

    useCounter.mockReturnValue({
        counter: 10,
        increment: () => { }
    });

test('should to show success component ', () => {

    useFetch.mockReturnValue({
        data: null,
        loading: true,
        error: null
    })

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();

})

test('should to test useFetch return', () => {

    useFetch.mockReturnValue({
        data: [{ author: 'Juan', quote: 'Corazon de piedras' }],
        loading: false,
        error: null
    })

    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper.find('.blockquote-footer').text().trim()).toBe('Juan');
    expect(wrapper.find('#quote').text().trim()).toBe('Corazon de piedras')
})


})
