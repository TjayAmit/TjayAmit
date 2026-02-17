import type { SocialLink } from "@/data/portfolio";
import SocialIcon from "@/components/ui/SocialIcon";

interface SocialLinksProps {
	items: SocialLink[];
	iconClassName?: string;
	className?: string;
	linkClassName?: string;
}

export default function SocialLinks({
	items,
	iconClassName = "w-5 h-5",
	className = "flex gap-6",
	linkClassName = "text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300",
}: SocialLinksProps) {
	return (
		<div className={className}>
			{items.map((social) => {
				const external = social.platform !== "email";

				return (
					<a
						key={social.name}
						href={social.url}
						target={external ? "_blank" : undefined}
						rel={external ? "noopener noreferrer" : undefined}
						className={linkClassName}
						aria-label={social.name}
					>
						<SocialIcon platform={social.platform} className={iconClassName} />
					</a>
				);
			})}
		</div>
	);
}
