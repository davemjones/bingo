import { Button } from "@/components/ui/button";
import Image from "next/image";
import Icon from "@/app/assets/icons/butterfly.svg";

const LoginButton = () => {
  return (
    <Button variant="outline" className="w-full">
      <Image
        src={Icon}
        alt="Bluesky Icon"
        width={20}
        height={20}
        className="w-5 h-5"
      />
      Login with Bluesky
    </Button>
  );
};

export default LoginButton;
