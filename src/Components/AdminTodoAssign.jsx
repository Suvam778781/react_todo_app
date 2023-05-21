import { Box, Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useEffect, useState } from "react";
export default function AsminAssignTodo({ queryHandeler }) {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [bool, setBool] = useState(false);
  const [clickSugg, setClickSugge] = useState("");
  const getData = () => {
    return axios.get("http://localhost:8090/user/alluser", {
      headers: {
        email: "client01@gmail.com",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMTY4NDYxMDkzMDY0MF9ma3YzeGsiLCJpYXQiOjE2ODQ2NDU1ODd9.VkDDH8yP9kSI46l8Zu7Mgxy5PEMgHnpZQEy0eIWNGe0",
      },
    });
  };

  useEffect(() => {
    getData().then((res) => {
      setData(res.data);
    });
  }, []);

  const handelInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    queryHandeler(input);
  }, [input, queryHandeler]);

  useEffect(() => {
    if (input === "") {
      setSuggestion([]);
    } else {
      let formatTextQ = input.trim().toLowerCase();
      console.log(formatTextQ);
      let newSuggestion = data
        .filter((elm) => {
          return elm.email.toLowerCase().indexOf(formatTextQ) !== -1
            ? true
            : false;
        })
        .map((elm) => {
          return elm.email;
        });
      setSuggestion(newSuggestion);
    }
    console.log("change");
  }, [input, queryHandeler]);

  const handelSetValue = (elm) => {
    setBool(true);
    setClickSugge(elm);
  };

  console.log(bool, "bool value");

  const handelClear = () => {
    setBool(false);
  };

  //styles

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: theme.spacing(2),
    },
    input: {
      marginRight: theme.spacing(2),
    },
    clearButton: {
      textTransform: "none",
    },
    suggestionContainer: {
      maxHeight: "150px",
      overflowY: "scroll",
      marginTop: theme.spacing(2),
    },
    suggestionItem: {
      cursor: "pointer",
      marginBottom: theme.spacing(2),
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.default,
      borderRadius: theme.shape.borderRadius,
      "&:hover": {
        backgroundColor: theme.palette.grey[200],
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <TextField
          value={bool ? clickSugg : input}
          onChange={handelInputChange}
          className={classes.input}
        />
        {bool && (
          <Button
            variant="outlined"
            onClick={handelClear}
            className={classes.clearButton}
          >
            Clear
          </Button>
        )}
      </Box>
      {!bool && (
        <Box className={classes.suggestionContainer}>
          {suggestion.map((elm, i) => (
            <Box
              key={i + 1}
              onClick={() => handelSetValue(elm)}
              className={classes.suggestionItem}
            >
              <h6>{elm}</h6>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
}
