import React from "react";
import MainButton from "../component/items/MainButton";
import MainHeader from "../component/header/MainHeader";
import styled from "styled-components";
import GlobalStyle from "../lib/styles/fontStyle";
import Footer from "../component/common/Footer";

const MainImage = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 50.25%;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
`;

const InformBox = styled.div`
  background: white;
  position: relative;
  z-index: 1;
`;

const InformTitle = styled.div`
  padding: 2.3rem 1.1rem 0 1.1rem;
  font-family: "Happiness-Sans-Title", sans-serif;
  font-size: 1.99rem;
  padding-bottom: 0.5rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const InformContext = styled.div`
  padding: 1.1rem 1.444rem 1.1rem 1.444rem;
  font-family: "Happiness-Sans-Bold", sans-serif;
  font-size: 1.11rem;
  font-weight: bold;
  p {
    margin: 0.3rem 0; /* add this line to adjust the margin */
  }
`;

function MainPage() {
  const quotes = [
    "Art is not what you see, but what you make others see. - Edgar Degas",
    "Art is the lie that enables us to realize the truth. - Pablo Picasso",
    "The purpose of art is to make the invisible visible. - Paul Klee",
    "Art is not a handicraft, it is the transmission of feeling the artist has experienced. - Leo Tolstoy",
    "Art is the highest form of hope. - Gerhard Richter",
    "Art is the signature of civilizations. - Beverly Sills",
    "Art is the language of the imagination. - James Whistler",
    "Art is not what you create, it's what you leave behind. - W.H. Auden",
    "Art enables us to find ourselves and lose ourselves at the same time. - Thomas Merton",
    "The artist's job is to be a witness to his time in history. - Robert Rauschenberg",
    "Art is the only way to run away without leaving home. - Twyla Tharp",
    "Art is a way of recognizing oneself. - Louise Bourgeois",
    "The true use of art is, first, to cultivate the artist's own spiritual nature. - George Inness",
    "Art is the concrete representation of our most subtle feelings. - Agnes Martin",
    "Art is the stored honey of the human soul. - Theodore Dreiser",
    "Art is the unceasing effort to compete with the beauty of flowers, and never succeeding. - Gian Carlo Menotti",
    "Art is not a thing; it is a way. - Elbert Hubbard",
    "Art is the proper task of life. - Friedrich Nietzsche",
    "The artist is a receptacle for emotions that come from all over the place: from the sky, from the earth, from a scrap of paper, from a passing shape, from a spider's web. - Pablo Picasso",
    "Art is the desire of a man to express himself, to record the reactions of his personality to the world he lives in. - Amy Lowell",
    "Art is the highest form of human expression. - G. E. Lessing",
    "Art should comfort the disturbed and disturb the comfortable. - Banksy",
    "Art is the most intense mode of individualism that the world has known. - Oscar Wilde",
  ];
  const quotesKorean = [
    "예술은 당신이 보는 것이 아니라 다른 사람에게 보게 하는 것입니다. - 에드거 드가",
    "예술은 진실을 깨닫게 해주는 거짓말입니다. - 파블로 피카소",
    "예술의 목적은 눈에 보이지 않는 것을 보이게 하는 것입니다. - 폴 클레",
    "예술은 수공예가 아니라 예술가가 경험한 감정의 전달입니다. - 레오 톨스토이",
    "예술은 희망의 가장 높은 형태입니다. - 게르하르트 리히터",
    "예술은 문명의 상징입니다. - 베버리 실스",
    "예술은 상상력의 언어입니다. - 제임스 위슬러",
    "예술은 당신이 창조하는 것이 아니라 당신이 남기는 것입니다. - W.H. 오든",
    "예술은 동시에 우리를 찾게하고 잃게합니다. - 토마스 멀튼",
    "예술가의 일은 역사 속에서 그의 시대의 목격자가 되는 것입니다. - 로버트 라우셴버그",
    "집을 떠나지 않고 도망칠 수 있는 유일한 방법은 예술입니다. - 트와일라 타프",
    "예술은 자신을 인식하는 방법입니다. - 루이즈 부르주아",
    "예술의 진정한 사용은 먼저, 예술가 자신의 정신적 본성을 함양하는 것입니다. - 조지 인네스",
    "예술은 우리 가장 미묘한 감정의 구체적인 표현입니다. - 애그네스 마틴",
    "예술은 인간 영혼의 저장된 꿀입니다. - 테오도어 드라이저",
    "예술은 꽃의 아름다움과 경쟁하기 위한 끊임없는 노력이며 결코 성공하지 못합니다. - 지안 카를로 메노티",
    "예술은 하나의 것이 아니라 하나의 방법입니다. - 엘버트 허버드",
    "예술은 삶의 적절한 과제입니다. - 프리드리히 니체",
    "예술가는 하늘, 땅, 종이 조각, 지나가는 모양, 거미줄 등 모든 곳에서 오는 감정의 수용체입니다. - 파블로 피카소",
    "예술은 자신을 표현하고, 자신이 살고 있는 세상에 대한 자신의 성격의 반응을 기록하고 싶은 사람의 욕망입니다. - 에이미 로웰",
    "예술은 인간 표현의 가장 높은 형태입니다. - G.E. 레싱",
    "예술은 방해받는 사람들을 위로하고 편안한 사람들을 방해해야 합니다. - 뱅크시",
    "예술은 세계가 알고 있는 가장 강렬한 개인주의의 방식입니다. - 오스카 와일드",
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  let randomIndex2;
  do {
    randomIndex2 = Math.floor(Math.random() * quotes.length);
  } while (randomIndex2 === randomIndex);
  const splitQuote = quotes[randomIndex].split("-");
  // const splitQuote2 = quotes[randomIndex2].split("-");

  // const splitKoreanQuote = quotesKorean[randomIndex].split("-");
  return (
    <>
      <GlobalStyle />
      <MainHeader />
      <MainImage>
        <img src="/upload/main/3.webp" alt="" />
      </MainImage>
      <InformBox>
        <InformTitle>Welcome to Exhi-lover</InformTitle>
        <InformContext>
          <p style={{ paddingBottom: "0" }}>{splitQuote[0]}</p>
          <p
            style={{
              textAlign: "right",
              paddingRight: "1.11rem",
              fontSize: "0.89rem",
              // paddingBottom: "0.9rem",
            }}
          >{`- ${splitQuote[1]}`}</p>
        </InformContext>
      </InformBox>
      <MainButton />
      <Footer />
    </>
  );
}

export default React.memo(MainPage);
