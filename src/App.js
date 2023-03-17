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
