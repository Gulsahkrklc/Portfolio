import pizza from "./assets/pizza-project.png";
import watchlist from "./assets/watchlist.png";
import fimler from "./assets/fimler.png";

export const ceviri = {
  tr: {
    skills: "Yetenekler",
    projects: "Projeler",
    hireme: "Beni işe al",
    title: "",
    desc: `Merhaba, ben Gülşah. Full Stack Developer adayıyım.`,
    java:
      "JavaScript, web sayfalarını etkileşimli hale getiren bir programlama dilidir.",
    react: "React, kullanıcı arayüzleri oluşturmak için geliştirilmiş bir JavaScript kütüphanesidir.",
    node: "Node.js, sunucu tarafında JavaScript çalıştırmayı sağlayan bir platformdur.",
    profile: "Profil",
    profileDetails: {
      name: { label: "Ad Soyad", value: "Gülşah KARAKILIÇ" },
      city: { label: "İkamet Şehri", value: "BİNGÖL" },
      education: { label: "Eğitim Durumu", value: "Üniversite Mezunu" },
      role: { label: "Tercih Ettiği Rol", value: "Full Stack Developer" },
    },
    about: "Hakkımda",
    info1: "1993 yılıda Malatya’da doğdum.",
    info2: "Üniversite eğitimime İnönü Üniversitesi'nde başladım.",
    proje: "Projeler",
    projectsList: [
      {
        ptitle: "Pizza",
        pdesc: "Eğer lezzetli bir pizza yemek istiyorsanız...",
        technologies: ["React", "Redux", "Axios"],
        github: "https://github.com/Gulsahkrklc/Pizza-projesi-react",
        site: "",
        image: pizza,
      },
      {
        ptitle: "Film Listesi",
        pdesc: "Bir film listeleme uygulaması. React ve Redux kullanarak geliştirilmiş bir uygulama.",
        technologies: ["React", "Redux", "Axios"],
        github: "",
        site: "",
        image: watchlist,
      },
      {
        ptitle: "Filmler",
        pdesc: "Birçok popüler veya daha az bilinen filmi seçip o gün izleyebilir veya favori listenize ekleyerek gelecekte izlemek üzere saklayabilirsiniz.",
        technologies: ["React", "Redux", "Axios"],
        github: "",
        site: "",
        image: fimler,
      },
    ],
    
    ftitle: "Bir sonraki projede beraber çalışalım.",
  },
  en: {
    skills: "Skills",
    projects: "Projects",
    hireme: "Hire me",
    title: "",
    desc: `Hello, I'm Gülşah. I am a Full Stack Developer candidate.`,
    java: "JavaScript is a programming language...",
    react: "React is a JavaScript library for building user interfaces.",
    node: "Node.js is a platform that enables JavaScript to run on the server side.",
    profile: "Profile",
    profileDetails: {
      name: { label: "Name", value: "Gülşah KARAKILIÇ" },
      city: { label: "City of Residence", value: "BİNGÖL" },
      education: { label: "Education", value: "University Graduate" },
      role: { label: "Preferred Role", value: "Full Stack Developer" },
    },
    about: "About Me",
    info1: "I was born in 1993 in Malatya.",
    info2: "I completed my university education at İnönü University.",
    proje: "Projects",
    projectsList: [
      {
        ptitle: "Pizza",
        pdesc: "If you want to eat a delicious pizza...",
        technologies: ["React", "Redux", "Axios"],
        github: "https://github.com/Gulsahkrklc/Pizza-projesi-react",
        site: "",
        image: pizza,
      },
            {
              ptitle: "Watchlist",
              pdesc: "A movie listing application. Developed using React and Redux.",
              technologies: ["React", "Redux", "Axios"],
              github: "",
              site: "",
              image: watchlist,
            },
            {
              ptitle: "Movies",
              pdesc: "You can select from many popular or lesser-known movies to watch that day, or add them to your favorites list to save for later.",
              technologies: ["React", "Redux", "Axios"],
              github: "",
              site: "",
              image: fimler,
            },
          ],
          ftitle: "Let's work together on the next project."
    },
    
    }
