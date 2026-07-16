type CardProps = {
    title:string;
    description:string;
}

export default function Card({title,description}:CardProps){
    return (
        <div className="rounded-xl border p-6 shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
                {title}
            </h3>
            <p className="text-gray-600">
                {description}
            </p>
        </div>
    );
}