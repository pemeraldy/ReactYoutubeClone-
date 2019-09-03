import React  from "react"

import youtube from './api/youtube'
// import all compoenets needed from material UI
import { Grid } from '@material-ui/core'

// import SearchBar from './components/SearchBar'
// import VideoDetails from './components/VideoDetails'

import { SearchBar, VideoDetails, VideoList } from './components'



class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount(){
        this.handleSubmit('Lion King latest movie')
    }

    handleSubmit = async (searchTerm) =>{
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyBddjQH-iRHlx5avo1JW1nIaF-2Tse2UJs',
                q: searchTerm
            }
        })

        
        
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect =  (video) =>{
        this.setState({
            selectedVideo : video
        })
    }

    render(){
        const { selectedVideo, videos } = this.state
        return (
            <Grid justify="center" style={{margin: 'auto', overflow:'none'}} container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10} style={{marginLeft: '40px', margin: 'auto'}}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit = {this.handleSubmit} />
                        </Grid>
                        <Grid item xs={6}>
                            <VideoDetails video = {selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos = {videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        )
    }
}


 
export default App