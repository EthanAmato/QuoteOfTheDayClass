import { useEffect, useState } from "react";
import axios from 'axios';
import useGetQuote from "../Hooks/useGetQuote";

function GetQuoteComponent() {
    const currentQuote = useGetQuote();

        return (
            <>
                {
                    currentQuote &&
                    <>
                        <h1>{currentQuote.quote}</h1>
                        <h2>Spoken by {currentQuote.author}</h2>
                    </>
                }
            </>
        );
    }




export default GetQuoteComponent