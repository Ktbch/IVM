import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarProvider,
	SidebarTrigger
} from "@/components/ui/sidebar";
import React from "react";

// export const MuenuBar = () => {
// 	return <div className="flex items-center justify-between">
// 		<h1>OverView</h1>
// 	</div>;
// };

const SideBarComponent = () => {
	return (
		<SidebarProvider>
			<Sidebar>
				<SidebarHeader>IVM</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>HEllo</SidebarGroup>
				</SidebarContent>
			</Sidebar>
			<SidebarTrigger />
		</SidebarProvider>
	);
};

const MenuBar = () => {
	return (
		<div className="flex items-center border-b ">
			<h1>IVM</h1>
			<Avatar className="ml-auto">
				<AvatarFallback>EM</AvatarFallback>
			</Avatar>
		</div>
	);
};

export default function DashbaordLayoutClient() {
	return (
		<div className="flex flex-row w-full ">
			<SideBarComponent />
			<div className=" max-w-7xl py-5 mx-auto w-full ">
				<MenuBar />
			</div>
		</div>
	);
}
