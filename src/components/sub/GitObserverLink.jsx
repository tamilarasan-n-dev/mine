
import observerAPI from "../../api/observer.api.js";

const GitObserverLink = ({ href, children, className }) => {
    const handleClick = () => {
        observerAPI.create(href);
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className={`text-blue-500 hover:text-blue-600 underline ${className || ""}`}
        >
            {children || href}
        </a>
    );
};

export default GitObserverLink;
