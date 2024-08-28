import { Link, Outlet } from "react-router-dom";
import { Toaster } from "sonner";
// import { useAuth } from  "@/providers/auth.provider";
// import {
// 	Dropdown,
// 	DropdownTrigger,
// 	DropdownContent,
// 	DropdownLabel,
// 	DropdownSeparator,
// 	DropdownItem,
// } from  "@/components/feedback/Dropdown";
// import { notify } from "@/utils/notify.util";
import { Command } from "lucide-react";
import { Container } from '../components/ui/Container';

export const RootLayout = () => {
	return (
		<>
			<header className="sticky top-0 z-10 border-b bg-white py-4">
				<Container className="flex items-center justify-between">
				<Link to={"/"} className="flex flex-row items-center gap-x-2">
					<Command className="h-7 w-7" />
					<span className="hidden font-bold sm:inline-block">
						Order manager
					</span>
				</Link>
				{/* <Profile /> */}
				</Container>
			</header>
			<main>
				<Outlet />
			</main>
			<Toaster />
		</>
	);
};

// const Profile = () => {
// 	const { user, onLogout } = useAuth();
// 	const navigate = useNavigate();

// 	return (
// 		<Dropdown>
// 			<DropdownTrigger>
// 				<User />
// 			</DropdownTrigger>
// 			<DropdownContent>
// 				<DropdownLabel>Hello, {user?.name}</DropdownLabel>
// 				<DropdownSeparator />
// 				<DropdownItem
// 					onClick={onLogout.bind(null, () => {
// 						navigate("/login");
// 						notify("Goodbye, have a nice day!");
// 					})}
// 				>
// 					<LogOut className="w-5 h-5 mr-2" />
// 					Logout
// 				</DropdownItem>
// 			</DropdownContent>
// 		</Dropdown>
// 	);
// };