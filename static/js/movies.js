// 영화 목록 데이터 가져오기
import { events } from './events.js';
import { movieCardHTML } from './innerHtml.js';

const getMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTM2NWEzNmZhNmQwMmFlYTFmMzEyZjkwNmQzMTJlZCIsInN1YiI6IjY0NzViNGJkOTYzODY0MDExODQ4MDRlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kof3JjFhDwtfeYITdsJhMA4XedswNta1T8HVSunc7Sw',
    },
  };
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2',
    options
  );
  const data = await response.json();
  const movies = data.results;
  return movies;
};

// 영화 필터링 함수(영화 타이틀을 대소문자 상관없이 검색 키워드가 타이틀의 포함유무 확인)
const filteringMovies = (movies, keyword) => {
  const re = new RegExp(keyword, 'i');
  // 필터링
  const filteredMovies = new Array;
  let i = 0;
  // (do while ver.)
  do {
    if (re.test(movies[i].title)) {
      filteredMovies.push(movies[i]);
    }
    i++;
  } while (i !== movies.length);
  return filteredMovies;
};
  // (while ver.)
  // while (true) {
  //   if (i === movies.length) {
  //     break;
  //   } else if (re.test(movies[i].title)) {
  //     filteredMovies.push(movies[i]);
  //   }
  //   i++;
  // };
  // return filteredMovies;

// 영화 카드 생성
const createCards = (movies) => {
  const cardBox = document.querySelector('.card-box');
  const modalContent = document.querySelector('.modal-content');
  cardBox.innerHTML = ''; // 카드 생성 전 비워주기
  modalContent.innerHTML = '';

  movies.forEach((movieInfo) => {
    // 영화 정보 HTML 생성
    let temp_html = movieCardHTML(movieInfo);
    cardBox.innerHTML += temp_html;
  });
};

// 모든 영화 카드 뿌리기
const spreadMovies = async () => {
  const movies = await getMovies();
  createCards(movies);
  events.searchMovieHandler();
  events.modalOpenHandler(movies);

  return movies;
};

// 영화 검색 수행
const searchMovies = async () => {
  // 키워드 가져오기
  const searchInput = document.getElementById('searchinput');
  const keyword = searchInput.value.trim();

  // 검색 입력값이 비어있지 않은 경우 필터링 영화 카드 표시
  if (keyword !== '') {
    const movies = await getMovies(); // 영화 정보 가져오기
    const filteredMovies = filteringMovies(movies, keyword); // 필터링 결과 리턴
    createCards(filteredMovies); // 필터링된 영화 카드 생성
    events.modalOpenHandler(filteredMovies); // 모달 핸들러 생성
  } else {
    // 검색 입력이 비어있는 경우, 모든 영화 카드 표시
    spreadMovies();
  }
};

export { spreadMovies, searchMovies };