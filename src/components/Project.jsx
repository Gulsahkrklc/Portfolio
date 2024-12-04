import useLanguage from "../hooks/useLanguage";

export default function Project() {
  const { currentContent } = useLanguage();

  // currentContent veya projectsList yoksa bir yedek içerik göster
  if (!currentContent || !Array.isArray(currentContent.projectsList)) {
    return <div>Projects not available</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-8 p-6">
      {currentContent.projectsList.map((project, index) => (
        <div
          key={index}
          className="w-full sm:w-80 md:w-96 lg:w-[20rem] h-auto rounded-xl border-2 border-gray-300 dark:border-[#3c4049] shadow-lg bg-gradient-to-r from-white to-gray-50 dark:from-[#2a2e37] dark:to-[#1f232b] hover:shadow-2xl hover:scale-105 hover:border-[#5A4FCF] transition-all duration-300"
        >
          <img
            alt={project.ptitle}
            src={project.image}
            className="h-48 w-full object-cover rounded-t-lg"
          />
          <div className="p-6">
            <h5 className="text-[#5A4FCF] dark:text-[#CABFFD] font-semibold text-xl">
              {project.ptitle}
            </h5>
            <p className="text-[#4B5563] dark:text-[#B0B7C3] mt-2 text-sm">
              {project.pdesc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
