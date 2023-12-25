import classNames from "classnames/bind";
import Styles from './App.module.scss';
import Header from "./Components/layouts/Header/Header";
import BodyWeb from "./Components/layouts/Main/Body";
import Footer from "./Components/layouts/Footer/Footer";
import Alert from "./Components/Modalaler/Alert";




const cx = classNames.bind(Styles);


function App() {




  return (
    
    <div className={cx('App')}>
                <div>
                  <Header/>
                </div>
                <div>
                    <BodyWeb/>
                </div>
                <div>
                  <Footer/>
                </div>

                <div>
                  <Alert/>
                </div>
            </div>
  );
}

export default App;
