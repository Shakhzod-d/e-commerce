import type { FC } from "react";

interface NewsCardProps {
  image: string;
  date: string;
  comments: string;
  views: string;
  title: string;
  description: string;
}

const NewsCard: FC<NewsCardProps> = ({
  image,
  date,
  comments,
  views,
  title,
  description,
}) => {
  return (
    <div className="flex-col  gap-4 inline-flex *:text-start">
      <img className="" src={image} />
      <div className="flex-col  gap-2 flex">
        <div className="gap-2 flex">
          <span className="text-[#55c380] text-base font-bold leading-normal flex-1">
            {date}
          </span>
          <div className=" gap-6 flex">
            <div className=" gap-2 flex">
              <img src="/icons/comment.svg" />
              <p className="text-[#221a25] text-base font-normal leading-normal">
                {comments}
              </p>
            </div>
            <div className=" gap-2 flex">
              <img src="/icons/view.svg" />
              <p className="text-[#221a25] text-base font-normal leading-normal">
                {views}
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-[#221a25] text-lg font-bold leading-normal">
          {title}
        </h2>
        <p className="text-[#221a25]/60 text-base font-normal leading-normal">
          {description}
        </p>
        <img src="/icons/arrow.svg" className="w-6" />
      </div>
    </div>
  );
};

export default NewsCard;
