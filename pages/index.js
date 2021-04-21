import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Results from '../components/Results';
import requests from '../utils/requests';

export default function Home({ results }) {
	return (
		<div>
			<div>
				<title>Movie Stream</title>
			</div>
			{/* <head>
				
			</head> */}

			{/* header */}
			<Header />
			{/* navbar */}
			<Navbar />
			<Results results={results} />
		</div>
	);
}

export async function getServerSideProps(context) {
	const genre = context.query.genre;
	const request = await fetch(
		`https://api.themoviedb.org/3${
			requests[genre]?.url ||
			requests.fetchComedyMovies.url ||
			requests.fetchActionMovies.url ||
			requests.fetchAnimation.url ||
			requests.fetchMystery.url ||
			requests.fetchRomanceMovies.url ||
			requests.fetchTopRated.url
		}`,
	).then((res) => res.json());
	return {
		props: {
			results: request.results,
		},
	};
}
