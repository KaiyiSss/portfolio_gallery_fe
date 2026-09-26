import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default () => {
	const navigate = useNavigate();
	const [zoomLevel, setZoomLevel] = useState(1);
	
	const roadmapItems = [
		{ id: 1, name: "Kafka Auto-scaling Policy", status: "Planning", startDate: "2024-12-01", endDate: "2024-12-31", priority: "High" },
		{ id: 2, name: "Dynamic Rate-limiting Dashboard", status: "Planning", startDate: "2024-12-05", endDate: "2025-01-28", priority: "Medium" },
		{ id: 3, name: "SoylaDB Index Optimization", status: "Planning", startDate: "2025-01-10", endDate: "2025-02-28", priority: "Low" },
		{ id: 4, name: "Real-time Anomaly Detection", status: "Planning", startDate: "2025-01-15", endDate: "2025-02-20", priority: "High" },
		{ id: 5, name: "Hot-node Detection Engine", status: "In Progress", startDate: "2024-10-01", endDate: "2024-11-30", priority: "High" },
		{ id: 6, name: "Cross-region Replication", status: "In Progress", startDate: "2024-10-10", endDate: "2024-12-31", priority: "Medium" },
		{ id: 7, name: "Query Performance Profiler", status: "In Progress", startDate: "2024-10-15", endDate: "2024-11-20", priority: "Medium" },
		{ id: 8, name: "Distributed Transaction Manager", status: "In Progress", startDate: "2024-11-01", endDate: "2025-01-31", priority: "High" },
		{ id: 9, name: "Automated Backup Pipeline", status: "In Progress", startDate: "2024-10-20", endDate: "2024-12-15", priority: "Medium" },
		{ id: 10, name: "Connection Pooling v2.0", status: "Shipped", startDate: "2024-09-01", endDate: "2024-10-31", priority: "High" },
	];

	// Date range for timeline (Sep 2024 to Apr 2025)
	const timelineStart = new Date("2024-09-01");
	const timelineEnd = new Date("2025-04-30");
	
	const statusColors = {
		"Planning": "#F7F4EB",
		"In Progress": "#FFF0EC",
		"Shipped": "#E8F5E9"
	};
	const statusBorder = {
		"Planning": "#EDE9DF",
		"In Progress": "#FF6B4E",
		"Shipped": "#00C853"
	};

	// Generate month labels for timeline header
	const getMonthLabels = () => {
		const labels = [];
		let current = new Date(timelineStart);
		while (current <= timelineEnd) {
			labels.push({
				year: current.getFullYear(),
				month: current.getMonth() + 1,
				label: `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}`
			});
			current.setMonth(current.getMonth() + 1);
		}
		return labels;
	};

	const monthLabels = getMonthLabels();
	const dayWidth = 4; // pixels per day
	const totalDays = Math.ceil((timelineEnd - timelineStart) / (1000 * 60 * 60 * 24));
	const timelineWidth = totalDays * dayWidth;

	// Calculate position and width for each item
	const getItemPosition = (startDate, endDate) => {
		const start = new Date(startDate);
		const end = new Date(endDate);
		const startDays = Math.floor((start - timelineStart) / (1000 * 60 * 60 * 24));
		const endDays = Math.floor((end - timelineStart) / (1000 * 60 * 60 * 24));
		return {
			left: startDays * dayWidth * zoomLevel,
			width: (endDays - startDays + 1) * dayWidth * zoomLevel
		};
	};

	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#FDFBF7] overflow-hidden">
				<div className="flex justify-between items-center self-stretch bg-white py-[27px] px-20">
					<div className="flex shrink-0 items-center gap-2.5">
						<button className="flex flex-col shrink-0 items-start bg-[#FF6B4E] text-left py-[3px] px-[13px] rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl border-0"
						onClick={()=>navigate("/")}>
							<span className="text-white text-lg font-bold" >
								F
							</span>
						</button>
						<span className="text-gray-900 text-xl" >
							Foundations Gallery
						</span>
					</div>
					<div className="flex shrink-0 items-center gap-3">
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/ProductsListing")}>
							<span className="text-gray-700 text-sm" >
								Products
							</span>
						</button>
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/VirtualVisit")}>
							<span className="text-gray-700 text-sm" >
								Virtual Visit
							</span>
						</button>
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/TeamActivities")}>
							<span className="text-gray-700 text-sm" >
								Team Activities
							</span>
						</button>
						<button className="flex flex-col shrink-0 items-start bg-[#FFF0EC] text-left py-[7px] px-4 rounded-3xl border-0"
							onClick={()=>navigate("/RoadmapsListing")}>
								<span className="text-[#FF6B4E] text-sm font-bold" >
									Roadmaps
								</span>
							</button>
							<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/TechiesHub")}>
								<span className="text-gray-700 text-sm" >
									Techies
								</span>
							</button>
					</div>
					<button className="flex shrink-0 items-center bg-transparent text-left py-2 px-4 gap-2 rounded-[20px] border border-solid border-[#EDE9DF]"
						onClick={()=>alert("Feedback form would open here")}>
						<img
							src={"/assets/images/ebqxacav_expires_30_days.png"} 
							className="w-4 h-4 rounded-[20px] object-fill"
						/>
						<span className="text-teal-600 text-[13px] font-bold" >
							Feedback
						</span>
					</button>
				</div>
				<div className="flex flex-col items-start self-stretch bg-white py-[72px] pr-20 gap-6">
					<div className="flex flex-col items-start self-stretch ml-20 gap-3">
						<div className="flex items-center gap-2">
							<span className="text-gray-700 text-sm">Roadmaps</span>
							<span className="text-gray-400">/</span>
							<span className="text-[#FF6B4E] text-sm font-bold">Product A Roadmap</span>
						</div>
						<span className="text-gray-900 text-[40px] font-bold" >
							Product A Roadmap
						</span>
						<span className="text-gray-700 text-base w-[700px]" >
							Active release cycles, feature planning phases, and completed milestone verification logs for the Infrastructure Telemetry system. Connect with Maya Lin for architecture reviews.
						</span>
					</div>
					<div className="flex items-center gap-4 ml-20">
						<button className="flex shrink-0 items-center bg-[#FF6B4E] text-left py-2.5 px-6 gap-2 rounded-lg border-0"
							onClick={()=>navigate("/RoadmapCreateInvite")}>
							<span className="text-white text-sm font-bold" >
								Raise a Requirement
							</span>
							<span className="text-white text-sm">→</span>
						</button>
						<div className="flex items-center gap-2 ml-8">
							<button className="flex items-center justify-center bg-gray-100 w-8 h-8 rounded border border-solid border-gray-300"
								onClick={() => setZoomLevel(Math.max(0.5, zoomLevel - 0.2))}>
								<span className="text-gray-700 text-lg">−</span>
							</button>
							<span className="text-gray-700 text-sm w-12 text-center">{Math.round(zoomLevel * 100)}%</span>
							<button className="flex items-center justify-center bg-gray-100 w-8 h-8 rounded border border-solid border-gray-300"
								onClick={() => setZoomLevel(Math.min(1.5, zoomLevel + 0.2))}>
								<span className="text-gray-700 text-lg">+</span>
							</button>
						</div>
					</div>
				</div>

				{/* Timeline Section */}
				<div className="flex flex-col self-stretch ml-20 mr-20 mb-12">
					{/* Month Header */}
					<div className="flex gap-1 mb-6" style={{ width: `${timelineWidth * zoomLevel}px`, overflow: "hidden" }}>
						{monthLabels.map((month, idx) => (
							<div 
								key={idx} 
								className="text-center text-xs font-bold text-gray-700 flex-shrink-0"
								style={{ width: `${30 * dayWidth * zoomLevel}px` }}>
								{month.label}
							</div>
						))}
					</div>

					{/* Roadmap Items */}
					<div className="flex flex-col gap-6" style={{ overflow: "auto", maxWidth: "calc(100vw - 200px)" }}>
						{roadmapItems.map((item) => {
							const pos = getItemPosition(item.startDate, item.endDate);
							return (
								<div key={item.id} className="flex items-center gap-4">
									{/* Item Name */}
									<div className="w-64 flex-shrink-0">
										<div className="text-sm font-bold text-gray-900 truncate">{item.name}</div>
										<div className="flex gap-2 mt-1">
											<span className={`inline-block px-2 py-0.5 rounded text-white text-[10px] font-bold`}
												style={{ backgroundColor: item.priority === "High" ? "#FF6B4E" : item.priority === "Medium" ? "#FFA500" : "#90A4AE" }}>
												{item.priority}
											</span>
										</div>
									</div>

									{/* Timeline Bar with Date Badges */}
									<div style={{ position: "relative", width: `${timelineWidth * zoomLevel}px`, height: "48px" }}>
										<div 
											className="absolute h-10 rounded-lg flex items-center px-3 transition-all"
											style={{
												left: `${pos.left}px`,
												width: `${Math.max(pos.width, 60)}px`,
												backgroundColor: statusColors[item.status],
												borderColor: statusBorder[item.status],
												borderWidth: "2px"
											}}>
											<span className="text-xs font-bold text-gray-900 truncate">{item.status}</span>
										</div>
										
										{/* Start Date Badge */}
										<div 
											className="absolute bg-gray-900 text-white px-2 py-1 rounded-lg text-[9px] font-bold truncate"
											style={{
												left: `${pos.left}px`,
												top: "-24px",
												transform: "translateX(-50%)"
											}}>
											{item.startDate}
										</div>

										{/* End Date Badge */}
										<div 
											className="absolute bg-gray-900 text-white px-2 py-1 rounded-lg text-[9px] font-bold truncate"
											style={{
												left: `${pos.left + pos.width}px`,
												top: "-24px",
												transform: "translateX(-50%)"
											}}>
											{item.endDate}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* Legend Section */}
				<div className="self-stretch py-8 px-20 bg-[#FDFBF7]">
					<div className="flex gap-12">
						<div className="flex-1">
							<div className="text-sm font-bold text-gray-900 mb-4">Legend</div>
							<div className="flex gap-8">
								<div className="flex items-center gap-2">
									<div className="w-6 h-6 rounded" style={{ backgroundColor: statusColors["Planning"], borderColor: statusBorder["Planning"], borderWidth: "2px" }}></div>
									<span className="text-xs text-gray-700">Planning</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-6 h-6 rounded" style={{ backgroundColor: statusColors["In Progress"], borderColor: statusBorder["In Progress"], borderWidth: "2px" }}></div>
									<span className="text-xs text-gray-700">In Progress</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-6 h-6 rounded" style={{ backgroundColor: statusColors["Shipped"], borderColor: statusBorder["Shipped"], borderWidth: "2px" }}></div>
									<span className="text-xs text-gray-700">Shipped</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="self-stretch bg-[#111827] overflow-hidden">
				<div className="flex flex-col items-center self-stretch bg-[#111827] py-12 px-20 gap-8">
					<div className="flex justify-between items-start self-stretch">
						<div className="flex flex-col items-start gap-4">
							<div className="flex shrink-0 items-center gap-2.5">
								<span className="text-[#FF6B4E] text-xl" >
									F
								</span>
								<span className="text-white text-lg" >
									Foundations Gallery
								</span>
							</div>
							<span className="text-gray-400 text-sm w-64" >
								An active internal showcase of the products, missions, activities, and roadmaps driving our modern technology stack.
							</span>
						</div>
						<div className="flex flex-col items-start gap-2">
							<span className="text-white text-sm font-bold" >
								Showcase
							</span>
							<span className="text-gray-400 text-sm" >
								All Products
							</span>
							<span className="text-gray-400 text-sm" >
								Virtual Visit Map
							</span>
							<span className="text-gray-400 text-sm" >
								Activity Blog
							</span>
							<span className="text-gray-400 text-sm" >
								Universal Roadmaps
							</span>
						</div>
						<div className="flex flex-col items-start gap-2">
							<span className="text-white text-sm font-bold" >
								Organization
							</span>
							<span className="text-gray-400 text-sm" >
								The Core Team
							</span>
							<span className="text-gray-400 text-sm" >
								Techies Forum
							</span>
							<span className="text-gray-400 text-sm" >
								Global Offices
							</span>
							<span className="text-gray-400 text-sm" >
								Contributions
							</span>
						</div>
						<div className="flex flex-col items-start gap-3">
							<span className="text-white text-sm font-bold" >
								Connect with us
							</span>
							<span className="text-gray-400 text-sm" >
								Have questions or want to host a roadmap presentation? Get in touch at foundations@gallery.internal
							</span>
							<div className="flex shrink-0 items-center gap-2">
								<img
									src={"/assets/images/social1.png"} 
									className="w-5 h-5 rounded-lg object-fill"
								/>
								<img
									src={"/assets/images/social2.png"} 
									className="w-5 h-5 rounded-lg object-fill"
								/>
								<img
									src={"/assets/images/social3.png"} 
									className="w-5 h-5 rounded-lg object-fill"
								/>
								<img
									src={"/assets/images/social4.png"} 
									className="w-5 h-5 rounded-lg object-fill"
								/>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center self-stretch pt-8 border-t border-solid border-gray-800">
						<span className="text-gray-500 text-sm" >
							© 2025 Foundations Gallery. Internal Product Showcase.
						</span>
						<div className="flex shrink-0 items-center gap-4">
							<span className="text-gray-500 text-sm" >
								Privacy Policy
							</span>
							<span className="text-gray-500 text-sm" >
								Terms of Service
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}