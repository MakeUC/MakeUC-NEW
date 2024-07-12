import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { ImageProps } from "next/image";
import { ReactNode } from "react";

// Define the props directly without using type or interface
// TypeScript type annotations are removed here
const TrackCard = ({ name, description, image, icon }) => {
  return (
    <Card className="bg-background-inset w-full md:w-[330px] hover:scale-105 transition-all">
      <CardHeader className="flex flex-col gap-2">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        {icon}
        {image && (
          <Image
            src={image}
            alt={`${name} Track Image`}
            height={280}
            width={280}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default TrackCard;
