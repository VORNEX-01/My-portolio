import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "مینی‌شاپ (MiniShop)",
      description: "یک فروشگاه ساده با رابط کاربری سبک و ریسپانسیو برای نمایش محصولات.",
      link: "https://your-minishop-site.netlify.app"
    },
    {
      title: "پروژه Todo List",
      description: "لیست کارها با قابلیت افزودن، ویرایش، حذف و ذخیره‌سازی اطلاعات.",
      link: "https://your-todo-app.netlify.app"
    }
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">نمونه‌کارها</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <Card key={idx} className="hover:scale-[1.02] transition-transform">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{proj.title}</h2>
              <p className="mb-3 text-muted-foreground text-sm">{proj.description}</p>
              <a href={proj.link} target="_blank" className="text-blue-600 hover:underline">مشاهده پروژه</a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}