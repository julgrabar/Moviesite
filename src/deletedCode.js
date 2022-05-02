

// HomePage
// const [status, setStatus] = useState(statusList.IDLE);

  // useEffect(() => {
  //   const fetchFilms = async () => {
  //     setStatus(statusList.LOAD);
  //     try {
  //       const result = await fetchTrending();
  //       setFilms(result);
  //     } catch (error) {
  //       console.log(error);
  //       setStatus(statusList.ERR);
  //     } finally {
  //       setStatus(statusList.IDLE);
  //     }
  //   };
  //   fetchFilms();
  // }, []);

//   -------------------------
//MoviesPage

// const [searchResult, setSearchResult] = useState(null);

  // useEffect(() => {
  //   const searchFilms = async () => {
  //     if (searchValue === '') {
  //       return;
  //     }
  //     const result = await searchMovies(searchValue);
  //     setSearchResult(result);
  //   };
  //   searchFilms();
  // }, [searchValue]);

//   useEffect(() => {
//     console.log(status);
//   }, [status]);

//-----------------------------------------

//DetailsPage

// const [movie, setMovie] = useState(null);

  // useEffect(() => {
  //   const fetchMovie = async () => {
  //     const result = await fetchMovieDetails(movieId);
  //     setMovie(result);
  //   };
  //   fetchMovie();
  // }, [movieId]);

  //----------------------------
  //Cast

  // const [actors, setActors] = useState(null);

  // useEffect(() => {
  //   const fetchActors = async () => {
  //     const result = await fetchMovieCredits(movieId);
  //     setActors(result);
  //   };
  //   fetchActors();
  // }, [movieId]);


  //------------------------
  //Reviews

    // const [reviews, setReviews] = useState(null);
  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     const result = await fetchMovieReviews(movieId);
  //     setReviews(result);
  //   };
  //   fetchReviews();
  // }, [movieId]);