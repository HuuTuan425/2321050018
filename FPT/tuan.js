let listFilm = [
  {
    id: 1,
    name: "Mưa đỏ",
    type: "Phim chiếu rạp",
    banner: "./anhmuado.jpg",
    trailer:
      '<iframe width="1039" height="584" src="https://www.youtube.com/embed/BD6PoZJdt_M" title="MƯA ĐỎ | OFFICIAL TRAILER | Khởi chiếu tại rạp: 22.08.2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    nation: "Việt Nam",
    year: "2025",
    hour: "2 giờ",
  },
  {
    id: 2,
    name: "MDZ",
    type: "Phim chiếu rạp",
    banner: "./hh1.jpg",
    trailer:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/6IlMFB-x1XQ?si=cfPqnlNkAZT0SD6J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    nation: "Hàn Quốc",
    year: "2025",
    hour: "1 giờ 48 phút",
  },
  {
    id: 3,
    name: "Bộ 5 siêu đẳng",
    type: "Phim chiếu rạp",
    banner: "./hh2.jpg",
    trailer:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/jYiSsbHXrqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    nation: "Hàn Quốc",
    year: "2025",
    hour: "2 giờ 10 phút",
  },
  {
    id: 4,
    name: "Ba mặt lật kèo",
    type: "Phim chiếu rạp",
    banner: "./hh3.jpg",
    trailer:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/your-video-id" frameborder="0" allowfullscreen></iframe>',
    nation: "Việt Nam",
    year: "2025",
    hour: "1 giờ 45 phút",
  },
  {
    id: 5,
    name: "Sat thủ vô cùng cực",
    type: "Phim chiếu rạp",
    banner: "FPT/hh4.jpg",
    trailer:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/nmsMIDYfCow?si=A6OmH-heoUKdTdr6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    nation: "Hần Quốc",
    year: "2024",
    hour: "2 giờ 45 phút",
  },
  {
    id: 6,
    name: "Gia đình số 2",
    type: "Phim điện ảnh hay nhất",
    banner: "FPT/hh5.jpg",
    trailer:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/xVCHcC0RH0E?si=AE7dGGC2h2XHsK4J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    nation: "Hàn Quốc",
    year: "2022",
    hour: "2 giờ 15 phút",
  },
  {
    id: 7,
    name: "Hồi ức",
    type: "Phim điện ảnh hay nhất",
    banner: "FPT/hoiuc.jpg",
    trailer:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/XhlMzC4DyIo?si=GU_6Q_W36R-tn8Xq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    nation: "Hàn Quốc",
    year: "2021",
    hour: "2 giờ 5 phút",
  },
  {
    id: 8,
    name: "joker",
    type: "Phim điện ảnh hay nhất",
    banner: "FPT/joker.jpg",
    trailer:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/k4oOEHjqR9Y?si=BFvTsPZ08DYffmFO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    nation: "Hoa kỳ",
    year: "2020",
    hour: "1 giờ 5 phút",
  },
  {
    id: 9,
    name: "Ký ức tội ác",
    type: "Phim điện ảnh hay nhất",
    banner: "FPT/kyuctoiac.jpg",
    trailer:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/0AWwWuQbV_o?si=zKeOJt5LDU_AMuWq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    nation: "Nước ngoài",
    year: "2020",
    hour: "1 giờ 9 phút",
  },
  {
    id: 10,
    name: "nguyên tử",
    type: "Phim điện ảnh hay nhất",
    banner: "FPT/phim-tai-lieu-1.jpg",
    trailer:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/5k-YdkxZq3o?si=Wd5ySwLdTUZiKL_V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    nation: "Nhật Bản",
    year: "2019",
    hour: "2 giờ 30 phút",
  },
  {
    id: 11,
    name: "Phim tl2",
    type: "Phim hành động gay cấn",
    banner: "FPT/phim-tai-lieu-2.jpg",
    trailer:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/GeRzB6vrwcQ?si=LOafFvIT5hd-j7Le" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    nation: "Hoa Kỳ",
    year: "2019",
    hour: "2 giờ 40 phút",
  },
  {
    id: 12,
    name: "Điện thoại 2",
    type: "Phim hành động gay cấn",
    banner: "FPT/phim_kinh_di.jpg",
    trailer:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/K4Ml_YDwfoU?si=JH2Aa6pFLaI2R81E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    nation: "Hoa Kỳ",
    year: "2018",
    hour: "1 giờ 40 phút",
  },
  {
    id: 13,
    name: "Nghi lễ cuối cùng",
    type: "Phim hành động gay cấn",
    banner: "FPT/phim_kinh_di_2f.jpg",
    trailer:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/sbsNPOzdBg0?si=x4TSYm7zOb-EuPIT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    nation: "Hoa Kỳ",
    year: "2017",
    hour: "1 giờ 59 phút",
  },
  {
    id: 14,
    name: "smile",
    type: "Phim hành động gay cấn",
    banner: "FPT/phim_kinh_di_6.jpg",
    trailer:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/GvAXlQZEA4Y?si=ChpuheszPqJ9M8-U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    nation: "Hoa Kỳ",
    year: "2020",
    hour: "1 giờ 35 phút",
  },
  {
    id: 15,
    name: "omen",
    type: "Phim hành động gay cấn",
    banner: "FPT/phim_kinh_di_9.jpg",
    trailer:
      '<iframe width="580" height="330" src="https://www.youtube.com/embed/b-Q6s2ysQrA?si=OM1dUs06e5QAB6Fl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    nation: "Hoa Kỳ",
    year: "2019",
    hour: "2 giờ 30 phút",
  },
  {
    id: 16,
    name: "Anh trai say xe",
    type: "Phim tâm lý đỉnh cao",
    banner: "FPT/anhtraisayxe.jpg",
    trailer:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/7xpwkL54Cvs?si=nbDMwbidKCt9xmwJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    nation: "Hàn Quốc ",
    year: "2018",
    hour: "2 giờ 59 phút",
  },
];
let bannerElement = document.getElementsByClassName("banner")[0];
let imageElement = document.getElementsByClassName("im")[0];
let trailerElement = document.getElementsByClassName("trailer")[0];
let doiPhim = null;

function trailer() {
  if (!doiPhim) {
    chooseFilm(1);
  }

  trailerElement.innerHTML = doiPhim.trailer;

  bannerElement.style.display = "none";
  trailerElement.style.display = "block";
}

function chooseFilm(filmId) {
  let selectedFilm = listFilm.find((film) => film.id === filmId);

  if (selectedFilm) {
    doiPhim = selectedFilm;
    imageElement.src = selectedFilm.banner;

    let nationElement = document.getElementsByClassName("nation")[0];
    let yearElement = document.getElementsByClassName("year")[0];
    let hourElement = document.getElementsByClassName("hour")[0];

    yearElement.innerHTML = selectedFilm.year;
    nationElement.innerHTML = selectedFilm.nation;
    hourElement.innerHTML = selectedFilm.hour;

    bannerElement.style.display = "block";
    trailerElement.style.display = "none";
  }
}
