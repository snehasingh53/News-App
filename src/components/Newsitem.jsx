
{/*
const Newsitem = ({ title, description, imageUrl, url, source, publishedAt }) => {
  return (
    <div className="w-[300px] rounded-md border bg-white mx-4 my-4">
      <img
        src={imageUrl || '/default-image.jpg'}
        alt="News"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          {description}
        </p>
        <p className="mt-2 text-xs text-gray-500">
          <strong>Source:</strong> {source}
        </p>
        <p className="mt-1 text-xs text-gray-500">
          <strong>Published:</strong> {new Date(publishedAt).toLocaleDateString()}
        </p>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus:outline-none"
        >
          Read
        </button>
      </div>
    </div>
  );
};

export default Newsitem;
*/}

const Newsitem = (props) => 
  { 
    const { title, description,source, publishedAt } = props; 
    return ( 
    <div className=" w-[300px] rounded-md border bg-transparent mx-16 my-26"> 
   
    <div className="p-4"> 
    <h1 className="inline-flex items-center text-lg font-semibold"> 
    {title} 
    </h1> 
    
    <p className="mt-3 text-sm text-gray-600"> 
    {description} 
    </p> 
    <div className="mt-2 text-sm text-black">
          <p><strong>Source:</strong> {source}</p>
          <p><strong>Published at:</strong> {new Date(publishedAt).toLocaleDateString()}</p>
        </div>
    <button type="button" className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" > Read </button>
    </div> 
    </div> 
    ); 
  }; 
  export default Newsitem;
