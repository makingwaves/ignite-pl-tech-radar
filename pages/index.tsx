import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Index: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/tech");
  }, []);

  return null;
};

export default Index;
