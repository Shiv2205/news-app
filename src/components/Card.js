import notFound from '../th.webp';

const Card = (props) => {
  let newsContent = props.obj.content;
  let date = "";
  let newsAuthor = props.obj.author;
  let newsSource = props.obj.source.name;
  let newsTitle = props.obj.title;

  //formatting
  if (newsContent !== null)
    newsContent = newsContent.slice(0, props.obj.content.indexOf("["));

  if (props.obj.publishedAt !== null) {
    date = new Date(props.obj.publishedAt).toDateString();
    date = date.slice(date.indexOf(" ") + 1);
  }

  if (newsTitle !== null) {
    newsTitle = newsTitle.slice(0, newsTitle.indexOf(" - "));
  }

  return (
    <a href={props.obj.url}>
      <div className="p-2">
        <div className="max-w-sm rounded overflow-hidden shadow-2xl cursor-pointer">
          <img className="w-full" src={props.obj.urlToImage !== null ? props.obj.urlToImage : notFound} alt="Preview" />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{newsTitle}</div>
            <p className="text-gray-700 text-base">{newsContent}</p>
          </div>

          <div className="px-6 pt-4 pb-2">
            {newsAuthor !== null ? (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Author: {newsAuthor}
              </span>
            ) : null}
            {newsSource !== null ? (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Source: {newsSource}
              </span>
            ) : null}
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {date}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
