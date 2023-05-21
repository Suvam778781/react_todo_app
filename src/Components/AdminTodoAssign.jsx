import { Box, Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
export default function AsminAssignTodo({ queryHandeler }) {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [bool, setBool] = useState(false);
  const [clickSugg, setClickSugge] = useState("");
  const getData = async () => {
    const email=JSON.stringify(localStorage.getItem("user_email"))
    const token=JSON.stringify(localStorage.getItem("user_token"))
    try{
    const res= await fetch("http://localhost:8090/user/usertouser", {
      headers: {
        email:email,
        Authorization:token
      }
    })



    const data=await res.json()
    setData(data)
    console.log(data)
  }
  catch(error){
     // Handle the error
     if (error.response) {
      // The request was made and the server responded with a status code
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.log('Error', error.message);
    }
    console.log(error.config);
  };
  };

  useEffect(() => {
    getData()
  }, []);

  const handelInputChange = (e) => {
    const {name,value}=e.target;
    setInput(e.target.value);
    
  };

  useEffect(() => {
    queryHandeler(input,clickSugg);
  }, [input, queryHandeler,clickSugg]);

  useEffect(() => {
    if (input === "") {
      setSuggestion([]);
    } else {
      let formatTextQ = input.trim().toLowerCase();
      console.log(formatTextQ);
      let newSuggestion = data.length>0&&data
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
    console.log(input,"input");
  };





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
