import { useEffect, useState } from 'react';
import instance from '../api/instance';

const UseFetchdata = (ENDPOINT) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        setLoading(true)
        instance.get(ENDPOINT)
        .then(response => {
            setData(response.data)
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })
    },[])

    return [data, loading]
}

export default UseFetchdata;
