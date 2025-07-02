import { Card } from "@/components/ui/card";

interface BiographyHeaderProps {
  name: string;
  title: string;
  birthYear: string;
  deathYear?: string;
  imageUrl?: string;
}

const BiographyHeader = ({
  name,
  title,
  birthYear,
  deathYear,
  imageUrl = "/placeholder.svg",
}: BiographyHeaderProps) => {
  return (
    <Card className="bg-white border-0 shadow-lg rounded-2xl p-8 mb-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <img
            src={imageUrl}
            alt={name}
            className="w-40 h-40 rounded-full object-cover border-4 border-gray-100"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-serif">
            {name}
          </h1>
          <p className="text-xl text-gray-600 mb-3">{title}</p>
          <div className="text-lg text-gray-500">
            {birthYear} {deathYear && `— ${deathYear}`}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BiographyHeader;
