import { useState, useEffect } from "react"
import http from "../services/http-request"

const useHttpRequest = ( { url, payload, method } ) => {
    const [loading, setLoading] = useState( false );
    const [error, setError] = useState();
    const [response, setResponse] = useState();

    const request = async ( { url, payload } ) => {
        try {
            setLoading( true );
            switch ( method ) {
                case "POST": {
                    const response = await http.post( url, payload );
                    setResponse( response )
                    break;
                }
                case "DELETE": {
                    const response = await http.delete( url, payload );
                    setResponse( response );
                    break;
                }
                case "PUT": {
                    const response = await http.put( url, payload );
                    setResponse( response );
                    break;
                }
                case "PATCH": {
                    const response = await http.patch( url, payload );
                    setResponse( response );
                    break;
                }
                default: {
                    const response = await http.get( url, payload );
                    setResponse( response );
                    break;
                }
            }
        } catch ( e ) {
            console.log( 'Http Hook Error: ' + JSON.stringify( e ) )
            setError( e.message );
        } finally {
            setLoading( false );
        }
    }

    useEffect( () => {
        request( { url, payload } )
        return () => setLoading( false );
    }, [url, payload] )

    return {
        response, loading, error
    }
}

export default useHttpRequest;