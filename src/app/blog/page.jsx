import BlogsPage from "./blogs";

export const metadata = {
    title: "ZET - Blog",
  };


const page = () => {
    return (
        <div className="w-[90%] mx-auto">
            <BlogsPage></BlogsPage>
        </div>
    );
};

export default page;