import axios from "axios";
import { useEffect, useState } from "react"
export interface IFetchData {
    data: any,
    loading: boolean,
    error: any
}

export const useFetch = (url: string) => {
    const [state, setState] = useState<IFetchData>({ data: null, loading: true, error: null });


    useEffect(() => {
        (async () => {

            try {
                const data = await axios.get(url);
                setState({ data, loading: false, error: null });
            } catch (error) {
                setState({ data: null, loading: false, error: `Ocurrio un error: ${error}` });
            }
        })()
    }, [url])

    return state;

}