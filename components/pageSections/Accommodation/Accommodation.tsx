import { H2 } from "@/components/atoms/H2/H2";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import accomRight from "../../../assets/flowers/accomRight.png";
import { IDataItem } from "@/utils/Data";
import { SectionWrapper } from "@/components/atoms/SectionWrapper/SectionWrapper";
import { Flower } from "@/components/atoms/Flower/Flower";

type AccommodationType = {
  data: IDataItem | undefined;
};

export const Accommodation: React.FC<AccommodationType> = ({ data }) => {
  const { t } = useTranslation();
  const [accommodation, setAccommodation] = useState<string>(
    "accommodation_general",
  );
  const [address, setAddress] = useState<string>("");
  const [checkin, setCheckin] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  useEffect(() => {
    if (data?.accom === "ne") {
      setAccommodation(
        data?.alone ? "accommodation_none_single" : "accommodation_none",
      );
    } else if (data?.accom === "od") {
      setAccommodation(
        data?.alone ? "accommodation_od_single" : "accommodation_od",
      );
      setAddress("accommodation_address_od");
      setCheckin("accommodation_checkin_od");
      setPrice("accommodation_price_od");
    } else if (data?.accom === "sc") {
      setAccommodation(
        data?.alone ? "accommodation_sc_single" : "accommodation_sc",
      );
      setAddress("accommodation_address_sc");
      setCheckin("accommodation_checkin_sc");
      setPrice("accommodation_price_sc");
    } else if (data?.accom === "spalov") {
      setAccommodation(
        data?.alone ? "accommodation_spalov_single" : "accommodation_spalov",
      );
      setAddress("accommodation_address_spalov");
      setCheckin("accommodation_checkin_spalov");
      setPrice("accommodation_price_spalov");
    }
  }, [data?.accom, data?.alone]);

  console.log("accommodation", accommodation);

  return (
    <section id="accommodation">
      <SectionWrapper>
        <H2 text="accommodation_header" />
        <div style={{ marginBottom: "30px" }}>
          <p>{t(accommodation)}</p>
        </div>
        {data?.accom !== "ne" && (
          <div>
            <p>
              {t("accommodation_address")}: {t(address)}
            </p>
            <p>
              {t("accommodation_checkin")}
              {data?.friday ? "Pátek 4.8." : t(checkin)}
            </p>
            <p>
              {t("accommodation_price")}
              {t(price)}
            </p>
          </div>
        )}
      </SectionWrapper>
      <Flower left={false} source={accomRight} />
    </section>
  );
};
