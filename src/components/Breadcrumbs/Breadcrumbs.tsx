import { Link } from "react-router-dom";

export function Breadcrumbs({ pageTitle, link }: { pageTitle: string, link: string }) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb flex py-2">
                <li>
                    <Link to="/" className="text-specialCyan hover:underline hover:text-blue-700">Home</Link>
                    <span className="mx-2"> ► </span>
                </li>
                <li>
                    <Link to={`/${link}`} className="hover:underline hover:text-blue-700">{pageTitle}</Link>
                </li>
            </ol>
        </nav>
    );
}