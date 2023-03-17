//Isaiah Keith Ferguson
//3-17-2023
//Social Media DashBoard

//Peer Review by Kenneth Fujimura:
//Great work! I really like what I’m seeing here. The responsiveness meets all of the project’s criteria. The stylesheet was accurately followed. Great job on approximating all of the font sizes despite us having to eyeball them. I liked how you broke everything down into components, and how you separated all of the css into different files associated with those components. Your code is very neatly organized, easy to follow, and was a lot of fun to read; great naming conventions. And your use of props was pretty masterful and easy to follow what you did. A few notes for improvement: To get your site pixel perfect with the prototype, set the bootstrap container’s max-width to 1100px or so. Bootstrap’s container’s defaults onto a max-width of 1320px. Also, very minor nitpick with the top cards: the colored line that borders the top tapers off on the side, in a way that the prototype doesn’t. To fix this, set the border-width of the top line to be the same number of pixels as the border-radius. Also, the dark mode toggle looks really fresh but the circle on the inside should be the same color as the background behind the toggle, and the color of the toggle should shift to grey in light mode, but IMO that’s not all that important. All in all though, I really like what I’m seeing here. 10/10 work Isaiah. You killed it!

import DashBoard from './components/dashboardcomponent/DashboardComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const MediaHeader = "Social Media DashBoard";
  return (
    <div>
      <DashBoard MediaHeader={MediaHeader}></DashBoard>
    </div>
  );
}

export default App;
