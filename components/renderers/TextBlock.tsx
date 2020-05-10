import React from 'react';
import TweetEmbed from 'react-tweet-embed';
import useDarkTheme from '../../hooks/useDarkTheme';

const youtubeRegex = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/;
const twitterRegex = /http(?:s?):\/\/twitter\.com\/.*\/status(?:es)?\/([^\/\?]+)/;

const TextBlock: React.FC = ({ children }) => {
  const { darkTheme } = useDarkTheme();

  const body = children as string;
  if (youtubeRegex.test(body)) {
    const youtubeLink = body.match(youtubeRegex);
    return (
      <p className="my-2 whitespace-normal inline">
        {children}
        {body && youtubeLink && (
          <p className="w-full flex justify-center my-2">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${youtubeLink[1]}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </p>
        )}
      </p>
    );
  }

  if (twitterRegex.test(body)) {
    const tweet = body.match(twitterRegex);
    return (
      <div className="my-2 inline whitespace-normal">
        {children}
        {body && tweet && <TweetEmbed id={tweet[1]} options={{ theme: darkTheme ? 'dark' : 'light' }} />}
      </div>
    );
  }

  return <p className="my-2 inline-block whitespace-normal">{children}</p>;
};

export default TextBlock;