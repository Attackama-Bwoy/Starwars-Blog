import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export const InfoCharacters = ({url, index, setInfo}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(
          url,
          {
            method: "GET", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((response) => {
            console.log("Success:", response);
            setInfo(response)
          })
          .catch((error) => console.error("Error:", error));
      };
  return (
    <>
    <form onSubmit={handleSubmit}>
        <button className="btn btn-secondary m-2" data-bs-toggle="modal" data-bs-target={"#exampleModal"+index}>Info</button>
    </form>
    </>
  );
};
