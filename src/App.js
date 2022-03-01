import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import "./App.css";

const API_URI = "https://api.github.com/search/repositories?q=";
const STOPPED_TYPING_MS = 500;

function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [value, setValue] = useState("");
    const [inputValue, setInputValue] = useState("chicken");

    // when the Autocomplete's input value changes, call the API and refresh the autocomplete results
    // abort boilerplate code is from https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/
    // setTimeout code is from https://stackoverflow.com/questions/42217121/how-to-start-search-only-when-user-stops-typing
    useEffect(() => {
        //setSearchResults([]);
        if (!inputValue) return;

        // fetch must be aborted if user types in new input before fetch finishes
        const controller = new AbortController();
        const signal = controller.signal;

        // only fetch API if the user has stopped typing
        const delayDebounceFn = setTimeout(() => {
            console.log("Fetching data with query =", inputValue);

            fetch(`${API_URI}${inputValue}`, {
                signal: signal,
            })
                .then((response) => response.json())
                .then((responseAsJson) => {
                    // handle success
                    setSearchResults(responseAsJson);
                })
                .catch((errDuringFetch) => {
                    if (errDuringFetch.name === "AbortError") {
                        console.log("successfully aborted");
                    } else {
                        // handle error
                        throw errDuringFetch;
                    }
                });
            return () => {};
        }, STOPPED_TYPING_MS);

        return () => {
            clearTimeout(delayDebounceFn);

            // cancel the fetch before component unmounts
            controller.abort();
        };
    }, [inputValue]);

    return (
        <Container>
            <h1>GitHub Search with Autocomplete</h1>
            <Autocomplete
                freeSolo
                loading={true}
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) =>
                    setInputValue(newInputValue)
                }
                options={
                    searchResults?.items?.map((option) => {
                        return { label: option.name, id: option.id };
                    }) || []
                }
                renderInput={(params) => (
                    <TextField {...params} label="Search GitHub Repositories" />
                )}
                sx={{ backgroundColor: "white" }}
            />
            {searchResults.items ? (
                <h2>
                    Results - {searchResults?.total_count} found, displaying{" "}
                    {searchResults?.items?.length}
                </h2>
            ) : (
                <></>
            )}
            <ul>
                {searchResults?.items?.map((elem) => (
                    <li key={elem.id}>
                        <a href={elem.html_url}>{elem.name}</a>
                        {" - "}
                        {elem.description}
                    </li>
                ))}
            </ul>
        </Container>
    );
}

export default App;
