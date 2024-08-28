import { Link, Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { Command } from "lucide-react";
import { Container } from '@/components/ui/Container';

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
				</Container>
			</header>
			<main>
				<Outlet />
			</main>
			<Toaster />
		</>
	);
};