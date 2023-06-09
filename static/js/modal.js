import { spreadReviews } from './reviews.js';
import { events } from './events.js';

// 영화 카드를 클릭했을 때 모달 창 열기
const openModal = (movies, movieId) => {
  const modalContent = document.querySelector('.modal-content');
  const movieInfo = movies.find((movie) => movie.id === Number(movieId));

  // 모달 내용 업데이트
  modalContent.innerHTML = `<img src="https://www.themoviedb.org/t/p/w500/${movieInfo.poster_path}" alt="${movieInfo.id}">
                              
                              <div class="detail-body">
                                <div class="detitle">${movieInfo.title}</div>
                                <div class="contents">${movieInfo.overview}</div>
                                <div class="date">개봉일 : ${movieInfo.release_date}</div>
                                <div class="rate">평점 : ${movieInfo.vote_average}</div>
                              </div>
                              <div class="post">
                                <form class="post-form">
                                  <input type="text" name="nick-name" class="nick-name" placeholder="닉네임을 입력">
                                  <input type="password" name="password" class="password" placeholder="패스워드 입력">
                                  <input type="text" name="content" class="content" placeholder="리뷰를 남겨주세요">
                                  <button type="submit" id="review">입력</button>
                                  </form>
                                <div class="review-box"></div>
                                <button type="button" id="close-modal">닫기</button>
                              </div>
                              `;

  // 리뷰 뿌리기
  spreadReviews(movieId);

  // 리뷰 올리기 버튼 핸들러 등록
  events.postReviewHandler(movieId);

  // 모달 창 열기
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  // document.body.style.backdropFilter = 'blur(5px)';

  // 모달 창 닫기
  const closeModal = document.getElementById('close-modal');
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
};

export { openModal };