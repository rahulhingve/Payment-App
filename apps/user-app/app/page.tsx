import { Button } from "@repo/ui/button";
import Image from "next/image";
import { PrismaClient } from "@repo/db/client";

export default function Home() {
  return (
    <div className="font-bold text-2xl">
      <div>
      hi there 

      </div>
      <Button  appName="rahul" children="hi" className="button"/>
    </div>
  );
}
