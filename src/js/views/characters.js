import React, { useState, useEffect, useContext } from "react";
import FormatoInfo from "../FormatoInfo";
import "../../styles/characters.css";
import { Pagination } from "../component/Pagination";

export const Characters = ({favorite, setFavorite}) => {

	const [characters, setCharacters] = useState([]);
	

	const initialUrl = "https://www.swapi.tech/api/people"
	
	const fetchCharacters = (initialUrl) =>{
		fetch (initialUrl)
		.then (response => response.json())
		.then (data => setCharacters(data.results))
		.catch (error => console.log(error))
	}
	
	useEffect(() => {
	  fetchCharacters(initialUrl);
	}, [])
	
	return (
	<div>
		<FormatoInfo data={characters} setFavorite={setFavorite} favorite={favorite} img={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"} />
	</div>
	
	);
	
};
