import './App.css';
import Header from './components/Header';
import Characters from  './components/Characters'
import FetchEpisodes from './components/FetchEpisodes';
import ViewerInfo from './components/ViewerInfo';
import {
  BrowserRouter as Router,
 Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Header /> 
     
      <Routes>
        <Route path="/episodes" element={<FetchEpisodes/>}></Route>
        <Route path="/viewerInfo" element={<ViewerInfo/>}></Route>
        <Route path="/" element={<Characters/>}></Route>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
