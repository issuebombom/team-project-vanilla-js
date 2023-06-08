// 리뷰 데이터 저장
const postReview = (movieId, nickname, password, comment) => {
  // 데이터가 하나도 없을 경우 초기화 합니다.
  if (localStorage.getItem(movieId) === null) {
    // null
    localStorage.setItem(movieId, JSON.stringify([])); // init
  }
  const reviewArray = JSON.parse(localStorage.getItem(movieId));
  reviewArray.push({ nickname, password, comment });
  localStorage.setItem(movieId, JSON.stringify(reviewArray));
};

// 리뷰 뿌리기
const spreadReviews = (movieId) => {
  const reviewBox = document.querySelector('.review-box');

  if (localStorage.getItem(movieId) === null) {
    reviewBox.innerHTML = `<h2 class="nocomments">댓글이 없습니다.</h2>`;
    return;
  }
  const reviewArray = JSON.parse(localStorage.getItem(movieId));

  reviewBox.innerHTML = reviewArray.reduce((accumulation, eachData) => {
    let { nickname, comment } = eachData;
    return (
      accumulation +
      `<div class="comment">
        <h4 class="nick-names">${nickname}</h4>
        ${comment}
      </div>`
    );
  }, '');
};

export { postReview, spreadReviews };