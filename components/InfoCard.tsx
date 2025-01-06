import * as React from "react";

export interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  isInverted?: boolean;
}

export const InfoCard: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  isInverted = false,
}) => {
  const containerStyle = isInverted
    ? "border-2 border-[#2b7a0b] text-[#2b7a0b]"
    : "bg-[#2b7a0b] text-white";

  return (
    <div
      className={`flex flex-col p-6 rounded-lg text-center ${containerStyle}`}
    >
      <img
        loading="lazy"
        src={imageUrl}
        alt={title}
        className="mx-auto mb-4 w-[100px] h-[100px] object-contain"
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};
