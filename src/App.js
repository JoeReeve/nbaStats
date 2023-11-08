import "./App.css";
import React from "react";
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import {
	champ2022,
	champ2021,
	champ2020,
	champ2019,
	champ2016,
	champ2014,
	champ2013,
	champ2011,
	champ2008,
	champ2004,
} from "./data";
ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);

function App() {
	const data = {
		labels: [
			"FG%",
			"3P%",
			"FT%",
			"ORB",
			"DRB",
			"AST",
			"STL",
			"BLK",
			"TOV",
			// "PTS",
		],
		datasets: [
			{
				label: champ2022["Team"],
				data: [
					champ2022["FG%"] * 100,
					champ2022["3P%"] * 100,
					champ2022["FT%"] * 100,
					champ2022["ORB"],
					champ2022["DRB"],
					champ2022["AST"],
					champ2022["STL"],
					champ2022["BLK"],
					champ2022["TOV"],
					// champ2022["PTS"],
				],
				backgroundColor: "rgba(255, 99, 132, 0.2)",
				borderColor: "rgba(255, 99, 132, 1)",
				borderWidth: 1,
				options: {
					scale: {
						min: 0,
						max: 100,
					},
				},
			},
			{
				label: champ2021["Team"],
				data: [
					champ2021["FG%"] * 100,
					champ2021["3P%"] * 100,
					champ2021["FT%"] * 100,
					champ2021["ORB"],
					champ2021["DRB"],
					champ2021["AST"],
					champ2021["STL"],
					champ2021["BLK"],
					champ2021["TOV"],
					// champ2022["PTS"],
				],
				backgroundColor: "rgba(100, 99, 132, 0.2)",
				borderColor: "rgba(255, 99, 132, 1)",
				borderWidth: 1,
			},
			{
				label: champ2020["Team"],
				data: [
					champ2020["FG%"] * 100,
					champ2020["3P%"] * 100,
					champ2020["FT%"] * 100,
					champ2020["ORB"],
					champ2020["DRB"],
					champ2020["AST"],
					champ2020["STL"],
					champ2020["BLK"],
					champ2020["TOV"],
					// champ2022["PTS"],
				],
				backgroundColor: "rgba(255, 99, 0, 0.2)",
				borderColor: "rgba(255, 99, 132, 1)",
				borderWidth: 1,
			},
			{
				label: champ2019["Team"],
				data: [
					champ2019["FG%"] * 100,
					champ2019["3P%"] * 100,
					champ2019["FT%"] * 100,
					champ2019["ORB"],
					champ2019["DRB"],
					champ2019["AST"],
					champ2019["STL"],
					champ2019["BLK"],
					champ2019["TOV"],
					// champ2022["PTS"],
				],
				backgroundColor: "rgba(178, 102, 255, 0.2)",
				borderColor: "rgba(255, 99, 132, 1)",
				borderWidth: 1,
			},
			{
				label: champ2016["Team"],
				data: [
					champ2016["FG%"] * 100,
					champ2016["3P%"] * 100,
					champ2016["FT%"] * 100,
					champ2016["ORB"],
					champ2016["DRB"],
					champ2016["AST"],
					champ2016["STL"],
					champ2016["BLK"],
					champ2016["TOV"],
					// champ2022["PTS"],
				],
				backgroundColor: "rgba(255, 00, 255, 0.2)",
				borderColor: "rgba(255, 99, 132, 1)",
				borderWidth: 1,
			},
			{
				label: champ2014["Team"],
				data: [
					champ2014["FG%"] * 100,
					champ2014["3P%"] * 100,
					champ2014["FT%"] * 100,
					champ2014["ORB"],
					champ2014["DRB"],
					champ2014["AST"],
					champ2014["STL"],
					champ2014["BLK"],
					champ2014["TOV"],
					// champ2022["PTS"],
				],
				backgroundColor: "rgba(0, 255, 255, 0.2)",
				borderColor: "rgba(255, 99, 132, 1)",
				borderWidth: 1,
			},
			{
				label: champ2013["Team"],
				data: [
					champ2013["FG%"] * 100,
					champ2013["3P%"] * 100,
					champ2013["FT%"] * 100,
					champ2013["ORB"],
					champ2013["DRB"],
					champ2013["AST"],
					champ2013["STL"],
					champ2013["BLK"],
					champ2013["TOV"],
					// champ2022["PTS"],
				],
				backgroundColor: "rgba(255, 255, 0, 0.2)",
				borderColor: "rgba(255, 99, 132, 1)",
				borderWidth: 1,
			},
			{
				label: champ2011["Team"],
				data: [
					champ2011["FG%"] * 100,
					champ2011["3P%"] * 100,
					champ2011["FT%"] * 100,
					champ2011["ORB"],
					champ2011["DRB"],
					champ2011["AST"],
					champ2011["STL"],
					champ2011["BLK"],
					champ2011["TOV"],
					// champ2022["PTS"],
				],
				backgroundColor: "rgba(0, 00, 255, 0.2)",
				borderColor: "rgba(255, 99, 132, 1)",
				borderWidth: 1,
			},
			{
				label: champ2008["Team"],
				data: [
					champ2008["FG%"] * 100,
					champ2008["3P%"] * 100,
					champ2008["FT%"] * 100,
					champ2008["ORB"],
					champ2008["DRB"],
					champ2008["AST"],
					champ2008["STL"],
					champ2008["BLK"],
					champ2008["TOV"],
					// champ2022["PTS"],
				],
				backgroundColor: "rgba(0, 255, 0, 0.2)",
				borderColor: "rgba(255, 99, 132, 1)",
				borderWidth: 1,
			},
			{
				label: champ2004["Team"],
				data: [
					champ2004["FG%"] * 100,
					champ2004["3P%"] * 100,
					champ2004["FT%"] * 100,
					champ2004["ORB"],
					champ2004["DRB"],
					champ2004["AST"],
					champ2004["STL"],
					champ2004["BLK"],
					champ2004["TOV"],
					// champ2022["PTS"],
				],
				backgroundColor: "rgba(255, 0, 0, 0.2)",
				borderColor: "rgba(255, 99, 132, 1)",
				borderWidth: 1,
			},
		],
	};

	return (
		<div className="App">
			<div className="container">
				<div className="chart">
					<Radar data={data} />;
				</div>
			</div>
		</div>
	);
}

export default App;
