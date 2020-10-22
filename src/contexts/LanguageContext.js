import React, {
  useState,
  useEffect,
} from "react";

export const LanguageContext = React.createContext();

const LanguageSelectProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const options = [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'swedish', label: 'Swedish' },
    { value: 'arabic', label: 'Arabic' },
  ];

  const [languageNames, setLanguageNames] = useState([
     { label: "Loading ...", value: "" }
  ]);
  const [languages, setLanguages] = useState([
     { label: "Loading ...", value: "" }
  ]);
  const [value, setValue] = useState();
  const [selectedLanguage, setSelectedLanguage] = useState();

  useEffect(() => {
    let unmounted = false;

    async function getLanguages() {
      if (!unmounted) {
        // THIS WILL SET THE LANGUAGE
        setLanguageNames(
          options.map((languageName) => (
            {
              label: languageName.label,
              value: languageName.value
            }
          ))
        );

        setLanguages(
          options.map((language, i) => {
            // THIS WILL SET THE LANGUAGE ON LOAD
            if ( !window.sessionStorage.getItem('language') ){
              if ( i === 0 ) setValue(language.value);//:
              if ( i === 0 ) window.sessionStorage.setItem('language', language.value);
            } else {
              setValue(window.sessionStorage.getItem("language"));
            }
            return language
          })
        );

        setLoading(false);
      }
    }

    getLanguages();

    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLanguageContent = e => {
    // THIS WILL SET THE LANGUAGE ON CHANGE/SELECTION
    setValue(e.target.value);
    languages.filter( (languageSelected) => {
      if (e.target.value === languageSelected.value) {
        return (
          window.sessionStorage.setItem('language', languageSelected.value),
          setSelectedLanguage(languageSelected.value)
        )
      }
      return null;
    })
  }

  return (
    <>
      <div className="language_selector">
        <select disabled={loading} value={value} onChange={setLanguageContent}>
          {
            options.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))
          }
        </select>
      </div>

      <LanguageContext.Provider value={[selectedLanguage, setSelectedLanguage, languageNames]}>
        { children }
      </LanguageContext.Provider>
    </>
  );
}

export default LanguageSelectProvider;
