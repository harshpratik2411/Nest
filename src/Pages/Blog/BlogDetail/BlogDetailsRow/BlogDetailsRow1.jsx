import { useParams } from 'react-router';
import { articles } from '../../BlogRow/BlogRow1'
// import Navbar from  '../../../../Components/Navbar/Navbar'
// import TopNav1 from '../../../../Components/TopNav1/TopNav1';
// import TopNav2 from '../../../../Components/TopNav2/TopNav2';

const BlogDetailRow1 = () => {
  const { id } = useParams();
  const article = articles[id]; // Get the article based on URL id

  if (!article) return <p>Blog not found.</p>;

  return (  
    <>   
    
       {/* <Navbar/> */}
      {/* <TopNav1/>
      <TopNav2/> */}
   
      <div className="p-4 max-w-3xl  mx-auto">
      <img src={article.image} alt={article.title} className="rounded transition-all transform hover:scale-105 mb-4  w-full" />
      <p className="text-sm text-custom-text-lightgray">{article.category}</p>
      <h1 className="text-2xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm text-custom-text-lightgray mb-4">
        {article.date} • {article.views} • {article.readTime}
      </p>
      <p className="text-base">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae exercitationem molestias, tempora provident rem quia quam asperiores delectus. Nisi, dolorum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere modi molestiae veritatis culpa expedita alias dolorem! Voluptates officia error dolorem, atque harum ut fuga. Ipsam temporibus quia sequi rerum beatae accusantium sint itaque dignissimos culpa recusandae animi ut voluptatibus facere et, vel tempore ullam est tenetur incidunt deleniti esse rem.
      </p> 
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, voluptatem? Beatae qui, nobis praesentium sed quis recusandae perferendis? Omnis perspiciatis deserunt ratione voluptatem totam aspernatur quo earum voluptatum consectetur dignissimos, modi error libero ex provident maxime facilis aut? Neque hic, nemo esse repellat quaerat provident iure sequi animi voluptate perferendis quia nisi accusantium illum ipsum alias atque beatae nesciunt necessitatibus consectetur eius excepturi vero. Facilis sint alias provident dicta deserunt eius officiis facere distinctio iste fugiat commodi, modi sapiente eum?
      </p>
    </div> 
    </>
  );
};

export default BlogDetailRow1;
