import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { PepperVariety } from "@/data/peppers";

interface PepperCardProps {
  pepper: PepperVariety;
  onAddToCart?: (pepper: PepperVariety) => void;
}

const PepperCard = ({ pepper, onAddToCart }: PepperCardProps) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(pepper);
    }
  };

  return (
    <Card className="hover-scale transition-all duration-300 border-2 hover:border-primary">
      <CardHeader className="p-0">
        <img
          src={pepper.image}
          alt={pepper.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-lg">{pepper.name}</CardTitle>
          <Badge variant="destructive">{pepper.level}</Badge>
        </div>
        <CardDescription className="mb-3">
          <div className="flex items-center text-sm text-gray-600">
            <Icon name="Flame" size={16} className="mr-1 text-primary" />
            {pepper.scoville} SHU
          </div>
        </CardDescription>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            {pepper.price}
          </span>
          <Button size="sm" className="hover-scale" onClick={handleAddToCart}>
            <Icon name="ShoppingCart" size={16} className="mr-1" />В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PepperCard;
