import React from 'react';
import Searchbar from './Searchbar'
import youtube from '../api/youtube';
import VideoList from './VideoList';

class App extends React.Component {
    state = { videos: [] };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        
        this.setState({
            videos: response.data.items
        })
    };

    render () {
        return (<div>
                    <div className="ui container"> <Searchbar onSubmitForm={this.onTermSubmit}/> </div>
                    <div className="ui container">Found {this.state.videos.length} videos.</div>
                    <div><VideoList videos={this.state.videos}/></div>
                </div>);
    }
}

export default App;