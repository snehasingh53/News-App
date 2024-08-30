import { useState, useEffect } from 'react';
import axios from 'axios';
import Newsitem from './Newsitem';

const News = () => {
  const [headlines, setHeadlines] = useState([]);  
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response = await axios.get('/api/v2/top-headlines', {
          params: {
            country: 'in',
            pageSize: 5,  
            apiKey: '7385ea57281643f6802d09f7980c05ae'
          },
        });
        setHeadlines(response.data.articles);
      } catch (error) {
        setError('Failed to fetch headlines.');
      }
    };

    fetchHeadlines();
  }, []);

  return (
    <div className='container my-20'>
      {error && <p className='text-red-500'>{error}</p>}
      <h2 className='text-2xl font-bold mb-4'>News-App: Top Headlines</h2>
      <div className="flex flex-wrap -mx-4">
        {headlines.length > 0 ? (
          headlines.map((article, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-4">
              <Newsitem
                title={article.title} //Add title 
                description={article.description} //Add description
                source={article.source.name}        // Add source
                publishedAt={article.publishedAt}   // Add publication date
              />
            </div>
          ))
        ) : (
          <p className='text-gray-600'>No headlines available.</p>
        )}
      </div>
    </div>
  );
};

export default News;
