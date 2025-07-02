import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface AdBannerProps {
  type?: "horizontal" | "vertical" | "square";
  size?: "small" | "medium" | "large";
  className?: string;
}

const AdBanner = ({
  type = "horizontal",
  size = "medium",
  className = "",
}: AdBannerProps) => {
  const getAdContent = () => {
    const ads = [
      {
        title: "Изучай музыку онлайн",
        description: "Курсы игры на гитаре от профессионалов",
        cta: "Начать обучение",
        color: "bg-gradient-to-r from-purple-500 to-pink-500",
      },
      {
        title: "Винтажные пластинки",
        description: "Редкие альбомы легендарных исполнителей",
        cta: "Посмотреть каталог",
        color: "bg-gradient-to-r from-blue-500 to-teal-500",
      },
      {
        title: "Концертные билеты",
        description: "Лучшие места на выступления рок-звезд",
        cta: "Купить билеты",
        color: "bg-gradient-to-r from-orange-500 to-red-500",
      },
    ];

    return ads[Math.floor(Math.random() * ads.length)];
  };

  const ad = getAdContent();

  const getSizeClasses = () => {
    if (type === "horizontal") {
      switch (size) {
        case "small":
          return "h-20 p-4";
        case "large":
          return "h-32 p-6";
        default:
          return "h-24 p-4";
      }
    } else if (type === "vertical") {
      switch (size) {
        case "small":
          return "w-48 h-64 p-4";
        case "large":
          return "w-64 h-96 p-6";
        default:
          return "w-56 h-80 p-4";
      }
    } else {
      switch (size) {
        case "small":
          return "w-32 h-32 p-3";
        case "large":
          return "w-48 h-48 p-6";
        default:
          return "w-40 h-40 p-4";
      }
    }
  };

  return (
    <Card
      className={`${ad.color} text-white border-0 shadow-lg rounded-lg overflow-hidden ${getSizeClasses()} ${className}`}
    >
      <div className="h-full flex flex-col justify-between">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs opacity-75 font-medium">РЕКЛАМА</span>
            <Icon
              name="X"
              size={12}
              className="opacity-50 cursor-pointer hover:opacity-75"
            />
          </div>

          <h3
            className={`font-bold text-white mb-1 ${
              type === "horizontal"
                ? "text-sm"
                : type === "vertical"
                  ? "text-lg"
                  : "text-xs"
            }`}
          >
            {ad.title}
          </h3>

          <p
            className={`text-white/90 mb-3 ${
              type === "horizontal"
                ? "text-xs"
                : type === "vertical"
                  ? "text-sm"
                  : "text-xs"
            }`}
          >
            {ad.description}
          </p>
        </div>

        <Button
          variant="secondary"
          size="sm"
          className={`bg-white/20 hover:bg-white/30 text-white border-0 ${
            type === "square" ? "text-xs py-1" : ""
          }`}
        >
          {ad.cta}
        </Button>
      </div>
    </Card>
  );
};

export default AdBanner;
