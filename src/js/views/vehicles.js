import React, { useState, useEffect, useContext } from "react";
import FormatoInfo from "../FormatoInfo";

export const Vehicles = ({favorite, setFavorite}) => {
	const [vehicles, setVehicles] = useState([]);

	const initialUrl = "https://www.swapi.tech/api/vehicles"

	const fetchVehicles = (initialUrl) =>{
		fetch (initialUrl)
		.then (response => response.json())
		.then (data => setVehicles(data.results))
		.catch (error => console.log(error))
	}

	useEffect(() => {
	  fetchVehicles(initialUrl);
	}, [])
	
	return (
	<div>
		<FormatoInfo data={vehicles} setFavorite={setFavorite} favorite={favorite} img={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"} />
	</div>
	);
};


