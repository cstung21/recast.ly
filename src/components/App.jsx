// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em><VideoPlayer video={window.exampleVideoData}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em>
         
//           <VideoList videos = {window.exampleVideoData}/>
//         </h5></div>
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: window.exampleVideoData,
      display: window.exampleVideoData[0], //current video being played
    };
  }

  onItemClick(video){
    //console.log(this.state);
    this.setState ({
      //done: !this.state.done,
      display: video
    });
    //console.log(this.setState.listEntry);
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> <Search /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.display}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em>
              <VideoList videos={this.state.videoList} onClick={this.onItemClick.bind(this)}/>
            </h5></div>
          </div>
        </div>
      </div>
    ); 
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
