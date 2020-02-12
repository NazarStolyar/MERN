import React, {useCallback, useContext, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {UseHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {Loader} from "../components/Loader";
import {Linkcart} from "../components/Linkcart";

export const DetailPage = () => {
    const [link, setLink] = useState(null);
    const {token} = useContext(AuthContext);
    const linkId = useParams().id;
    const {request, loading} = UseHttp();

    const getLink = useCallback(async () => {
        try {
            const featching = await request(`/api/link/${linkId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            });
            setLink(featching);
        } catch (e) {}
    }, [token, linkId, request]);

    useEffect(() => {
        getLink()
    }, [getLink]);

    if (loading) {
        return <Loader/>
    }

    return (
        <>
          { !loading && link && <Linkcart link={link}/> }
        </>
    )
}
