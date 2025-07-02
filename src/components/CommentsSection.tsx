import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Icon from "@/components/ui/icon";

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
}

const CommentsSection = () => {
  const [comments] = useState<Comment[]>([
    {
      id: 1,
      author: "Анна Петрова",
      content:
        "Очень интересная биография! Никогда не знала этих фактов о его детстве.",
      date: "2 часа назад",
    },
    {
      id: 2,
      author: "Михаил Иванов",
      content:
        "Спасибо за такой подробный рассказ. Теперь понимаю, почему он стал таким выдающимся человеком.",
      date: "5 часов назад",
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");

  return (
    <Card className="bg-white border-0 shadow-lg rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
        Комментарии ({comments.length})
      </h2>

      {/* Existing comments */}
      <div className="space-y-6 mb-8">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-100 pb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Icon name="User" size={16} className="text-purple-600" />
              </div>
              <span className="font-semibold text-gray-900">
                {comment.author}
              </span>
              <span className="text-sm text-gray-500">• {comment.date}</span>
            </div>
            <p className="text-gray-700 ml-10">{comment.content}</p>
          </div>
        ))}
      </div>

      {/* Add new comment */}
      <div className="border-t border-gray-100 pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Оставить комментарий
        </h3>
        <div className="space-y-4">
          <Input
            placeholder="Ваше имя"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full"
          />
          <Textarea
            placeholder="Поделитесь своими мыслями о биографии..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full min-h-[100px]"
          />
          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white px-6"
            onClick={() => {
              // Placeholder for adding comment
              console.log("Comment added:", {
                author: authorName,
                content: newComment,
              });
            }}
          >
            <Icon name="Send" size={16} className="mr-2" />
            Отправить комментарий
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CommentsSection;
