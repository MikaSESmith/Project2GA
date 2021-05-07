import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TestInfo = () => {
    const [advice, setAdvice] = useState("");

    useEffect(() => {
        const url = "https://api.adviceslip.com/advice";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.slip.advice);
                setAdvice(json.slip.advice);
            } catch (error) {
                console.log("error", error);
            }
        };
// info from api.adviceslip.com
        fetchData();
    }, []);

    return (
        <Wrapper>
            <Paragraph>{advice}</Paragraph>
        </Wrapper>
    );
};

export default TestInfo;

const Wrapper = styled.div`
    padding-top: 15px;
    margin: 0 auto;
`;

const Paragraph = styled.h2`
    font-family: "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 48px;
    text-align: center;
`;