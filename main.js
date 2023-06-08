// 영화 목록 데이터 가져오기
const getMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTM2NWEzNmZhNmQwMmFlYTFmMzEyZjkwNmQzMTJlZCIsInN1YiI6IjY0NzViNGJkOTYzODY0MDExODQ4MDRlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kof3JjFhDwtfeYITdsJhMA4XedswNta1T8HVSunc7Sw",
    },
  };
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  );
  const data = await response.json();
  const movies = data.results;
  return movies;
};

// 영화 필터링 함수(영화 타이틀을 대소문자 상관없이 검색 키워드가 타이틀의 포함유무 확인)
const filteringMovies = (movies, keyword) => {
  const reg = new RegExp(keyword, "i");
  const filteredMovies = movies.filter((movieInfo) =>
    reg.test(movieInfo.title)
  );
  return filteredMovies;
};

// 검색 수행
const search = async () => {
  // 키워드 가져오기
  const searchInput = document.getElementById("searchinput");
  const keyword = searchInput.value.trim();

  // 검색 입력값이 비어있지 않은 경우 필터링 영화 카드 표시
  if (keyword !== "") {
    const movies = await getMovies(); // 영화 정보 가져오기
    const filteredMovies = filteringMovies(movies, keyword); // 필터링 결과 리턴
    createCards(filteredMovies); // 필터링된 영화 카드 생성
    modalHandler(filteredMovies); // 모달 핸들러 생성
  } else {
    // 검색 입력이 비어있는 경우, 모든 영화 카드 표시
    spreadMovies();
  }
};

// 영화 카드 생성
const createCards = (movies) => {
  const cardBox = document.querySelector(".card-box");
  const modalContent = document.querySelector(".modal-content");
  cardBox.innerHTML = ""; // 카드 생성 전 비워주기
  modalContent.innerHTML = "";

  movies.forEach((movieInfo) => {
    // 영화 정보 HTML 생성
    let temp_html = `<div id="cards" class="card">
                      <img src="https://www.themoviedb.org/t/p/w500/${movieInfo.poster_path}" alt="${movieInfo.id}">
                      <div class="card-body">
                        <h4 class="title">${movieInfo.title}</h4>
                      </div>
                    </div>
                    `;

    cardBox.innerHTML += temp_html; // 생성한 div태그에 temp_html
  });
};

// 영화 카드를 클릭했을 때 모달 창 열기
const openModal = (movies, movieId) => {
  const modal = document.getElementById("modal");
  const modalContent = document.querySelector(".modal-content");
  const movieInfo = movies.find((movie) => movie.id === Number(movieId));

  // 모달 내용 업데이트
  modalContent.innerHTML = `<img src="https://www.themoviedb.org/t/p/w500/${movieInfo.poster_path}" alt="${movieInfo.id}">
                              
                              <div class="detail-body">
                                <div class="detitle">${movieInfo.title}</div>
                                <div class="contents">${movieInfo.overview}</div>
                                <div class="date">개봉일 : ${movieInfo.release_date}</div>
                                
                                <div class="rate">평점 : ${movieInfo.vote_average}</div>
                              </div>
                              <form class="post-form">
                                <input type="text" name="nick-name" class="nick-name" placeholder="닉네임을 입력">
                                <input type="password" name="password" class="password" placeholder="패스워드 입력">
                                <input type="text" name="content" class="content" placeholder="리뷰를 남겨주세요">
                                <button type="submit" id="review">입력</button>
                                <button type="button" id="close-modal">닫기</button>
                                <div class="review-box">
                                </div>
                              </form>
                              `;

  // 리뷰 뿌리기
  spreadReview(movieId);

  // 모달 창 열기
  modal.style.display = "block";
  document.body.style.overflow = "hidden";

  // 모달 창 닫기
  const closeModal = document.getElementById("close-modal");
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });
  // 포스팅 핸들러 등록
  postHandler(movieId);
};

// 모든 영화 카드 뿌리기
const spreadMovies = async () => {
  const movies = await getMovies();
  createCards(movies);
  modalHandler(movies);
};

// 사이트 접속 시 초기 실행
spreadMovies();

// [이벤트] 세부정보 모달창으로 띄우기 이벤트
const modalHandler = (movies) => {
  const cardBox = document.querySelector(".card-box");
  cardBox.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
      const movieId = event.target.alt;
      openModal(movies, movieId);
    }
  });
};

// [이벤트] 검색 이벤트
// --------- form 태그를 이용해서 엔터키와 클릭 이벤트를 하나의 핸들러로 담을 수 있음
// 검색 버튼 클릭 이벤트
const searchBtn = document.getElementById("searchbtn");
searchBtn.addEventListener("click", () => {
  search();
});

// 검색 입력에서 Enter 키를 누를 때 이벤트
const searchInput = document.getElementById("searchinput");
searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    search();
  }
});

// 리뷰 작성 핸들러
const postHandler = (movieId) => {
  const postForm = document.querySelector(".post-form");
  postForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let result = [];
    for (tag of event.target) {
      result.push(tag.value);
      tag.value = "";
    }
    let [nickname, password, comment] = result;

    if (nickname === "" || nickname.includes(" ")) {
      alert("공백을 제외한 닉네임을 입력해주세요.");
      return;
    }

    if(password.length < 8) {
      alert("패스워드를 8자리 이상 입력해주세요.");
      return;
    }

    if(comment === "" || comment.includes(" ")) {
      alert("공백을 제외한 리뷰를 남겨주세요.")
      return;
    }
    
    postReview(movieId, nickname, password, comment); // 리뷰정보 저장
    spreadReview(movieId); // 수정 후 리뷰 다시 뿌리기
  });
};

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
const spreadReview = (movieId) => {
  const reviewBox = document.querySelector(".review-box");

  if (localStorage.getItem(movieId) === null) {
    reviewBox.innerHTML = `<h2 class = "nocomments>댓글이 없습니다.</h2>`;
    return;
  }
  const reviewArray = JSON.parse(localStorage.getItem(movieId));

  reviewBox.innerHTML = reviewArray.reduce((accumulation, eachData) => {
    let { nickname, comment } = eachData;
    return (
      accumulation +
      `<div class = room>
        <h3 class="nick-names">닉네임: ${nickname}</h3>
        <p class="comments">내용: ${comment}</p>                
      </div>`
    );
  }, "");
};