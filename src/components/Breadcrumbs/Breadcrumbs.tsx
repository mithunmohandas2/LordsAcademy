import { Link } from "react-router-dom";

export function Breadcrumbs({ location }: { location: string }) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb flex py-2">
                <li>
                    <Link to="/" className="text-specialCyan hover:underline hover:text-blue-700">Home</Link>
                    <span className="mx-2"> ► </span>
                </li>
                <li>
                    <Link to={`/${location}`} className="hover:underline hover:text-blue-700">{location}</Link>
                </li>
            </ol>
        </nav>
    );
}