
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { itemsFetchData } from '../actions'


let win = Dimensions.get('window')

class HomeScreen extends Component {

  componentDidMount () {
    this.props.fetchData('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
  }

  render () {
    let gallery
    const { container, wrapper, img, text } = styles
    const { isLoad, items } = this.props
    if (isLoad) {
      gallery = items.map((item, index) => {
        let size = { width: item.width, height: item.height }
        let { thumb, full } = item.urls
        let { name, username } = item.user
        let nav = this.props.navigation
        return (
            <View key={index} style={wrapper}>
               <TouchableOpacity onPress={nav.navigate.bind(this, 'Fullpick', { img: full, size, win })}>
                  <Image style={img} source={{uri: `${thumb}`}} />
                </TouchableOpacity>
                <Text style={text}> Nickname: {username} </Text>
                <Text style={text}> Title: {name} </Text>
            </View>
        )
      })
    }
    return (
      <ScrollView>
        <View style={container}>
        {gallery ? gallery : <Text> Loading... </Text>}
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    isLoad: state.itemsIsLoad
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url))
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)


const styles = StyleSheet.create({
  img: {
    width: win.width / 2.5,
    height: 200
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-evenly',
    marginBottom: 20,

  },
  text: {
    textAlign: 'center'
  },
  wrapper: {
    marginTop: 20,
    borderWidth: 2,
    width: 200,
    alignItems: 'center',
    borderColor: 'blue',
    borderRadius: 10
  }
})