import pizza from "./assets/pizza-project.png"
import watchlist from "./assets/watchlist.png"
import fimler from "./assets/fimler.png"


export const ceviri = {
    tr: {
    skills: "Yetenekler",
    projects: "Projeler",
    hireme: "Beni işe al",
    title: "",
    desc: `Merhaba, ben Gülşah. Full Stack Developer adayıyım. `,
    java:"JavaScript, web sayfalarını etkileşimli hale getiren bir programlama dilidir. HTML ve CSS ile birlikte çalışarak duyarlı, dinamik web deneyimleri oluşturur ve modern web geliştirme için önemlidir.",
    react: "React, kullanıcı arayüzleri oluşturmak için geliştirilmiş bir JavaScript kütüphanesidir. Facebook tarafından geliştirilmiş ve günümüzde geniş bir topluluk tarafından desteklenmektedir. React, bileşen bazlı yapısı sayesinde karmaşık kullanıcı arayüzlerinin daha hızlı ve düzenli bir şekilde geliştirilmesine olanak tanır. Tek sayfa uygulamalar (SPA) ve mobil uygulamalar için yaygın olarak kullanılır.",
    node: "Node.js, sunucu tarafında JavaScript çalıştırmayı sağlayan bir platformdur. Chrome’un V8 JavaScript motoru üzerine kuruludur ve hızlı ve ölçeklenebilir ağ uygulamaları geliştirmek için kullanılır. Node.js, asenkron ve olay güdümlü yapısı sayesinde yüksek performans sağlar, bu yüzden özellikle gerçek zamanlı uygulamalarda tercih edilir.",
    profile: "Profil",
    profileDetails: {
        name: { label: "Ad Soyad", value: "Gülşah KARAKILIÇ" },
        city: { label: "İkamet Şehri", value: "BİNGÖL" },
        education: { label: "Eğitim Durumu", value: "Üniversite Mezunu" },
        role: { label: "Tercih Ettiği Rol", value: "Full Stack Developer" },
      },
    about:"Hakkımda",
    info1: "1993 yılıda Malatya’da doğdum.",
    info2:"Üniversite eğitimime Malatya'da İnönü Üniversitesi Elektirik Elektronik Mühendisliği Bölümü'nden mezun oldum",
    proje:"Projeler",
    projectsList: [
        {
          ptitle: "Pizza",
          pdesc: "Eğer lezzetli bir pizza yemek istiyorsanız, İtalya'ya gitmenize gerek yok. Bu proje, benim çıraklık dönemimde ortaya çıkan ilk işlerden biri.",
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
      ftitle: "Bir sonraki projede beraber çalışalım."

    },

    en: {
      en: {
        skills: "Skills",
        projects: "Projects",
        hireme: "Hire me",
        title: "",
        desc: `Hello, I'm Gülşah. I am a Full Stack Developer candidate.`,
        java: "JavaScript is a programming language that makes web pages interactive. It works together with HTML and CSS to create responsive and dynamic web experiences, making it essential for modern web development.",
        react: "React is a JavaScript library developed for building user interfaces. It was created by Facebook and is now supported by a vast community. React's component-based structure allows for faster and more organized development of complex user interfaces. It is commonly used for single-page applications (SPA) and mobile apps.",
        node: "Node.js is a platform that enables JavaScript to run on the server side. Built on Chrome’s V8 JavaScript engine, it is used to develop fast and scalable network applications. Node.js, with its asynchronous and event-driven architecture, provides high performance, making it especially suitable for real-time applications.",
        profile: "Profile",
        profileDetails: {
            name: { label: "Name", value: "Gülşah KARAKILIÇ" },
            city: { label: "City of Residence", value: "BİNGÖL" },
            education: { label: "Education", value: "University Graduate" },
            role: { label: "Preferred Role", value: "Full Stack Developer" },
        },
        about: "About Me",
        info1: "I was born in 1993 in Malatya.",
        info2: "I completed my university education in Malatya at İnönü University, Department of Electrical and Electronics Engineering.",
        proje: "Projects",
        projectsList: [
            {
              ptitle: "Pizza",
              pdesc: "If you want to eat a delicious pizza, you don't have to go to Italy. This project is one of my first works during my apprenticeship period.",
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
}