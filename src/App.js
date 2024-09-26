import './App.css';
import Header from "./components/Header/Header";
import Breadcrumb from "./components/ui/Breadcrumb/Breadcrumb";
import Cases from "./components/Cases/Cases";

function App() {
    return (
        <div className="app_wrapper">
            <Header/>
            <Breadcrumb/>
            <Cases/>
        </div>
    );
}

export default App;
