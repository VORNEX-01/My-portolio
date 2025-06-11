export default function Projects() { const projects = [
    {
      title: "مینی‌شاپ (MiniShop)",
      description: "یک فروشگاه ساده با رابط کاربری سبک و ریسپانسیو برای نمایش محصولات.",
      link: "", // لینک بعداً اضافه میشه
    },
    {
      title: "پروژه Todo List",
      description: "لیست کارها با قابلیت افزودن، ویرایش، حذف و ذخیره‌سازی اطلاعات.",
      link: "https://to-do-appvornex.netlify.app/",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-2 text-center">نمونه‌کارها</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-white rounded-4xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 p-6"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{proj.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{proj.description}</p>

            {proj.link ? (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all text-sm"
              >
                مشاهده پروژه
              </a>
            ) : (
              <p className="text-gray-400 text-sm">لینک پروژه در دسترس نیست</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
