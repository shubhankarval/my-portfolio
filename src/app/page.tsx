import Contact from "@components/sections/Contact/Contact";
import Blog from "@/blogs/blog1.mdx";

export default function Home() {
  return (
    <div>
      {/* <Contact /> */}
      {/* <div className="h-[100px]" /> */}
      {/* <Code code={code} language="js" /> */}
      <div className="mx-auto px-5 pt-10 md:max-w-xl lg:max-w-3xl">
        <Blog />
      </div>
    </div>
  );
}
