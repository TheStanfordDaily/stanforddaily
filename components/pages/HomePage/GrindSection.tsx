import React from "react";
import { Image } from "react-native";
import { SectionProps } from "./SectionProps";
import { RightListedSection } from "./RightListedSection";

export const GrindSection: React.ElementType = ({
  content,
  category,
  ...props
}: SectionProps) => {
  return (
    <RightListedSection
      content={content}
      category={category}
      sectionTitle={
        <Image
          source={{
            uri: "/static/sectionHeaders/thegrind.png",
          }}
          accessibilityLabel="The Grind"
          resizeMode="contain"
          style={{
            height: 30,
            width: 105,
          }}
        />
      }
      {...props}
    />
  );
};
