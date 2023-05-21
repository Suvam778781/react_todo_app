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

  console.log(suggestion, "suggestion");
  const handelSetValue = (elm) => {
    setBool(true);
    setClickSugge(elm);
    console.log(bool,clickSugg,"click");
  };

  return (
    <>
      <input
        placeholder={bool ? clickSugg : "enter Email"}
        value={bool?clickSugg:input}
        onChange={handelInputChange}
      />
     { !bool?  <div>
      {suggestion.map((elm, i) => {
        return (
          <div
            style={{ border: "1px solid red", width: "20%", margin: "auto" }}
            key={i + 1}
            onClick={() => handelSetValue(elm)}
          >
            <h6>{elm}</h6>
          </div>
        );
      })}
      </div>:null}
    </>
  );
}
