import { Suspense } from "react";
import SmallSpinner from "./SmallSpinner";
const SuspenseWrapper = ({ children }) => {
    return (
        <div className="w-full h-auto flex items-center justify-center flex-wrap">
            <Suspense fallback={<SmallSpinner />}>{children}</Suspense>
        </div>
    );
};

export default SuspenseWrapper;