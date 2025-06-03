import { useState } from "react";
import { UserModalProps, UserData } from "../../interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
	const [formData, setFormData] = useState<UserData>({
		name: "",
		username: "",
		email: "",
		address: {
			street: "",
			suite: "",
			city: "",
			zipcode: "",
			geo: {
				lat: "",
				lng: "",
			},
		},
		phone: "",
		website: "",
		company: {
			name: "",
			catchPhrase: "",
			bs: "",
		},
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		// Handle nested fields
		if (name.includes(".")) {
			const [parent, child] = name.split(".");
			setFormData((prev) => ({
				...prev,
				[parent]: {
					...prev[parent as keyof UserData],
					[child]: value,
				},
			}));
		} else if (name.includes("geo.")) {
			const [parent, child, geoField] = name.split(".");
			setFormData((prev) => ({
				...prev,
				[parent]: {
					...prev[parent as keyof UserData],
					[child]: {
						...prev[parent as keyof UserData][child],
						[geoField]: value,
					},
				},
			}));
		} else {
			setFormData((prev) => ({
				...prev,
				[name]: value,
			}));
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(formData);
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white rounded-lg p-6 w-full max-w-2xl">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-2xl font-bold">Add New User</h2>
					<button
						onClick={onClose}
						className="text-gray-500 hover:text-gray-700"
					>
						&times;
					</button>
				</div>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{/* Basic Info */}
						<div className="space-y-2">
							<label className="block text-sm font-medium text-gray-700">
								Full Name
							</label>
							<input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								className="w-full px-3 py-2 border rounded-md"
								required
							/>
						</div>

						<div className="space-y-2">
							<label className="block text-sm font-medium text-gray-700">
								Username
							</label>
							<input
								type="text"
								name="username"
								value={formData.username}
								onChange={handleChange}
								className="w-full px-3 py-2 border rounded-md"
								required
							/>
						</div>

						<div className="space-y-2">
							<label className="block text-sm font-medium text-gray-700">
								Email
							</label>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className="w-full px-3 py-2 border rounded-md"
								required
							/>
						</div>

						<div className="space-y-2">
							<label className="block text-sm font-medium text-gray-700">
								Phone
							</label>
							<input
								type="tel"
								name="phone"
								value={formData.phone}
								onChange={handleChange}
								className="w-full px-3 py-2 border rounded-md"
								required
							/>
						</div>

						{/* Address */}
						<div className="space-y-2">
							<label className="block text-sm font-medium text-gray-700">
								Street
							</label>
							<input
								type="text"
								name="address.street"
								value={formData.address.street}
								onChange={handleChange}
								className="w-full px-3 py-2 border rounded-md"
								required
							/>
						</div>

						<div className="space-y-2">
							<label className="block text-sm font-medium text-gray-700">
								Suite/Apt
							</label>
							<input
								type="text"
								name="address.suite"
								value={formData.address.suite}
								onChange={handleChange}
								className="w-full px-3 py-2 border rounded-md"
							/>
						</div>

						<div className="space-y-2">
							<label className="block text-sm font-medium text-gray-700">
								City
							</label>
							<input
								type="text"
								name="address.city"
								value={formData.address.city}
								onChange={handleChange}
								className="w-full px-3 py-2 border rounded-md"
								required
							/>
						</div>

						<div className="space-y-2">
							<label className="block text-sm font-medium text-gray-700">
								Zip Code
							</label>
							<input
								type="text"
								name="address.zipcode"
								value={formData.address.zipcode}
								onChange={handleChange}
								className="w-full px-3 py-2 border rounded-md"
							/>
						</div>

						{/* Company */}
						<div className="space-y-2">
							<label className="block text-sm font-medium text-gray-700">
								Company Name
							</label>
							<input
								type="text"
								name="company.name"
								value={formData.company.name}
								onChange={handleChange}
								className="w-full px-3 py-2 border rounded-md"
								required
							/>
						</div>

						<div className="space-y-2">
							<label className="block text-sm font-medium text-gray-700">
								Catch Phrase
							</label>
							<input
								type="text"
								name="company.catchPhrase"
								value={formData.company.catchPhrase}
								onChange={handleChange}
								className="w-full px-3 py-2 border rounded-md"
							/>
						</div>
					</div>

					<div className="flex justify-end space-x-3 pt-4">
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
						>
							Add User
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UserModal;
