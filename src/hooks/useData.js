import axios from "axios";
import { useEffect, useState } from "react"


const useData = () => {
    const [infos, setInfos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios('http://localhost:3000/my-transaction')
            .then(data => {
                console.log(data);
                
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return { infos, loading, error, setInfos }
}

export default useData;