// Key Differences:
// Our search box is now connected to the API call.
// When the search is submitted, the value is passed into the SearchResults component.
// When the SearchResults component receives new props, it will run a new API call with the new props.

import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

class SearchResults extends Component {

    // We are setting the initial state of this.state.movie to ''.
    constructor(props) {
        super(props);
        this.state = {
            movie: '',
        };
    }

    // When the component receives new props (e.g., when the user searches)...
    componentWillReceiveProps(nextProps) {

        // We will run the fetchData() function with the movie as an argument.
        this.fetchData(nextProps.movie);

    }

    // The fetchData function makes an AJAX call to the OMDB API.
    fetchData(movieinput) {
        // We pass the movie the user entered in into the URL for the API call.
        fetch('http://www.omdbapi.com/?t='+movieinput+'&y=&plot=short&r=json')
            .then((response) => response.json())
            .then((responseData) => {
                // After the data is recieved, we set this.state.movie to the result of the API call.
                this.setState({
                    movie: responseData,
                });
            })
            .done();
    }

    render() {

        // If we have recieved a search from the user display this:
        if (this.props.movie != '') {
            return (
                <View style={styles.item}>
                    <Text style={styles.txt}>
                        <Text style={{fontWeight: 'bold'}}>Title: </Text> 
                        {this.state.movie.Title}
                        {"\n"}
                    </Text>
                    <Text style={styles.txt}>
                        <Text style={{fontWeight: 'bold'}}>Year: </Text> 
                        {this.state.movie.Year}
                        {"\n"}
                    </Text>
                    <Text style={styles.txt}>
                        <Text style={{fontWeight: 'bold'}}>Plot: </Text> 
                        {this.state.movie.Plot}
                        {"\n"}
                    </Text>
                    <Text style={styles.txt}>
                        <Text style={{fontWeight: 'bold'}}>Actors: </Text> 
                        {this.state.movie.Actors}
                        {"\n"}
                    </Text>
                    <Text style={styles.txt}>
                        <Text style={{fontWeight: 'bold'}}>Metascore: </Text> 
                        {this.state.movie.Metascore}
                        {"\n"}
                    </Text>
                </View>
            );

        // If the user hasn't searched for anything yet, display this:
        } else {
            return (
                <View style={styles.item}>
                    <Text style={styles.txt}>
                        <Text 
                            style={{fontWeight: 'bold', color: 'white', textAlign: 'center', fontSize: 18}}>
                            Search for a movie to begin! 
                        </Text> 
                    </Text>
                </View>
            )
        }

    }

}

const styles = StyleSheet.create({

    txt: {
        fontSize: 16,
        color: 'white'
    },

    item: {
        flex: 1,
        margin: 10,
        backgroundColor: 'rgba(76,217,175,1)',
        padding: 10,
    },
    
});

export default SearchResults;