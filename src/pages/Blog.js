import React from "react";
import Banner from "../components/Banner";
import BlogPost from "../components/blogPost";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import BlogData from "../blogDate";
import BannerData from "../BannerData";
export default function Blog() {
  const blog = BlogData.map((item) => {
    return <BlogPost key={item.key} {...item} />;
  });

  return (
    <>
      <Banner
        key={BannerData[1].key}
        id={BannerData[1].id}
        title={BannerData[1].title}
        subtitle={BannerData[1].subTitle}
      />
      {blog}
      <Newsletter />
      <Footer />
    </>
  );
}
