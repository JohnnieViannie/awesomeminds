import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Our Work", path: "/work" },
	{ name: "Approach", path: "/approach" },
	{ name: "Expertise", path: "/expertise" },
	{ name: "Portfolio", path: "/portfolio" },
	{ name: "Contact", path: "/contact" },
];

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();

	// Handle scroll event to toggle background
	useEffect(() => {
		const handleScroll = () => {
			// Change background when scroll position is greater than 0
			setIsScrolled(window.scrollY > 0);
		};

		// Add scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Cleanup event listener on component unmount
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={cn(
				"fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border transition-colors duration-300",
				isScrolled ? "bg-white" : "bg-amber-50"
			)}
		>
			<div className="container mx-auto px-6">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link
						to="/"
						className="flex items-center gap-2 font-heading font-bold text-xl"
					>
						
						{/* Responsive Logo */}
						<img
							src="/logov.png" // Update with your logo path
							alt="AMS Logo"
							className="h-8 w-auto md:h-8"
						/>
			
					</Link>
					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8">
						{navItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={cn(
									"font-body text-sm font-medium transition-colors hover:text-primary",
									location.pathname === item.path
										? "text-primary border-b-2 border-primary pb-1"
										: "text-muted-foreground"
								)}
							>
								{item.name}
							</Link>
						))}
						<Button variant="default" size="sm">
							Join the Crew
						</Button>
					</div>
					{/* Mobile Menu Button */}
					<button
						className="md:hidden p-2"
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle menu"
					>
						{isOpen ? (
							<X className="w-6 h-6 text-foreground" />
						) : (
							<Menu className="w-6 h-6 text-foreground" />
						)}
					</button>
				</div>
				{/* Mobile Navigation */}
				{isOpen && (
					<div
						className={cn(
							"md:hidden border-t border-border transition-colors duration-300",
							isScrolled ? "bg-white" : "bg-amber-50"
						)}
					>
						<div className="py-4 space-y-4">
							{navItems.map((item) => (
								<Link
									key={item.path}
									to={item.path}
									onClick={() => setIsOpen(false)}
									className={cn(
										"block px-4 py-2 font-body text-sm font-medium transition-colors hover:text-primary hover:bg-secondary rounded-lg",
										location.pathname === item.path
											? "text-primary bg-secondary"
											: "text-muted-foreground"
									)}
								>
									{item.name}
								</Link>
							))}
							<div className="px-4">
								<Button variant="default" size="sm" className="w-full">
									Join the Crew
								</Button>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}