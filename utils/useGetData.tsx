"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DATA, IDataItem } from "./Data";

export const useGetData = () => {
  const pathname = usePathname();
  console.log("pathname", pathname);

  const [userData, setUserData] = useState<IDataItem | undefined>();

  useEffect(() => {
    const data = DATA.find(({ id }) => id === pathname);
    setUserData(data);
  }, [pathname]);

  return userData;
};
