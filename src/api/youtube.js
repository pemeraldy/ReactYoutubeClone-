import axios from 'axios'
// const KEY = 'AIzaSyBddjQH-iRHlx5avo1JW1nIaF-2Tse2UJs'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    baseURL2:'https://www.googleapis.com/youtube/v3/'
    
})