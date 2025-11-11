import { useRouter } from "expo-router";
import { useEffect } from "react";
import Routes from "./constants/Routes";

export default function Index() {
    const router = useRouter();

    useEffect(() => {
        const timeout = setTimeout(() => {
            router.replace(Routes.ROLE_SELECTION as any);
        }, 0);

        return () => clearTimeout(timeout);
    }, [router]);

    return null;
}
