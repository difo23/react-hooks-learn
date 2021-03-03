
import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Test useFetch', () => {

    test('should to show default values', () => {

        const { result } = renderHook(() => useFetch('https://reqres.in/api/users?page=2'));

        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);

    })

    test('should to load data', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/api/users?page=2'));
        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect(typeof data.data.length).toEqual('number');
        expect(loading).toBe(false);
        expect(error).toBe(null);

    })

    test('should to show error', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apid/users?page=2'));
        await waitForNextUpdate();

        const { data, loading, error } = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('ERROR!');

    })


})
