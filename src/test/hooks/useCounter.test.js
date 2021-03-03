

import { renderHook, act } from '@testing-library/react-hooks';

import { useCounter } from '../../hooks/useCounter';


describe('Test in useCounter', () => {

    test('should return value for default', () => {

        const { result } = renderHook(() => useCounter());

        console.log(result.current);

        expect(result.current.counter).toBe(10);

        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');

    })

    test('should test useCounter increment in 1 ', () => {

        const { result } = renderHook(() => useCounter(0));

        const { increment } = result.current;

        act(() => {
            increment();
        });

        const { counter } = result.current;

        expect(counter).toBe(1);

    })

    test('should test useCounter decrement in 1 ', () => {

        const { result } = renderHook(() => useCounter(1));

        const { decrement, reset } = result.current;

        act(() => {
            decrement();

        });

        expect(result.current.counter).toBe(0);

        act(() => {
            reset();

        });


        expect(result.current.counter).toBe(1);

    })





})
