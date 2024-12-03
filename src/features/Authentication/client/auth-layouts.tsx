"use client";
import {
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import { NAVIGATION_LINKS } from "@/shared/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
	children: React.ReactNode;
	title: string;
}

export const AuthLinks = () => {
	const pathName = usePathname();
	if (pathName === "/signin") {
		return (
			<Link href={NAVIGATION_LINKS.authPageLinks.signUp} className="text-sm  tracking-wide font-bold">
				I don't have an account
			</Link>
		);
	}
	return (
		<Link href={NAVIGATION_LINKS.authPageLinks.signIn} className="text-sm tracking-wide font-bold">
			I already have an account
		</Link>
	);
};

export default function AuthLayouts({ children, title }: IProps) {
    return (
        <>
            <CardHeader className="text-center">
                <CardTitle className="border-b-4 text-center">
                    {title}
                </CardTitle>
            </CardHeader>
			<CardContent>
				{children}
			</CardContent>
			<CardFooter className="">
				<AuthLinks />
			</CardFooter>
        </>
	);
}
