import './App.css';
import Header from "./components/Header/Header";
import Breadcrumb from "./components/ui/Breadcrumb/Breadcrumb";
import Cases from "./components/Cases/Cases";

function App() {
    return (
        <div className="app_wrapper">
            <div className="header_wrapper">
                <Header/>
            </div>
            <div className="breadcrumb_wrapper">
                <Breadcrumb/>
            </div>
            <Cases/>
        </div>
    );
}

export default App;
