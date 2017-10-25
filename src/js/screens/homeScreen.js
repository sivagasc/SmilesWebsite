import React, { Component } from 'react';
import '../../css/homeScreen.css';
import  MenuBar from '../components/menuBar';
import ContentBar from '../components/contentBar';
import commonObj from '../common/data.js';
import ScrollableAnchor from 'react-scrollable-anchor';
import Carousel from './CarouselScreen';

{
  /*
     Class Name: HomeScreen
     Return : @component
  */
}
class HomeScreen extends Component {
  
  state = {
        contentObj : {
          headerContent : null,
          mainContent : null
        } 
      }  
  /* 
      Service call to fetch the content 
  */
  componentWillMount = () => {
    this.setState ({
      contentObj : {
        headerContent : "lorem ipsum",
        mainContent : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      }
    });
   } 

  render() {
    return ( 
    <div>	
       <MenuBar/>
       <ScrollableAnchor id={commonObj.sectionIds[0]}>
       <Carousel active="1" className="height-100vh">
      </Carousel>
       </ScrollableAnchor>
       <ScrollableAnchor id={commonObj.sectionIds[1]}>
      <div className="height-100vh">
       <ContentBar  contentObj={this.state.contentObj}/> 
       </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={commonObj.sectionIds[2]}>
      <div className="height-100vh">
      </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={commonObj.sectionIds[3]}>
      <div className="height-100vh">
      </div> 
      </ScrollableAnchor>
      <ScrollableAnchor id={commonObj.sectionIds[4]}>
      <div className="height-100vh">
      </div>
      </ScrollableAnchor>
       
    </div> 
    );
  }
}

export default HomeScreen;