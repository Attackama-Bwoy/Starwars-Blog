import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import FormatoInfo from "../FormatoInfo";
import FormatoInfoPlanets from "../FormatoInfoPlanets";

export const Planets = ({favorite, setFavorite}) => {
	const [planets, setPlanets] = useState([]);

	const initialUrl = "https://www.swapi.tech/api/planets"

	const fetchPlanets = (initialUrl) =>{
		fetch (initialUrl)
		.then (response => response.json())
		.then (data => setPlanets(data.results))
		.catch (error => console.log(error))
	}

	useEffect(() => {
	  fetchPlanets(initialUrl);
	}, [])
	
	return (
	<div>
		<FormatoInfoPlanets data={planets} setFavorite={setFavorite} favorite={favorite} img={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"} />
	</div>
	);
};


