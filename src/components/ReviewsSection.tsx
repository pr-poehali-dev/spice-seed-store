import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { testimonials } from "@/data/peppers";

const ReviewsSection = () => {
  return (
    <section
      id="reviews"
      className="py-16 bg-gradient-to-b from-orange-50 to-red-50"
    >
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Отзывы наших клиентов
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, index) => (
            <Card
              key={index}
              className="hover-scale transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500 mr-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className="fill-current"
                      />
                    ))}
                  </div>
                  <Badge variant="outline">{review.pepper}</Badge>
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">— {review.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
