import dayjs from "dayjs"
import { useEffect, useState } from "react"

export default function LiveClock() {
    const [now, setNow] = useState(dayjs());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(dayjs());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <time style={{ color: "white" }}>{now.format("ddd MMM D h:mm A")}</time>
    );
}