import { Badge, BadgeIcon, BadgeText } from "@/components/ui/badge";

interface StyledBadgeProps {
    label: string;
    icon?: any;
    action: 'muted' | 'error' | 'warning' | 'success' | 'info';
}

export default function StyledBadge({ label, icon, action = 'muted' }: StyledBadgeProps) {
    return (
        <Badge size="lg" variant="solid" action={action} className="rounded-md">
            <BadgeText>{label}</BadgeText>
            {icon && <BadgeIcon as={icon} className="ml-2"/>}
        </Badge>
    );
}