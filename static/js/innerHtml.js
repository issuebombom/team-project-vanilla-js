const modalHTML = (movieInfo) => `
          <img src="https://www.themoviedb.org/t/p/w500/${movieInfo.poster_path}" alt="${movieInfo.id}">
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

const movieCardHTML = (movieInfo) => `
          <div id="cards" class="card">
            <img src="https://www.themoviedb.org/t/p/w500/${movieInfo.poster_path}" alt="${movieInfo.id}">
            <div class="card-body">
              <h4 class="title">${movieInfo.title}</h4>
            </div>
          </div>
`;

const reviewHTML = (nickname, comment) => `
          <div class="comment">
            <h4 class="nick-names">${nickname}</h4>
            ${comment}
          </div>
`;

export { modalHTML, movieCardHTML, reviewHTML };