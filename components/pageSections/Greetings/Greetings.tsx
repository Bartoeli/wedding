import { SectionWrapper } from "@/components/atoms/SectionWrapper/SectionWrapper";
import { IDataItem } from "@/utils/Data";
import React from "react";
import { useTranslation } from "react-i18next";

type GreetingsType = {
  data: IDataItem | undefined;
};

export const Greetings: React.FC<GreetingsType> = ({ data }) => {
  const { t } = useTranslation();
  const text: string = data?.alone
    ? "greetings_paragraph_single"
    : "greetings_paragraph";

  return (
    <section id="greetings">
      <SectionWrapper>
        <div>
          <p>
            {t(text, {
              salutation: data ? data.salutation : "Milí hosté",
            })}
          </p>
        </div>
      </SectionWrapper>
    </section>
  );
};
