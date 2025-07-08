import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { blogPosts } from "@/data/peppers";

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Экспертный блог
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="hover-scale transition-all duration-300"
            >
              <CardHeader className="p-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Icon name="Calendar" size={16} className="mr-1" />
                  {post.date}
                </div>
                <CardTitle className="text-xl mb-3">{post.title}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {post.excerpt}
                </CardDescription>
                <Button variant="outline" className="w-full hover-scale">
                  <Icon name="ArrowRight" size={16} className="mr-2" />
                  Читать далее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
