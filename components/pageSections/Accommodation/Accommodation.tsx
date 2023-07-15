import { H2 } from "@/components/atoms/H2/H2";
import { useGetData } from "@/utils/useGetData";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Accommodation: React.FC = () => {
  const { t } = useTranslation();
  const data = useGetData();
  let accommodation;

  useEffect(() => {
    if (data?.accom === "no") {
      accommodation = "accommodation_none";
    } else if (data?.accom === "od") {
      accommodation = "accommodation_od";
    } else if (data?.accom === "sc") {
      accommodation = "accommodation_sc";
    } else if (data?.accom === "spalov") {
      accommodation = "accommodation_spalov";
    }
  }, []);

  return (
    <section id="accommodation">
      <H2 text="accommodation_header" />
      <div>
        <p>{t(accommodation ? accommodation : "accommodation_general")}</p>
      </div>
    </section>
  );
};
