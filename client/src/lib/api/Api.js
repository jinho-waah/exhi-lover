import axios from "axios";
const mainUrl = "http://localhost:5100";
// const mainUrl = "https://art-lover.co.kr";

// default () => shows
export const fetchAllShows = async () => {
  const url = "/api/show";
  const response = await axios.get(`${mainUrl}${url}`);
  return response.data;
};

// search.js (searchQuery) => shows
export const fetchShowsbySearchQuery = async (
  searchQuery,
  selectedValue,
  paginationValue
) => {
  const url = searchQuery
    ? `/api/shows/search/${paginationValue}/${searchQuery}/${selectedValue}`
    : `/api/show/${paginationValue}/${selectedValue}`;
  const response = await axios.get(`${mainUrl}${url}`);
  return response.data;
};

// // PostTemplate.j DetailTemplate (showid) => tagID
export const fetchShowTagsId = async (showId) => {
  const url = `/api/exhibition_tags/show/${showId}`;
  const response = await axios.get(`${mainUrl}${url}`);
  return response.data;
};

export const fetchTagsIdbyShowId = async (showsIds) => {
  const url = `/api/exhibition_tags/shows/${showsIds}`;
  const response = await axios.get(`${mainUrl}${url}`);
  return response.data;
};

//postTemplate.js DetailTemplate.js (tagid) => tagname
export const fetchTagName = async (tagId) => {
  const url = `/api/tags/${tagId}`;
  const response = await axios.get(`${mainUrl}${url}`);
  return response.data[0].tag_name;
};

// TagsCheckBox () => all of tag's id
export const fetchEnableTagId = async () => {
  const url = `/api/exhibition_tags/tags/`;
  const response = await axios.get(`${mainUrl}${url}`);
  return response.data.map((tag) => parseInt(tag.tag_id));
};

// idtoshow.js (tagIdString) => showId // tagIdString == tag_id&tag_id ...etc
export const fetchShowIdByTagId = async (tagIdString) => {
  const url = `/api/exhibition_tags/tags/${tagIdString}`;
  const response = await axios.get(`${mainUrl}${url}`);
  return response.data
    .map((i) => parseInt(i.exhibition_id))
    .sort((a, b) => a - b)
    .join("&");
};

// idtoshow.js DetailTemplate.js (showIds) => shows
export const fetchShowByShowId = async (showIds) => {
  const url = `/api/shows/id/${showIds}`;
  const response = await axios.get(`${mainUrl}${url}`);
  return response.data;
};

//DetailViewer.js () => gallery
export const fetchGalleryInfo = async (galleryId) => {
  const url = `/api/gallery/information/${galleryId}`;
  const response = await axios.get(`${mainUrl}${url}`);
  return response.data[0];
};

//Map.js > galleries table get
export const fetchGalleryLocation = async () => {
  const timestamp = Date.now();
  // const url = "/api/gallery/location";
  const url = `/api/gallery/location?timestamp=${timestamp}`;
  const response = await axios.get(`${mainUrl}${url}`);
  return response.data;
};

//Map.js
export const fetchShowsByGalleryId = async (id) => {
  const url = `/api/gallery/shows/${id}`;
  const response = await axios.get(`${mainUrl}${url}`);
  return response.data;
}