import { Card } from "@/components/ui/card";

interface BiographyContentProps {
  content: string[];
}

const BiographyContent = ({ content }: BiographyContentProps) => {
  return (
    <Card className="bg-white border-0 shadow-lg rounded-2xl p-8 mb-8">
      <div className="prose prose-lg max-w-none">
        {content.map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </Card>
  );
};

export default BiographyContent;
