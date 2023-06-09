import { spreadReviews } from './reviews.js';
import { events } from './events.js';
import { modalHTML } from './innerHtml.js';

// 영화 카드를 클릭했을 때 모달 창 열기
const openModal = (movies, movieId) => {
  const modalContent = document.querySelector('.modal-content');
  const movieInfo = movies.find((movie) => movie.id === Number(movieId));

  // 모달 내용 업데이트
  modalContent.innerHTML = modalHTML(movieInfo);

  // 리뷰 뿌리기
  spreadReviews(movieId);

  // 리뷰 올리기 버튼 핸들러 등록
  events.postReviewHandler(movieId);

  // 모달 창 열기
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';

  // 모달 창 닫기
  const closeModal = document.getElementById('close-modal');
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
};

export { openModal };