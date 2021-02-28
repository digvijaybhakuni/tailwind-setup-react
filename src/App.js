import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';

function App() {
  return (
    <div className="App bg-white dark:bg-gray-800">
      <Header/>
      <Notification/>
    </div>
  );
}


const Notification = () => {
  return <div className="p-6">
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-gray-500">You have a new message!</p>
      </div>
    </div>
  </div>
};


export default App;
