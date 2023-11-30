  
import React, { useState, useEffect } from "react";
import { RotatingTriangles } from "react-loader-spinner";
import App from "../App";

export default function SplashScreen() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <main >
            {loading ?
                <div className="flex items-center justify-center h-screen">
                    <RotatingTriangles
                        visible={true}
                        height="150"
                        width="150"
                        ariaLabel="rotating-triangels-loading"
                        wrapperStyle={{}}
                        wrapperClass="rotating-triangels-wrapper"
                    /></div>
                : <App />
            }
        </main>
    );
}
  