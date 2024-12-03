"use client";
import {
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
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
			<Link href={`/signup`} className="text-sm  tracking-wide font-bold">
				I don't have an account
			</Link>
		);
	}
	return (
		<Link href={`/signin`} className="text-sm tracking-wide font-bold">
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
