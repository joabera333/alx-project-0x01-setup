import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
	id,
	name,
	username,
	email,
	address,
	phone,
	website,
	company,
}) => {
	return (
		<div className="border p-4 rounded-lg shadow-sm">
			<h2 className="text-xl font-bold">{name}</h2>
			<p className="text-gray-600">@{username}</p>
			<p className="mt-2">{email}</p>
			<p className="text-sm text-gray-500 mt-2">
				{address.city}, {address.street}
			</p>
			<p className="text-sm">{phone}</p>
			<a
				href={`http://${website}`}
				className="text-blue-500 text-sm block mt-2"
			>
				{website}
			</a>
			<p className="text-sm mt-2">{company.name}</p>
		</div>
	);
};

export default UserCard;
