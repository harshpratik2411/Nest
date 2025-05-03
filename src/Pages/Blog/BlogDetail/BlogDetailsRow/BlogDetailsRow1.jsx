import { useParams } from 'react-router';
import { articles } from '../../BlogRow/BlogRow1';

const BlogDetailRow1 = () => {
  const { id } = useParams();
  const article = articles[id];

  if (!article) return <p>Blog not found.</p>;

  return (
    <>
      <div className="p-4 max-w-5xl mx-auto">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 sm:h-80 md:h-[400px] object-cover rounded-lg transition-all transform hover:scale-105 mb-4"
        />
        <p className="text-sm text-custom-text-lightgray">{article.category}</p>
        <h1 className="text-xl sm:text-2xl font-bold mb-2">{article.title}</h1>
        <p className="text-sm text-custom-text-lightgray mb-4">
          {article.date} • {article.views} • {article.readTime}
        </p>
        <p className="text-base text-justify leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae exercitationem
          molestias, tempora provident rem quia quam asperiores delectus. Nisi, dolorum. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Facere modi molestiae veritatis culpa
          expedita alias dolorem! Voluptates officia error dolorem, atque harum ut fuga. Ipsam
          temporibus quia sequi rerum beatae accusantium sint itaque dignissimos culpa recusandae
          animi ut voluptatibus facere et, vel tempore ullam est tenetur incidunt deleniti esse rem.
        </p>
        <p className="mt-4 text-base text-justify leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, voluptatem? Beatae qui,
          nobis praesentium sed quis recusandae perferendis? Omnis perspiciatis deserunt ratione
          voluptatem totam aspernatur quo earum voluptatum consectetur dignissimos, modi error
          libero ex provident maxime facilis aut? Neque hic, nemo esse repellat quaerat provident
          iure sequi animi voluptate perferendis quia nisi accusantium illum ipsum alias atque
          beatae nesciunt necessitatibus consectetur eius excepturi vero. Facilis sint alias
          provident dicta deserunt eius officiis facere distinctio iste fugiat commodi, modi
          sapiente eum?
        </p>
      </div>
    </>
  );
};

export default BlogDetailRow1;
