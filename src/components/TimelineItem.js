const TimelineIcon = ({ item }) => (
	<div className="p-4 bg-gray-50 rounded-lg relative md:max-w-md group">
		<div className="absolute top-0 right-0 bg-yellow-500 p-2 rounded-lg -mr-4 -mt-4 shadow-brand group-hover:shadow-brand-hover transform transition hover:shadow-brand-hover group-hover:translate-x-1 group-hover:translate-y-1">
			<item.icon className="w-6 h-6 text-white" />
		</div>
		<p className="font-bold text-xl">{item.title}</p>
		<p className="text-gray-600 max-w-prose">{item.desc}</p>
	</div>
)

export default TimelineIcon
