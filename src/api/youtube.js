import axios from 'axios'

const KEY = 'AIzaSyBwVteROoZ27LPGTSrlEZReDz8PW3EGhiQ'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})