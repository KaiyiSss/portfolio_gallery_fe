import React from "react";
import { useNavigate } from "react-router-dom";
export default () => {
	const navigate = useNavigate();
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
						<button className="flex flex-col shrink-0 items-start bg-[#FFF0EC] text-left py-[7px] px-4 rounded-3xl border-0"
							onClick={()=>navigate("/ProductsListing")}>
							<span className="text-[#FF6B4E] text-sm font-bold" >
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
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/RoadmapsListing")}>
							<span className="text-gray-700 text-sm" >
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
				<div className="flex items-center self-stretch bg-[#F7F4EB] py-4">
					<span className="text-gray-700 text-[13px] ml-20 mr-2.5" >
						Products
					</span>
					<img
						src={"/assets/images/8nxi9fck_expires_30_days.png"} 
						className="w-3 h-3 mr-2 object-fill"
					/>
					<span className="text-[#FF6B4E] text-[13px] font-bold" >
						Product A
					</span>
				</div>
				<div className="flex items-start self-stretch py-12 px-20 gap-10">
					<div className="flex flex-1 flex-col gap-8">
						<div className="flex flex-col self-stretch bg-white p-8 gap-6 rounded-2xl border border-solid border-[#EDE9DF]">
							<img
								src={"/assets/images/z1ar79ah_expires_30_days.png"} 
								className="self-stretch h-80 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start self-stretch gap-3">
								<span className="text-gray-900 text-[32px] font-bold" >
									Product A — Infrastructure Analytics
								</span>
								<span className="text-gray-700 text-[15px]" >
									Product A is the core telemetry driver of our fleet analytics layer. It processes live hot-node cluster indexing events, detects bottlenecks via localized threshold triggers, and reports directly into our orchestrator dashboard. Built to run efficiently across multi-region deployments with zero-overhead container hooks.
								</span>
							</div>
						</div>
						<div className="flex items-center self-stretch gap-8">
							<div className="flex flex-1 flex-col items-start bg-white pt-6 pr-6 rounded-2xl border border-solid border-[#EDE9DF]">
								<span className="text-gray-900 text-lg font-bold mb-4 ml-6" >
									Key Features
								</span>
								<div className="flex flex-col self-stretch mb-[68px] ml-6 gap-3">
									<div className="flex flex-col items-start self-stretch">
										<span className="text-gray-700 text-[13px]" >
											Real-time event logging capturing up to 100k records per second.
										</span>
									</div>
									<div className="flex flex-col items-start self-stretch">
										<span className="text-gray-700 text-[13px]" >
											Localized threshold alerts utilizing advanced anomaly detection engines.
										</span>
									</div>
									<div className="flex flex-col items-start self-stretch">
										<span className="text-gray-700 text-[13px]" >
											Zero overhead container hooks built in modern Go modules.
										</span>
									</div>
									<div className="flex flex-col items-start self-stretch">
										<span className="text-gray-700 text-[13px]" >
											Unified configuration syncing perfectly with regional proxies.
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start bg-white w-[340px] p-6 rounded-2xl border border-solid border-[#EDE9DF]">
								<span className="text-gray-900 text-lg font-bold mb-6" >
									Team Ownership
								</span>
								<div className="flex items-center self-stretch mb-6 gap-4">
									<img
										src={"/assets/images/q3dngaw0_expires_30_days.png"} 
										className="w-12 h-12 rounded-3xl object-fill"
									/>
									<div className="flex flex-1 flex-col items-start gap-0.5">
										<span className="text-gray-900 text-[15px] font-bold" >
											Maya Lin
										</span>
										<span className="text-gray-700 text-xs" >
											Principal Arch • Foundations
										</span>
									</div>
								</div>
								<div className="self-stretch bg-gray-100 h-[1px] mb-[23px]">
								</div>
								<button className="flex justify-center items-center self-stretch bg-[#FF6B4E] text-left py-3.5 gap-[9px] rounded-lg border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-white text-sm font-bold" >
										View Active Roadmap
									</span>
									<img
										src={"/assets/images/ifqykwo6_expires_30_days.png"} 
										className="w-4 h-4 rounded-lg object-fill"
									/>
								</button>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-start bg-white w-[360px] p-6 gap-5 rounded-2xl border border-solid border-[#EDE9DF]">
						<span className="text-gray-900 text-lg font-bold" >
							Related Products
						</span>
						<div className="flex flex-col self-stretch gap-4">
							<div className="flex flex-col items-start self-stretch bg-[#FDFBF7] py-4 pr-4 gap-2.5 rounded-lg border border-solid border-[#EDE9DF]">
								<div className="flex justify-between items-center self-stretch ml-4">
									<span className="text-gray-900 text-sm font-bold" >
										Product B
									</span>
									<span className="text-teal-600 text-[11px] font-bold" >
										AI &amp; Search
									</span>
								</div>
								<span className="text-gray-700 text-xs ml-4" >
									Vector indexing cache.
								</span>
							</div>
							<div className="flex flex-col items-start self-stretch bg-[#FDFBF7] py-4 pr-4 gap-2.5 rounded-lg border border-solid border-[#EDE9DF]">
								<div className="flex justify-between items-center self-stretch ml-4">
									<span className="text-gray-900 text-sm font-bold" >
										Product D
									</span>
									<span className="text-teal-600 text-[11px] font-bold" >
										Core Infrastructure
									</span>
								</div>
								<span className="text-gray-700 text-xs ml-4" >
									Secure cloud credentials helper.
								</span>
							</div>
							<div className="flex flex-col items-start self-stretch bg-[#FDFBF7] py-4 pr-4 gap-2.5 rounded-lg border border-solid border-[#EDE9DF]">
								<div className="flex justify-between items-center self-stretch ml-4">
									<span className="text-gray-900 text-sm font-bold" >
										Product F
									</span>
									<span className="text-teal-600 text-[11px] font-bold" >
										Core Infrastructure
									</span>
								</div>
								<span className="text-gray-700 text-xs ml-4" >
									Low-latency stream router engine.
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="self-stretch bg-gray-900 pt-20 px-20">
					<div className="flex justify-between items-start self-stretch mb-12">
						<div className="flex flex-col items-start w-80 pr-[29px] gap-4">
							<div className="flex items-center gap-2.5">
								<div className="flex flex-col shrink-0 items-start bg-[#FF6B4E] py-0.5 px-2.5 rounded-md">
									<span className="text-white text-sm font-bold" >
										F
									</span>
								</div>
								<span className="text-white text-lg" >
									Foundations Gallery
								</span>
							</div>
							<span className="text-gray-400 text-sm w-[291px]" >
								An active internal showcase of the products, missions, activities, and roadmaps driving our modern technology stack.
							</span>
						</div>
						<div className="flex flex-col shrink-0 items-start gap-3">
							<span className="text-white text-sm font-bold mr-[52px]" >
								Showcase
							</span>
							<span className="text-gray-400 text-sm mr-[54px]" >
								All Products
							</span>
							<span className="text-gray-400 text-sm mr-[29px]" >
								Virtual Visit Map
							</span>
							<span className="text-gray-400 text-sm mr-[52px]" >
								Activity Blog
							</span>
							<span className="text-gray-400 text-sm" >
								Universal Roadmaps
							</span>
						</div>
						<div className="flex flex-col shrink-0 items-start gap-3">
							<span className="text-white text-sm font-bold" >
								Organization
							</span>
							<span className="text-gray-400 text-sm" >
								The Core Team
							</span>
							<span className="text-gray-400 text-sm mr-[11px]" >
								Techies Forum
							</span>
							<span className="text-gray-400 text-sm mr-[15px]" >
								Global Offices
							</span>
							<span className="text-gray-400 text-sm mr-[15px]" >
								Contributions
							</span>
						</div>
						<div className="flex flex-col items-start w-[280px] pr-[11px] gap-4">
							<span className="text-white text-sm font-bold" >
								Connect with us
							</span>
							<span className="text-gray-400 text-sm w-[269px]" >
								Have questions or want to host a roadmap presentation? Get in touch at foundations@gallery.internal
							</span>
							<div className="flex items-center gap-3">
								<img
									src={"/assets/images/rmu4bolc_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/ftaylozo_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/orikeey4_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/tvyucpgq_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
							</div>
						</div>
					</div>
					<div className="self-stretch bg-gray-700 h-[1px] mb-[47px]">
					</div>
					<div className="flex justify-between items-center self-stretch mb-10">
						<span className="text-gray-400 text-[13px]" >
							© 2025 Foundations Gallery. Internal Product Showcase.
						</span>
						<span className="text-gray-400 text-[13px]" >
							Privacy Policy • Terms of Service
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}