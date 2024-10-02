import './App.css';
import Header from "./components/Header/Header";
import Breadcrumb from "./components/ui/Breadcrumb/Breadcrumb";
import Cases from "./components/Cases/Cases";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div>
            <div className="app_wrapper">
                <div className="header_wrapper">
                    <Header/>
                </div>
                <div className="breadcrumb_wrapper">
                    <Breadcrumb/>
                </div>
                <Cases/>
            </div>
            <div className="footer_wrapper">
                <div className="footer_container">
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default App;
