import { getLoggedInUser } from "@/features/dashboard/client/views/manage-products/server/getLoggedInUser";

export default async function DashBoardPage() {
	const userId = await getLoggedInUser();
	console.log(userId);
	return <div>DashBoard</div>;
}
