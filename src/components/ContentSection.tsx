import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { ContentSectionWrapper } from "./styled";

interface IProps {
  children?: ReactNode;
  title: string;
  description: string;
}

const ContentSection: FC<IProps> = ({ title, description }) => {
  return (
    <ContentSectionWrapper>
      <div className="content_wrapper">
        <h2>{title}</h2>
        <h3>{description}</h3>
      </div>
    </ContentSectionWrapper>
  );
};

export default memo(ContentSection);
