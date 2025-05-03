import React from "react";
//import  BlogDetailsRow from '../../BlogDetail/BlogDetailsRow/BlogDetailsRow1'
import BlogDetailsCol from "../BlogDetailsCol/BlogDetailsCol1";
import Navbar from "../../../../Components/Navbar/Navbar";
import TopNav1 from "../../../../Components/TopNav1/TopNav1";
import TopNav2 from "../../../../Components/TopNav2/TopNav2";
import BlogDetailsRowMain from "../BlogDetailsRowMain/BlogDetailsRowMain";
import BlogBannerbottom from "../../BlogBannerbottom/BlogBannerBottom";
import Footer from "../../../../Components/Footer/Footer";

const BlogDetailsMain = () => {
  return (
    <>
      <div>
        <Navbar />
        <TopNav1 />
        <TopNav2 />
      </div>

      <div className="flex">
        <BlogDetailsRowMain />
        <BlogDetailsCol />
      </div>
      <div>
        <BlogBannerbottom />
        <Footer />
      </div>
    </>
  );
};

export default BlogDetailsMain;
