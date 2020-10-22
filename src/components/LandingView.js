import React, {
  useState,
  useEffect,
  useContext
} from 'react';

import { LanguageContext } from '../contexts/LanguageContext';

const LandingView = () => {
  const languageNames = useContext(LanguageContext);
  let languageName = window.sessionStorage.getItem("language") ? window.sessionStorage.getItem("language") : 'No language set';
  const [pageTitle, setPageTitle] = useState('');
  const [pageIntro, setPageIntro] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [pageText, setPageText] = useState('');
  const languages = languageNames[2];
  const [toggleTechUsed, setToggleTechUsed] = useState(false);

  //Once components load complete
  useEffect(() => {
    if(languageName === "english") {
      setPageTitle('This is the Home page');
      setPageIntro('This page has the same content in the following languages:');
      setCurrentLanguage('The currently selected language is');
      setPageText('The text on this page was mostly borrowed from Google Translate so if it is not accurate, I sincerely apologise (especially the Arabic; I did not confirm the RTL text direction but I factored it into the app). Test out the other languages too.');
    }
    if(languageName === "spanish") {
      setPageTitle('Esta es la página principal');
      setPageIntro('Esta página tiene el mismo contenido en los siguientes idiomas:');
      setCurrentLanguage('El idioma seleccionado actualmente es');
      setPageText('El texto de esta página se tomó principalmente de Google Translate, por lo que si no es exacto, me disculpo sinceramente (especialmente el árabe; no confirmé la dirección del texto RTL, pero lo incluí en la aplicación). Pruebe también los otros idiomas.');
    }
    if(languageName === "swedish") {
      setPageTitle('Det här är hemsidan');
      setPageIntro('Denna sida har samma innehåll på följande språk:');
      setCurrentLanguage('Det aktuella valda språket är');
      setPageText('Texten på den här sidan lånades mest från Google Translate, så om den inte är korrekt ber jag om ursäkt (särskilt arabiska; jag bekräftade inte RTL-textriktningen men jag tog det med i appen). Testa även de andra språken.');
    }
    if(languageName === "arabic") {
      setPageTitle('هذه هي الصفحة الرئيسية');
      setPageIntro('تحتوي هذه الصفحة على نفس المحتوى باللغات التالية:');
      setCurrentLanguage('اللغة المختارة حاليا هي');
      setPageText('تم استعارة النص الموجود في هذه الصفحة في الغالب من الترجمة من Google ، لذا إذا لم يكن دقيقًا ، فأنا أعتذر بصدق (خاصة اللغة العربية ؛ لم أقم بتأكيد اتجاه النص من RTL لكنني أدخلته في التطبيق). اختبر اللغات الأخرى أيضًا.');
    }
  }, [languageName, pageTitle]);

  return (
    <main>
      <p>Note: Ensure your browser is not set to 'Auto translate'.</p>
      <div className={`languages_box mt-5 ${languageName === "arabic" ? 'rtl_text' : ''}`}>
        <h1>{pageTitle}</h1>
        <p>{pageIntro}</p>
        <ul>
          {
            Object.keys(languages).map((key) => (
              <li key={key}>{languages[key].label}</li>
            ))
          }
        </ul>
        <p>
          <span>{currentLanguage}:&nbsp;</span>
          {
            languageName
            ? <span>[ {languageName} ]</span>
            : <span>...</span>
          }
        </p>
        <div className="language_box">
          <p>{pageText}</p>
        </div>

        <div className="profile_buttons_container">
          <button className="button submit_btn form_button" onClick={() => setToggleTechUsed(!toggleTechUsed)}>Technology used</button>
        </div>

        {
          toggleTechUsed &&
          <ul>
            <li>react</li>
            <li>react-hooks</li>
            <li>react-use-context</li>
            <li>javascript</li>
            <li>scss</li>
            <li>css3</li>
            <li>html5</li>
          </ul>
        }
      </div>
    </main>
  )
}

export default LandingView;
