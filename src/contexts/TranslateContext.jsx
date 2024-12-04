export default function TransleteContextProvider({ children }) {
  const [leanguage, setLeanguage] = useState(() => {
    const savedLeanguage = localStorage.getItem("leanguage");
    return savedLeanguage === "tr" || savedLeanguage === "en"
      ? savedLeanguage
      : "en";
  });
  const [currentContent, setCurrentContent] = useState(null);

  useEffect(() => {
    localStorage.setItem("leanguage", leanguage);

    axios
      .post("https://reqres.in/api/workintech", ceviri[leanguage])
      .then((response) => {
        setCurrentContent(response.data || ceviri[leanguage]);
      })
      .catch(() => {
        setCurrentContent(ceviri[leanguage]);
      });
  }, [leanguage]);

  const changeLeanguage = () => {
    setLeanguage((prevLanguage) => (prevLanguage === "en" ? "tr" : "en"));
  };

  return (
    <TransleteContext.Provider
      value={{ leanguage, setLeanguage, changeLeanguage, currentContent }}
    >
      {children}
    </TransleteContext.Provider>
  );
}
