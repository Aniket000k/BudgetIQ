import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
   await checkUser();

  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b ">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/">
          <Image
            src={"/logo.png"}
            height={80}
            width={300}
            alt="BudgetIQ logo"
            className="h-12 w-auto object-contain "
          />
        </Link>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href="/dashboard" className="hidden md:inline-flex">
              <Button variant={"outline"}>
                {" "}
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <Link href="/transaction/create">
              <Button>
                <PenBox /> <span>Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant={"outline"}>Login</Button>
            </SignInButton>
            <SignUpButton></SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-10 h-10",
                  userButtonAvatar: "rounded-full",
                  userButtonPopoverCard: "w-64",
                  userButtonPopoverFooter: "hidden",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;
