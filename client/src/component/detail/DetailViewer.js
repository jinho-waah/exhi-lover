import styled from "styled-components";
import React from "react";
import GlobalStyle from "../../lib/styles/fontStyle";
import { Link } from "react-router-dom";
import FileDownloadDoneSharpIcon from "@mui/icons-material/FileDownloadDoneSharp";
import HorizontalLine from "../layout/HorizontalLine";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ShareIcon from "@mui/icons-material/Share";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PhoneIcon from "@mui/icons-material/Phone";
import MiniMap from "../map/MiniMap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyCalendar from "../calendar/MyCalendar";
import { fetchGalleryInfo } from "../../lib/api/Api";
import Instagram from "@mui/icons-material/Instagram";

const DetailViewerBlock = styled.div`
  width: 100%;
  Booking {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }
`;

const MainImage = styled.img`
  padding-left: 0.8rem;
  width: 100%;
  aspect-ratio: 16/9; /* change to the desired aspect ratio */
  object-fit: cover;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-bottom: 0.03rem solid #202020;
`;

const SliderWrapper = styled.div`
  .slick-dots {
    display: inline-block;
    vertical-align: middle;
    margin: auto 0;
    padding: 0;
  }

  .slick-dots li {
    list-style: none;
    cursor: pointer;
    display: inline-block;
    margin: 0 0;
  }

  .slick-dots li button {
    margin-top: 0.5rem;
    border: none;
    background: #b0b0b0;
    color: transparent;
    cursor: pointer;
    display: block;
    height: 5px;
    width: 5px;
    border-radius: 100%;
    padding: 0;
  }
  .slick-dots li.slick-active button {
    background-color: ${(props) => props.color || "#ec6c03"};
  }
  .slick-arrow {
    display: none !important;
  }
`;

const MainTitle = styled.div`
  margin-top: 0.5rem;
  padding-left: 0.8rem;
  color: white;
  padding-top: 1.2rem;
  p {
    font-size: 1.5rem;
    font-family: "Happiness-Sans-Bold", sans-serif;
    margin: 0.4rem 0;
  }
  strong {
    font-size: 1.8rem;
    color: ${(props) => props.color || "#ec6c03"};
    font-family: "Happiness-Sans-Title", sans-serif;
  }
`;

const Term = styled.div`
  padding-left: 0.8rem;
  color: white;
  padding-top: 1.1rem;
  font-size: 0.83rem;
`;

const BookingArea = styled.div`
  margin-top: 0.45rem;
  margin-bottom: 0.5rem;
`;
const Booking = styled.div`
  background: ${(props) => props.color || "#ec6c03"};
  width: 93%;
  height: 2.8rem;
  color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding-right: 1.7rem;
  p {
    padding-left: 1rem;
    font-size: 1.1rem;
    font-family: "Happiness-Sans-Bold";
  }
  svg {
    // margin-left: 1rem; /* add margin to the left side */
    font-size: 1.8rem;
  }
  &:hover {
    color: white;
    background: #000000;
    border: 1px solid #ffffff;
  }
`;

const SharingArea = styled.div`
  margin-top: 0.45rem;
  margin-bottom: 0.6rem;
`;
const Sharing = styled.div`
  background: ${(props) => props.color || "#ec6c03"};
  width: 93%;
  height: 2.8rem;
  color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding-right: 1.7rem;
  p {
    padding-left: 1rem;
    font-size: 1.1rem;
    font-family: "Happiness-Sans-Bold";
  }
  svg {
    // margin-left: 1rem; /* add margin to the left side */
    font-size: 1.6rem;
  }
  &:hover {
    color: white;
    background: #000000;
    border: 1px solid #ffffff;
  }
`;
const InstagramSearchArea = styled.div`
  margin-top: 0.45rem;
  margin-bottom: 0.6rem;
`;

const InstagramSearch = styled.div`
  background: ${(props) => props.color || "#ec6c03"};
  width: 93%;
  height: 2.8rem;
  color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding-right: 1.7rem;
  p {
    padding-left: 1rem;
    font-size: 1.1rem;
    font-family: "Happiness-Sans-Bold";
  }
  svg {
    // margin-left: 1rem; /* add margin to the left side */
    font-size: 1.8rem;
  }
  &:hover {
    color: white;
    background: #000000;
    border: 1px solid #ffffff;
  }
`;

const InfoBlock = styled.div`
  width: 100%;
`;

const Artist = styled.div`
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  color: white;
  font-family: "Happiness-Sans-Bold";
  font-size: 1rem;
  line-height: 1.4;
  p {
    font-size: 1.5rem;
    margin: 0 0 5px 0;
    font-family: "Happiness-Sans-Title";
    svg {
      transform: translateY(5px);
      font-size: 1.6rem;
      margin-right: 5px;
    }
  }
`;
const PlaceInfo = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  color: white;
  font-family: "Happiness-Sans-Bold";
  font-size: 1rem;
  line-height: 1.4;
  p {
    font-size: 1.5rem;
    margin: 0 0 5px 0;
    font-family: "Happiness-Sans-Title";
    svg {
      transform: translateY(5px);
      font-size: 1.6rem;
      margin-right: 5px;
    }
  }
  #detail {
    margin: 0 0 0 5px;
  }
`;

const PlaceMap = styled.div`
  margin-top: 0.45rem;
`;

const OpeningTime = styled.div`
  font-family: "Happiness-Sans-Bold";
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  color: white;
  font-size: 1rem;
  line-height: 1.4;
  p {
    font-size: 1.5rem;
    margin: 0 0 5px 0;
    font-family: "Happiness-Sans-Title";
    svg {
      transform: translateY(5px);
      font-size: 1.6rem;
      margin-right: 5px;
    }
  }
  h4 {
    margin: 0;
  }
`;

const ShowPrice = styled.div`
  padding-top: 0rem;
  font-family: "Happiness-Sans-Bold";
  padding-left: 1.1rem;
  color: white;
  font-size: 1.1rem;
  color: white;
`;

const Tags = styled.div`
  margin-top: 0.6rem;
  padding-left: 0.95rem;
  color: white;
  div {
    display: inline;
    margin-right: 6px;
    font-size: 0.97rem;
    // &: hover {
    //   color: gray;
    // }
  }
`;

const GalleryInformation = styled.div`
  padding-left: 0.9rem;
  padding-right: 0.8rem;
  color: white;
  font-family: "Happiness-Sans-Bold";
  font-size: 1rem;
  line-height: 1.4;
  p {
    font-size: 1.5rem;
    margin: 0 0 5px 0;
    font-family: "Happiness-Sans-Title";
    svg {
      transform: translateY(5px);
      font-size: 1.6rem;
      margin-right: 5px;
    }
  }
  h3 {
    margin: 5px 0 0.2rem 0;
  }
`;

const PhoneNum = styled.div`
  padding-left: 14px;
  padding-right: 0.8rem;
  color: white;
  font-family: "Happiness-Sans-Bold";
  font-size: 1rem;
  line-height: 1.4;
  p {
    font-size: 1.5rem;
    margin: 0 0 5px 0;
    font-family: "Happiness-Sans-Title";
    svg {
      transform: translateY(5px);
      font-size: 1.6rem;
      margin-right: 5px;
    }
  }
  h3 {
    margin: 5px 0 0.2rem 0;
  }
`;

const DetailViewer = ({ show, color, tags }) => {
  const [error, setError] = useState(null);
  const [galleryInfo, setGalleryInfo] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [value, onChange] = useState(new Date());

  const {
    id,
    show_name,
    show_artist,
    show_search,
    show_term_start,
    show_term_end,
    show_city,
    gallery_id,
    show_place,
    show_place_detail,
    show_place_eng,
    show_price,
    show_link,
    show_imgs,
    show_brief,
    instagram_search,
  } = show[0];

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        setError(null);
        const data = await fetchGalleryInfo(gallery_id);
        console.log(data);
        setGalleryInfo(data);
      } catch (e) {
        setError(e);
      }
    };
    fetchGalleries();
  }, [gallery_id]);

  let gallery_add_word = "";
  let gallery_phone_num = "";
  let business_hours = "";
  let business_week = "";
  let openingHoursObject;
  let site = "";

  if (galleryInfo !== null) {
    gallery_add_word = galleryInfo.gallery_add_word;
    gallery_phone_num = galleryInfo.gallery_phone_num;
    business_hours = galleryInfo.business_hours;
    business_week = galleryInfo.business_week;
    openingHoursObject = JSON.parse(business_hours);
    site = galleryInfo.site;
  }
  function handlePhoneCall() {
    window.location.href = `tel:${gallery_phone_num}`;
  }
  useEffect(() => {
    if (galleryInfo !== null) {
      const [lat, lng] = galleryInfo.gallery_add_tude
        .split(/[, ]+/)
        .map(parseFloat);
      setLatitude(lat);
      setLongitude(lng);
    }
  }, [galleryInfo]);

  const images = [];
  for (let i = 1; i < show_imgs + 1; i++) {
    const imgSrc = `/upload/shows/${show_place_eng}/${id}/${i}.webp`;
    images.push(imgSrc);
  }
  const settings = {
    dots: true, // add dots as image indicators
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);

      alert("url 복사 되었습니다");
    } catch (error) {
      alert("url 복사 실패 했습니다");
    }
  };

  return (
    <>
      <GlobalStyle />
      <DetailViewerBlock>
        <SliderWrapper color={color}>
          <Slider {...settings}>
            {images.map((image, index) => (
              <MainImage key={index} src={image} alt="" loading="lazy" />
            ))}
          </Slider>
        </SliderWrapper>
        <MainTitle color={color}>
          <p>{show_place}</p>
          <strong>{show_name}</strong>
        </MainTitle>
        <Tags>
          {tags &&
            tags[id]
              .sort((a, b) =>
                a.includes("사진촬영 가능")
                  ? -1
                  : b.includes("사진촬영 가능")
                  ? 1
                  : 0
              )
              .map((tag, index) => {
                return <div key={index}>#{tag}</div>;
              })}
        </Tags>
        {(show_term_start || show_term_end) && (
          <Term>
            {show_term_start} ~ {show_term_end}
          </Term>
        )}

        <HorizontalLine />

        <div
          onClick={() =>
            handleCopyClipBoard(decodeURIComponent(window.location.href))
          }
        >
          <SharingArea>
            <Sharing color={color}>
              <p>공유하기</p>
              <ShareIcon />
            </Sharing>
          </SharingArea>
        </div>
        {instagram_search && (
          <Link
            to={`https://www.instagram.com/explore/tags/${instagram_search}/`}
            target="_blank"
          >
            <InstagramSearchArea>
              <InstagramSearch color={color}>
                <p>인스타그램</p> <Instagram />
              </InstagramSearch>
            </InstagramSearchArea>
          </Link>
        )}

        {show_link ? (
          <Link to={show_link} target="_blank">
            <BookingArea>
              <Booking color={color}>
                <p>
                  {show_price !== 0 ? `${show_price}원` : "무료 전시입니다"}
                </p>
                <FileDownloadDoneSharpIcon />
              </Booking>
            </BookingArea>
          </Link>
        ) : (
          <BookingArea>
            <Booking color={color}>
              <p>예매 할 필요 없는 전시입니다</p>
              <FileDownloadDoneSharpIcon />
            </Booking>
          </BookingArea>
        )}
        <ShowPrice />

        <HorizontalLine />
        <InfoBlock>
          {show_artist && (
            <>
              <Artist>
                <p>
                  <Person2SharpIcon />
                  참여 작가
                </p>
                {show_artist}
              </Artist>
              <HorizontalLine />
            </>
          )}
          <OpeningTime>
            <p>
              <CalendarMonthIcon />
              {show_term_start} ~ {show_term_end}
            </p>
            <h4>영업일: {business_week}</h4>
            <MyCalendar startDate={show_term_start} endDate={show_term_end} />
          </OpeningTime>

          <HorizontalLine />
          <GalleryInformation>
            <p>
              <AccountBalanceIcon />
              관람 시간
            </p>
            {openingHoursObject && (
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {Object.entries(openingHoursObject).map(([day, hours]) => (
                  <li key={day}>
                    {day}: {hours}
                  </li>
                ))}
              </ul>
            )}
          </GalleryInformation>

          <HorizontalLine />
          <PhoneNum>
            <p>
              <PhoneIcon />
              <a href={`tel:${gallery_phone_num}`} onClick={handlePhoneCall}>
                {gallery_phone_num}
              </a>
            </p>
          </PhoneNum>
          <HorizontalLine />
          <PlaceInfo>
            <p>
              <LocationOnSharpIcon />
              <Link to={site} target="_blank">
                {show_place}
              </Link>
            </p>
            <div id="detail">
              {gallery_add_word}
              <br />
              {show_place_detail ? show_place_detail : "상세 장소가 없습니다."}
            </div>
            <PlaceMap>
              {latitude && longitude && (
                <MiniMap name={show_place} lat={latitude} lng={longitude} />
              )}
            </PlaceMap>
          </PlaceInfo>
        </InfoBlock>
      </DetailViewerBlock>
    </>
  );
};

export default React.memo(DetailViewer);
