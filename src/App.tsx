import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Auth } from './Features/Auth';
import { AuthConsumer } from './Features/Auth/AuthProvider';
import { useTranslation, Trans } from 'react-i18next';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';

const lngs = {
  en: { nativeName: 'English' },
  bn: { nativeName: 'Bengali' }
};

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  };

  const languageOptionChanged = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    console.log(languageCode);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const { t, i18n } = useTranslation();

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
      {
          <span className='commonSpanClass'>
            <p className='commonParaStyle' onClick={() => languageOptionChanged("en")}><b>English</b></p>
            <p className='commonParaStyle'>|</p>
            <p className='commonParaStyle' onClick={() => languageOptionChanged("bn")}><b>বাংলা</b></p>
            <a href="/" id="homeItem"><Trans i18nKey="description.part3"><h6>Home</h6></Trans></a>
            <a href="/About" id="aboutItem"><Trans i18nKey="description.part2"><h6>About</h6></Trans></a>
            <h4 className='commonParaStyle' onClick={toggleTheme}><Trans i18nKey="description.part1">Theme change</Trans></h4>
          </span>
      }
      {
      // For better routing demonstration
      /*
          <span className='commonSpanClass'>
              <p className='commonParaStyle' onClick={() => languageOptionChanged("en")}><b>English</b></p>
              <p className='commonParaStyle'>|</p>
              <p className='commonParaStyle' onClick={() => languageOptionChanged("bn")}><b>বাংলা</b></p>

              <Link to='/' id="homeItem"><Trans i18nKey="description.part3"><h6>Home</h6></Trans></Link>
              <Link to='/About' id="aboutItem"><Trans i18nKey="description.part2"><h6>About</h6></Trans></Link>
          </span>
      */
      }

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
