import React from 'react';
import Searchbar from './Searchbar'
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount(){
        this.onTermSubmit('Rick and Morty New Season')
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    };

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })

    }

    render () {
        return (
                    <div className="ui container">
                        <Searchbar onSubmitForm={this.onTermSubmit}/>
                        <div className="ui grid">
                            <div className="ui row">
                                <div className="eleven wide column"><VideoDetail video={this.state.selectedVideo}/></div>
                                <div className="five wide column"><VideoList videos={this.state.videos} onSelectVideo={this.onVideoSelect}/></div>
                            </div>
                        </div>
                    </div>
                );
    }
}

export default App;