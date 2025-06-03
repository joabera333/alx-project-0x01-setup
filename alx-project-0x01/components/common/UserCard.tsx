import { UserProps } from "../../interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
			<div className="p-6">
				<div className="flex items-center mb-4">
					<div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
						{user.name.charAt(0)}
					</div>
					<div className="ml-4">
						<h2 className="text-xl font-semibold">{user.name}</h2>
						<p className="text-gray-500">@{user.username}</p>
					</div>
				</div>

				<div className="space-y-2">
					<p className="text-gray-600">
						<span className="font-medium">Email:</span> {user.email}
					</p>
					<p className="text-gray-600">
						<span className="font-medium">Phone:</span> {user.phone}
					</p>
					<p className="text-gray-600">
						<span className="font-medium">Website:</span> {user.website}
					</p>
					<p className="text-gray-600">
						<span className="font-medium">Address:</span> {user.address.street},{" "}
						{user.address.city}
					</p>
				</div>

				<div className="mt-4 pt-4 border-t border-gray-100">
					<h3 className="font-medium text-gray-700">Company</h3>
					<p className="text-gray-600">{user.company.name}</p>
					<p className="text-sm text-gray-500 italic mt-1">
						{user.company.catchPhrase}
					</p>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
