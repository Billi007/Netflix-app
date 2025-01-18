export const netflixBgImage = "https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_small.jpg" 
export const options = {
	method: 'GET',
	headers: {
	  accept: 'application/json',
	  Authorization: 'Bearer ' + import.meta.env.REACT_APP_TMDB_KEY,
	}
  };
  
export const IMG_CDN = 'https://image.tmdb.org/t/p/w500';

export const supportedLanguage = [
  {identifier: 'en', name: "English"},
  {identifier: 'fr', name: "French"},
  {identifier: 'ru', name: "Russia"},
  {identifier: 'ja', name: "Japanese"},
  {identifier: 'chi', name: "Chinese"},
  {identifier: 'ko', name: "Korean"},
  {identifier: 'ar', name: "Arabic"},
  {identifier: 'hi', name: "Hindi"},
  {identifier: 'es', name: "Spanish"},
  {identifier: 'ur', name: "Urdu"},
] 


//export const GEMINI_KEY= import.meta.env.process.REACT_APP_GEMINI_KEY