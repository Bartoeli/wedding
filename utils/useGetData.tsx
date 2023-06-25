"use client";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { DATA } from "./Data";

export const useGetData = () => {
  const pathname = usePathname();

  useEffect(() => {
    const correctData = DATA.find(({ id }) => id === pathname);

    return correctData;
  }, []);
};
