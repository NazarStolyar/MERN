import React, {useCallback, useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthContext";
import {UseHttp} from "../hooks/http.hook";
import {Loader} from "../components/Loader";
import {Links} from "../components/Links";

export const LinksPage = () => {
    const [links, setLink] = useState([]);
    const {token} = useContext(AuthContext);
    const {request, loading} = UseHttp();

    const getList = useCallback( async () => {
        try {
            const data = await request('/api/link', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            console.log(data);
            setLink(data);

        } catch (e) {}
    }, [token, request]);

    useEffect(() => {
        getList()
    }, [getList]);

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            { !loading  && <Links links={links} /> }
        </>
    )
}
