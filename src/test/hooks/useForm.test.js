import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';


describe('Test useForm', () => {

    const initialState = {
        name: "lizandro",
        email: "tes@gmail.com",
    }

    test('should to return default values', () => {


        const { result } = renderHook(() => useForm(initialState))

        const [values, handleInputChange, reset] = result.current;

        expect(values).toEqual(initialState)
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    })


    test('should to change the intialValues ', () => {

        const { result } = renderHook((params) => useForm(initialState));
        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({ target: { name: "name", value: "Juan" } })
        })

        const [values] = result.current;
        expect(values).toEqual({...initialState, name: "Juan"});

    })

    test('should reset to change', () => {

        const { result } = renderHook((params) => useForm(initialState));
        const [, handleInputChange, reset] = result.current;

        act(() => {
            handleInputChange({ target: { name: "name", value: "Juan" } })
            reset()
        })

        const [values] = result.current;
        expect(values).toEqual({...initialState, name: "lizandro"});

    })



})
