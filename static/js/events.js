import { openModal } from './modal.js';
import { searchMovies } from './movies.js';
import { postReview, spreadReviews } from './reviews.js';

// [이벤트] 영화 포스터 클릭 시 상세페이지 띄우기
const modalOpenHandler = (movies) => {
  const cardBox = document.querySelector('.card-box');
  cardBox.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
      const movieId = event.target.alt;
      openModal(movies, movieId);
    }
  });
};

// [이벤트] 영화 검색 핸들러
const searchMovieHandler = () => {
  // 검색 버튼 클릭 이벤트
  const searchBtn = document.getElementById('searchbtn');
  searchBtn.addEventListener('click', () => {
    searchMovies();
  });
  // 검색 입력에서 Enter 키를 누를 때 이벤트
  const searchInput = document.getElementById('searchinput');
  searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      searchMovies();
    }
  });
};

// [이벤트] 리뷰 작성 핸들러
const postReviewHandler = (movieId) => {
  const postForm = document.querySelector('.post-form');
  postForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = [];
    for (let tag of event.target) {
      result.push(tag.value);
      tag.value = '';
    }
    let [nickname, password, comment] = result;

    (nickname === '' || nickname.includes(' '))
      ? alert('공백을 제외한 닉네임을 입력해주세요.')
      : password.length < 4
      ? alert('패스워드를 4자리 이상 입력해주세요.')
      : comment === ''
      ? alert('리뷰를 한 글자 이상 남겨주세요.')
      : postReview(movieId, nickname, password, comment);  

    spreadReviews(movieId); // 수정 후 리뷰 다시 뿌리기
  });
};

const events = {
  modalOpenHandler,
  searchMovieHandler,
  postReviewHandler
};

export { events };