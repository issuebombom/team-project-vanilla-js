import { reviewHTML } from './innerHtml.js';

// 리뷰 데이터 저장
const postReview = (movieId, nickname, password, comment) => {
  // 데이터가 하나도 없을 경우(null) 초기화 합니다.
  if (!localStorage.getItem(movieId)) {
    localStorage.setItem(movieId, JSON.stringify([])); // init
  }
  const reviewArray = JSON.parse(localStorage.getItem(movieId));
  reviewArray.unshift({ nickname, password, comment });
  localStorage.setItem(movieId, JSON.stringify(reviewArray));
};

// 리뷰 뿌리기
const spreadReviews = (movieId) => {
  const reviewBox = document.querySelector('.review-box');

  if (!localStorage?.getItem(movieId)) {
    reviewBox.innerHTML = `<h2 class="nocomments">댓글이 없습니다.</h2>`;
    return;
  }
  const reviewArray = JSON.parse(localStorage.getItem(movieId));

  reviewBox.innerHTML = reviewArray.reduce((accumulation, eachData) => {
    let { nickname, comment } = eachData;
    return (accumulation + reviewHTML(nickname, comment));
  }, '');
};

export { postReview, spreadReviews };