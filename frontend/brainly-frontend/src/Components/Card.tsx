import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}



export function Card({ title, link, type }: CardProps) {


  return (
   <div className="bg-white p-8 rounded-md shadow-md border-gray-200 max-w-md border">
      <div className="flex justify-between">
        <div className="flex items-center text-md">
          <div className="text-gray-500 pr-2">
            <ShareIcon />
          </div>
          {title}
        </div>
        <div className="flex">
          <div className="pr-2 text-gray-500">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <ShareIcon />
            </a>
          </div>
          <div className="pr-2 text-gray-500">
            <ShareIcon />
          </div>
        </div>
      </div>

      <div className="pt-4">
               {/* YOUTUBE RENDER (ONLY THIS) */}
                        {type === "youtube" &&  (
                        <iframe
                            className="w-full aspect-video"
                            src={link}
                            title={title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        )}



        {/* ✅ SAFE TWITTER EMBED (UNCHANGED LOGIC) */}
        {type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
}
