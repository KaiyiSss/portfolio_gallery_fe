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
							src={"/assets/images/xy0060p8_expires_30_days.png"} 
							className="w-4 h-4 rounded-[20px] object-fill"
						/>
						<span className="text-teal-600 text-[13px] font-bold" >
							Feedback
						</span>
					</button>
				</div>
				<div className="flex flex-col items-center self-stretch bg-white py-[100px] gap-8">
					<div className="flex flex-col items-center w-[800px] gap-4">
						<div className="flex flex-col items-start bg-[#FFF0EC] py-1 px-3 rounded-[20px]">
							<span className="text-[#FF6B4E] text-xs font-bold" >
								INTERNAL DISCOVERY PLATFORM
							</span>
						</div>
						<span className="text-gray-900 text-5xl font-bold" >
							Welcome to Foundations Gallery
						</span>
						<span className="text-gray-700 text-lg text-center mx-[90px]" >
							Discover internal core products, explore release roadmaps, schedule virtual server walk-throughs, and stay updated with engineering stories.
						</span>
					</div>
					<div className="flex items-center gap-4">
						<button className="flex shrink-0 items-center bg-[#FF6B4E] text-left py-3.5 px-7 gap-2.5 rounded-[28px] border-0"
							onClick={()=>navigate("/ProductsListing")}>
							<span className="text-white text-[15px] font-bold" >
								Browse Core Products
							</span>
							<img
								src={"/assets/images/5e50ksxj_expires_30_days.png"} 
								className="w-3.5 h-3.5 rounded-[28px] object-fill"
							/>
						</button>
						<button className="flex flex-col shrink-0 items-start bg-transparent text-left py-3.5 px-7 rounded-[28px] border-2 border-solid border-teal-600"
							onClick={()=>navigate("/VirtualVisit")}>
							<span className="text-teal-600 text-[15px] font-bold" >
								Plan a Virtual Visit
							</span>
						</button>
					</div>
				</div>
				<div className="flex items-center self-stretch bg-[#F7F4EB] py-8 px-20">
					<div className="flex flex-1 flex-col items-center gap-1">
						<span className="text-[#FF6B4E] text-[32px] font-bold" >
							24
						</span>
						<span className="text-gray-700 text-[13px] font-bold" >
							Core Products Indexed
						</span>
					</div>
					<div className="flex flex-1 flex-col items-center gap-1">
						<span className="text-[#FF6B4E] text-[32px] font-bold" >
							150+
						</span>
						<span className="text-gray-700 text-[13px] font-bold" >
							Technical Documentation Topics
						</span>
					</div>
					<div className="flex flex-1 flex-col items-center gap-1">
						<span className="text-[#FF6B4E] text-[32px] font-bold" >
							12
						</span>
						<span className="text-gray-700 text-[13px] font-bold" >
							Cross-functional Team Stories
						</span>
					</div>
					<div className="flex flex-1 flex-col items-center gap-1">
						<span className="text-[#FF6B4E] text-[32px] font-bold" >
							100%
						</span>
						<span className="text-gray-700 text-[13px] font-bold" >
							Internal Sandbox Isolation
						</span>
					</div>
				</div>
				<div className="flex flex-col items-start self-stretch pt-20 pr-20">
					<span className="text-gray-900 text-2xl font-bold mb-6 ml-20" >
						Core Navigation Pillars
					</span>
					<div className="flex items-center self-stretch mb-12 ml-20">
						<div className="flex flex-1 flex-col items-start bg-white py-8 mr-6 gap-5 rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 12px #1F293703"
							}}>
							<span className="text-gray-900 text-xl font-bold ml-8" >
								Products Directory
							</span>
							<span className="text-gray-700 text-sm ml-8" >
								Browse capabilities, review regional deployments, and locate owner Slack channels instantly.
							</span>
							<div className="flex items-center ml-8 gap-[7px]">
								<span className="text-[#FF6B4E] text-[13px] font-bold 
									textDecorationLine: underline" >
									Explore Products
								</span>
								<img
									src={"/assets/images/lcvt2lu2_expires_30_days.png"} 
									className="w-3 h-3 object-fill"
								/>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-start bg-white py-8 mr-[25px] gap-5 rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 12px #1F293703"
							}}>
							<span className="text-gray-900 text-xl font-bold ml-8" >
								Virtual Hub Tour
							</span>
							<span className="text-gray-700 text-sm w-[311px] ml-8" >
								Interact directly with active transactional cluster clusters in sub-zero facilities.
							</span>
							<div className="flex items-center ml-8 gap-[7px]">
								<span className="text-teal-600 text-[13px] font-bold 
									textDecorationLine: underline" >
									Launch Map Tour
								</span>
								<img
									src={"/assets/images/e1d0x1cn_expires_30_days.png"} 
									className="w-3 h-3 object-fill"
								/>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-start bg-white py-8 gap-5 rounded-2xl border border-solid border-[#EDE9DF]" 
							style={{
								boxShadow: "0px 4px 12px #1F293703"
							}}>
							<span className="text-gray-900 text-xl font-bold ml-8" >
								Techies forum
							</span>
							<span className="text-gray-700 text-sm w-[328px] ml-8" >
								Dive into low-overhead container optimizations and security rotation scripts.
							</span>
							<div className="flex items-center ml-8 gap-[7px]">
								<span className="text-gray-900 text-[13px] font-bold 
									textDecorationLine: underline" >
									Read documentation
								</span>
								<img
									src={"/assets/images/hfk3tcdg_expires_30_days.png"} 
									className="w-3 h-3 object-fill"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="flex items-start self-stretch pt-8 pb-[100px] px-20 gap-10">
					<div className="flex flex-1 flex-col items-start bg-white py-8 pr-8 gap-6 rounded-2xl border border-solid border-[#EDE9DF]">
						<span className="text-gray-900 text-lg font-bold ml-8" >
							Recent Active Changes
						</span>
						<div className="flex flex-col self-stretch ml-8 gap-4">
							<div className="flex items-center self-stretch gap-4">
								<div className="bg-[#FF6B4E] w-2.5 h-2.5 rounded-[5px]">
								</div>
								<div className="flex flex-1 flex-col items-start gap-0.5">
									<span className="text-gray-900 text-sm font-bold" >
										Product J
									</span>
									<span className="text-gray-700 text-[13px]" >
										Deterministic load simulator updated thresholds configurations
									</span>
								</div>
								<span className="text-gray-400 text-[11px]" >
									1 hour ago
								</span>
							</div>
							<div className="flex items-center self-stretch gap-4">
								<div className="bg-[#FF6B4E] w-2.5 h-2.5 rounded-[5px]">
								</div>
								<div className="flex flex-1 flex-col items-start gap-0.5">
									<span className="text-gray-900 text-sm font-bold" >
										Product A
									</span>
									<span className="text-gray-700 text-[13px]" >
										Kafka auto-scaling policy requirement raised by Maya Lin
									</span>
								</div>
								<span className="text-gray-400 text-[11px]" >
									3 hours ago
								</span>
							</div>
							<div className="flex items-center self-stretch gap-4">
								<div className="bg-[#FF6B4E] w-2.5 h-2.5 rounded-[5px]">
								</div>
								<div className="flex flex-1 flex-col items-start gap-0.5">
									<span className="text-gray-900 text-sm font-bold" >
										Security Hub
									</span>
									<span className="text-gray-700 text-[13px]" >
										HashiCorp credential pipeline rotated regional tokens
									</span>
								</div>
								<span className="text-gray-400 text-[11px]" >
									1 day ago
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-1 flex-col items-start bg-white py-8 pr-8 gap-6 rounded-2xl border border-solid border-[#EDE9DF]">
						<span className="text-gray-900 text-lg font-bold ml-8" >
							Upcoming Virtual Visits
						</span>
						<div className="flex flex-col self-stretch ml-8 gap-4">
							<div className="flex justify-between items-center self-stretch">
								<div className="flex flex-col shrink-0 items-start pr-[82px] gap-1">
									<span className="text-[#FF6B4E] text-[13px] font-bold" >
										Oct 12, 10:00 AM
									</span>
									<span className="text-gray-900 text-[15px] font-bold" >
										North Region
									</span>
									<span className="text-gray-400 text-xs" >
										Zero-trust Proxy Sync review
									</span>
								</div>
								<button className="flex flex-col shrink-0 items-start bg-teal-600 text-left py-2 px-4 rounded-lg border-0"
									onClick={()=>navigate("/VirtualVisitAdmin")}>
									<span className="text-white text-xs font-bold" >
										Join Tour
									</span>
								</button>
							</div>
							<div className="flex justify-between items-center self-stretch">
								<div className="flex flex-col shrink-0 items-start pr-[78px] gap-1">
									<span className="text-[#FF6B4E] text-[13px] font-bold" >
										Oct 15, 02:30 PM
									</span>
									<span className="text-gray-900 text-[15px] font-bold" >
										South Region
									</span>
									<span className="text-gray-400 text-xs" >
										Solar energy integration audit
									</span>
								</div>
								<button className="flex flex-col shrink-0 items-start bg-teal-600 text-left py-2 px-4 rounded-lg border-0"
									onClick={()=>navigate("/VirtualVisitAdmin")}>
									<span className="text-white text-xs font-bold" >
										Join Tour
									</span>
								</button>
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
									src={"/assets/images/bpr3bt0u_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/al984fk3_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/ysxiajdc_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/ljesa477_expires_30_days.png"} 
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