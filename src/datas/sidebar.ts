export const sideBarList = [
  {
    id: 1,
    text: "사료관리",
    url: "/feed",
    sub: [
      { id: 1, text: "사료 전체 관리", url: "/feed", sub: [] },
      {
        id: 2,
        text: "성분 관리",
        url: "/ingredient",
        sub: [],
      },
      {
        id: 3,
        text: "주 원료 관리",
        url: "/meterial_main",
        sub: [],
      },
      {
        id: 4,
        text: "전체 관리",
        url: "/meterial_all",
        sub: [],
      },
    ],
  },
  {
    id: 2,
    text: "회사 관리",
    url: "/company",
    sub: [
      { id: 1, text: "회사 관리", url: "/company", sub: [] },
      { id: 2, text: "브랜드 관리", url: "/brand", sub: [] },
    ],
  },
  {
    id: 3,
    text: "견종관리",
    url: "/dogs",
    sub: [],
  },
  {
    id: 4,
    text: "회원 관리",
    url: "/users",
    sub: [
      { id: 1, text: "회원 관리", url: "/users", sub: [] },
      {
        id: 2,
        text: "관심사 관리",
        url: "/interests",
        sub: [],
      },
    ],
  },
  { id: 5, text: "공지사항 관리", url: "/notices", sub: [] },
  {
    id: 6,
    text: "게시판 관리",
    url: "/community",
    sub: [
      { id: 1, text: "게시글 관리", url: "/community", sub: [] },
      { id: 2, text: "게시글 신고 관리", url: "/commuity/report", sub: [] },
      { id: 3, text: "게시글 댓글 신고 관리", url: "/reply/report", sub: [] },
      { id: 4, text: "게시글 관리", url: "/review", sub: [] },
      { id: 5, text: "게시글 관리", url: "/review/report", sub: [] },
    ],
  },
  {
    id: 7,
    text: "이벤트 관리",
    url: "/events",
    sub: [
      { id: 1, text: "하단 화면 관리", url: "/main_banner", sub: [] },
      { id: 2, text: "상단 화면 관리", url: "/sub_banner", sub: [] },
    ],
  },
  {
    id: 8,
    text: "질병 관리",
    url: "/disease/guide",
    sub: [
      { id: 1, text: "촬영 가이드 라인", url: "/disease/guide", sub: [] },
      { id: 2, text: "질환 목록", url: "/disease", sub: [] },
      { id: 3, text: "질환분석 관리", url: "/disaese/analysis", sub: [] },
    ],
  },
];
