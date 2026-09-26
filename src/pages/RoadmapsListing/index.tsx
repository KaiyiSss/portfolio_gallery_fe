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
						onClick={()=>navigate("/RoadmapDetail")}>
						<img
							src={"/assets/images/sg10lpra_expires_30_days.png"} 
							className="w-4 h-4 rounded-[20px] object-fill"
						/>
						<span className="text-teal-600 text-[13px] font-bold" >
							Feedback
						</span>
					</button>
				</div>
				<div className="flex flex-col items-start self-stretch bg-white pt-20 pl-20">
					<span className="text-gray-900 text-[40px] font-bold mb-3" >
						Product Roadmaps
					</span>
					<span className="text-gray-700 text-base w-[590px] mb-12" >
						Review current planning phases, dynamic deployment schedules, and completed rollouts categorized down by active feature milestones.
					</span>
				</div>
				<div className="flex flex-col self-stretch py-14 px-20 gap-5">
					<div className="flex items-center self-stretch bg-white p-6 rounded-2xl border border-solid border-[#EDE9DF]" 
						style={{
							boxShadow: "0px 4px 8px #1F293703"
						}}>
						<div className="flex flex-col shrink-0 items-start pr-[195px] gap-1.5">
							<span className="text-gray-900 text-lg font-bold" >
								Product A
							</span>
							<span className="text-gray-400 text-xs" >
								Updated Yesterday
							</span>
						</div>
						<div className="flex flex-1 items-center gap-6">
							<div className="flex flex-1 flex-col items-start py-4 pl-4 gap-2 rounded-xl border border-solid border-[#00000000]">
								<div className="flex items-center gap-2">
									<div className="bg-gray-400 w-2 h-2 rounded">
									</div>
									<span className="text-gray-900 text-[13px] font-bold" >
										Planning
									</span>
								</div>
								<span className="text-gray-700 text-xs" >
									4 features listed
								</span>
							</div>
							<div className="flex flex-1 flex-col items-start bg-[#F7F4EB] py-4 pl-4 gap-2 rounded-xl border border-solid border-[#EDE9DF]">
								<div className="flex items-center gap-2">
									<div className="bg-[#FF6B4E] w-2 h-2 rounded">
									</div>
									<span className="text-gray-900 text-[13px] font-bold" >
										In Progress
									</span>
								</div>
								<span className="text-gray-700 text-xs" >
									6 features listed
								</span>
							</div>
							<div className="flex flex-1 flex-col items-start py-4 pl-4 gap-2 rounded-xl border border-solid border-[#00000000]">
								<div className="flex items-center gap-2">
									<div className="bg-teal-600 w-2 h-2 rounded">
									</div>
									<span className="text-gray-900 text-[13px] font-bold" >
										Shipped
									</span>
								</div>
								<span className="text-gray-700 text-xs" >
									2 features listed
								</span>
							</div>
						</div>
						<button className="flex shrink-0 items-center bg-transparent text-left py-2.5 px-9 gap-[11px] rounded-lg border border-solid border-[#FF6B4E]"
							onClick={()=>alert("Feedback form would open here")}>
							<span className="text-[#FF6B4E] text-[13px] font-bold" >
								Full Roadmap
							</span>
							<img
								src={"/assets/images/m7g8tifq_expires_30_days.png"} 
								className="w-3.5 h-3.5 rounded-lg object-fill"
							/>
						</button>
					</div>
					<div className="flex items-center self-stretch bg-white p-6 rounded-2xl border border-solid border-[#EDE9DF]" 
						style={{
							boxShadow: "0px 4px 8px #1F293703"
						}}>
						<div className="flex flex-col shrink-0 items-start pr-[196px] gap-1.5">
							<span className="text-gray-900 text-lg font-bold" >
								Product B
							</span>
							<span className="text-gray-400 text-xs" >
								Updated 3 days ago
							</span>
						</div>
						<div className="flex flex-1 items-center gap-6">
							<div className="flex flex-1 flex-col items-start py-4 pl-4 gap-2 rounded-xl border border-solid border-[#00000000]">
								<div className="flex items-center gap-2">
									<div className="bg-gray-400 w-2 h-2 rounded">
									</div>
									<span className="text-gray-900 text-[13px] font-bold" >
										Planning
									</span>
								</div>
								<span className="text-gray-700 text-xs" >
									1 features listed
								</span>
							</div>
							<div className="flex flex-1 flex-col items-start py-4 pl-4 gap-2 rounded-xl border border-solid border-[#00000000]">
								<div className="flex items-center gap-2">
									<div className="bg-[#FF6B4E] w-2 h-2 rounded">
									</div>
									<span className="text-gray-900 text-[13px] font-bold" >
										In Progress
									</span>
								</div>
								<span className="text-gray-700 text-xs" >
									3 features listed
								</span>
							</div>
							<div className="flex flex-1 flex-col items-start bg-[#F7F4EB] py-4 pl-4 gap-2 rounded-xl border border-solid border-[#EDE9DF]">
								<div className="flex items-center gap-2">
									<div className="bg-teal-600 w-2 h-2 rounded">
									</div>
									<span className="text-gray-900 text-[13px] font-bold" >
										Shipped
									</span>
								</div>
								<span className="text-gray-700 text-xs" >
									11 features listed
								</span>
							</div>
						</div>
						<button className="flex shrink-0 items-center bg-transparent text-left py-2.5 px-9 gap-[11px] rounded-lg border border-solid border-[#FF6B4E]"
							onClick={()=>navigate("/RoadmapDetail")}>
							<span className="text-[#FF6B4E] text-[13px] font-bold" >
								Full Roadmap
							</span>
							<img
								src={"/assets/images/62xvgtd3_expires_30_days.png"} 
								className="w-3.5 h-3.5 rounded-lg object-fill"
							/>
						</button>
					</div>
					<div className="flex items-center self-stretch bg-white p-6 rounded-2xl border border-solid border-[#EDE9DF]" 
						style={{
							boxShadow: "0px 4px 8px #1F293703"
						}}>
						<div className="flex flex-col shrink-0 items-start pr-[194px] gap-1.5">
							<span className="text-gray-900 text-lg font-bold" >
								Product C
							</span>
							<span className="text-gray-400 text-xs" >
								Updated A week ago
							</span>
						</div>
						<div className="flex flex-1 items-center gap-6">
							<div className="flex flex-1 flex-col items-start bg-[#F7F4EB] py-4 pl-4 gap-2 rounded-xl border border-solid border-[#EDE9DF]">
								<div className="flex items-center gap-2">
									<div className="bg-gray-400 w-2 h-2 rounded">
									</div>
									<span className="text-gray-900 text-[13px] font-bold" >
										Planning
									</span>
								</div>
								<span className="text-gray-700 text-xs" >
									8 features listed
								</span>
							</div>
							<div className="flex flex-1 flex-col items-start py-4 pl-4 gap-2 rounded-xl border border-solid border-[#00000000]">
								<div className="flex items-center gap-2">
									<div className="bg-[#FF6B4E] w-2 h-2 rounded">
									</div>
									<span className="text-gray-900 text-[13px] font-bold" >
										In Progress
									</span>
								</div>
								<span className="text-gray-700 text-xs" >
									2 features listed
								</span>
							</div>
							<div className="flex flex-1 flex-col items-start py-4 pl-4 gap-2 rounded-xl border border-solid border-[#00000000]">
								<div className="flex items-center gap-2">
									<div className="bg-teal-600 w-2 h-2 rounded">
									</div>
									<span className="text-gray-900 text-[13px] font-bold" >
										Shipped
									</span>
								</div>
								<span className="text-gray-700 text-xs" >
									4 features listed
								</span>
							</div>
						</div>
						<button className="flex shrink-0 items-center bg-transparent text-left py-2.5 px-9 gap-[11px] rounded-lg border border-solid border-[#FF6B4E]"
							onClick={()=>navigate("/RoadmapDetail")}>
							<span className="text-[#FF6B4E] text-[13px] font-bold" >
								Full Roadmap
							</span>
							<img
								src={"/assets/images/zv8iwv1e_expires_30_days.png"} 
								className="w-3.5 h-3.5 rounded-lg object-fill"
							/>
						</button>
					</div>
					<div className="flex items-center self-stretch bg-white p-6 rounded-2xl border border-solid border-[#EDE9DF]" 
						style={{
							boxShadow: "0px 4px 8px #1F293703"
						}}>
						<div className="flex flex-col shrink-0 items-start pr-[195px] gap-1.5">
							<span className="text-gray-900 text-lg font-bold" >
								Product D
							</span>
							<span className="text-gray-400 text-xs" >
								Updated 2 weeks ago
							</span>
						</div>
						<div className="flex flex-1 items-center gap-6">
							<div className="flex flex-1 flex-col items-start py-4 pl-4 gap-2 rounded-xl border border-solid border-[#00000000]">
								<div className="flex items-center gap-2">
									<div className="bg-gray-400 w-2 h-2 rounded">
									</div>
									<span className="text-gray-900 text-[13px] font-bold" >
										Planning
									</span>
								</div>
								<span className="text-gray-700 text-xs" >
									3 features listed
								</span>
							</div>
							<div className="flex flex-1 flex-col items-start bg-[#F7F4EB] py-4 pl-4 gap-2 rounded-xl border border-solid border-[#EDE9DF]">
								<div className="flex items-center gap-2">
									<div className="bg-[#FF6B4E] w-2 h-2 rounded">
									</div>
									<span className="text-gray-900 text-[13px] font-bold" >
										In Progress
									</span>
								</div>
								<span className="text-gray-700 text-xs" >
									5 features listed
								</span>
							</div>
							<div className="flex flex-1 flex-col items-start py-4 pl-4 gap-2 rounded-xl border border-solid border-[#00000000]">
								<div className="flex items-center gap-2">
									<div className="bg-teal-600 w-2 h-2 rounded">
									</div>
									<span className="text-gray-900 text-[13px] font-bold" >
										Shipped
									</span>
								</div>
								<span className="text-gray-700 text-xs" >
									2 features listed
								</span>
							</div>
						</div>
						<button className="flex shrink-0 items-center bg-transparent text-left py-2.5 px-9 gap-[11px] rounded-lg border border-solid border-[#FF6B4E]"
							onClick={()=>navigate("/RoadmapDetail")}>
							<span className="text-[#FF6B4E] text-[13px] font-bold" >
								Full Roadmap
							</span>
							<img
								src={"/assets/images/ch11c8yw_expires_30_days.png"} 
								className="w-3.5 h-3.5 rounded-lg object-fill"
							/>
						</button>
					</div>
					<div className="flex items-center self-stretch bg-white p-6 rounded-2xl border border-solid border-[#EDE9DF]" 
						style={{
							boxShadow: "0px 4px 8px #1F293703"
						}}>
						<div className="flex flex-col shrink-0 items-start pr-[197px] gap-1.5">
							<span className="text-gray-900 text-lg font-bold" >
								Product E
							</span>
							<span className="text-gray-400 text-xs" >
								Updated Oct 01
							</span>
						</div>
						<div className="flex flex-1 items-center gap-6">
							<div className="flex flex-1 flex-col items-start py-4 pl-4 gap-2 rounded-xl border border-solid border-[#00000000]">
								<div className="flex items-center gap-2">
									<div className="bg-gray-400 w-2 h-2 rounded">
									</div>
									<span className="text-gray-900 text-[13px] font-bold" >
										Planning
									</span>
								</div>
								<span className="text-gray-700 text-xs" >
									2 features listed
								</span>
							</div>
							<div className="flex flex-1 flex-col items-start py-4 pl-4 gap-2 rounded-xl border border-solid border-[#00000000]">
								<div className="flex items-center gap-2">
									<div className="bg-[#FF6B4E] w-2 h-2 rounded">
									</div>
									<span className="text-gray-900 text-[13px] font-bold" >
										In Progress
									</span>
								</div>
								<span className="text-gray-700 text-xs" >
									4 features listed
								</span>
							</div>
							<div className="flex flex-1 flex-col items-start bg-[#F7F4EB] py-4 pl-4 gap-2 rounded-xl border border-solid border-[#EDE9DF]">
								<div className="flex items-center gap-2">
									<div className="bg-teal-600 w-2 h-2 rounded">
									</div>
									<span className="text-gray-900 text-[13px] font-bold" >
										Shipped
									</span>
								</div>
								<span className="text-gray-700 text-xs" >
									8 features listed
								</span>
							</div>
						</div>
						<button className="flex shrink-0 items-center bg-transparent text-left py-2.5 px-9 gap-[11px] rounded-lg border border-solid border-[#FF6B4E]"
							onClick={()=>navigate("/RoadmapDetail")}>
							<span className="text-[#FF6B4E] text-[13px] font-bold" >
								Full Roadmap
							</span>
							<img
								src={"/assets/images/j7z63ow2_expires_30_days.png"} 
								className="w-3.5 h-3.5 rounded-lg object-fill"
							/>
						</button>
					</div>
					<div className="flex items-center self-stretch bg-white p-6 rounded-2xl border border-solid border-[#EDE9DF]" 
						style={{
							boxShadow: "0px 4px 8px #1F293703"
						}}>
						<div className="flex flex-col shrink-0 items-start pr-[198px] gap-1.5">
							<span className="text-gray-900 text-lg font-bold" >
								Product F
							</span>
							<span className="text-gray-400 text-xs" >
								Updated Sep 28
							</span>
						</div>
						<div className="flex flex-1 items-center gap-6">
							<div className="flex flex-1 flex-col items-start py-4 pl-4 gap-2 rounded-xl border border-solid border-[#00000000]">
								<div className="flex items-center gap-2">
									<div className="bg-gray-400 w-2 h-2 rounded">
									</div>
									<span className="text-gray-900 text-[13px] font-bold" >
										Planning
									</span>
								</div>
								<span className="text-gray-700 text-xs" >
									6 features listed
								</span>
							</div>
							<div className="flex flex-1 flex-col items-start bg-[#F7F4EB] py-4 pl-4 gap-2 rounded-xl border border-solid border-[#EDE9DF]">
								<div className="flex items-center gap-2">
									<div className="bg-[#FF6B4E] w-2 h-2 rounded">
									</div>
									<span className="text-gray-900 text-[13px] font-bold" >
										In Progress
									</span>
								</div>
								<span className="text-gray-700 text-xs" >
									4 features listed
								</span>
							</div>
							<div className="flex flex-1 flex-col items-start py-4 pl-4 gap-2 rounded-xl border border-solid border-[#00000000]">
								<div className="flex items-center gap-2">
									<div className="bg-teal-600 w-2 h-2 rounded">
									</div>
									<span className="text-gray-900 text-[13px] font-bold" >
										Shipped
									</span>
								</div>
								<span className="text-gray-700 text-xs" >
									1 features listed
								</span>
							</div>
						</div>
						<button className="flex shrink-0 items-center bg-transparent text-left py-2.5 px-9 gap-[11px] rounded-lg border border-solid border-[#FF6B4E]"
							onClick={()=>navigate("/RoadmapDetail")}>
							<span className="text-[#FF6B4E] text-[13px] font-bold" >
								Full Roadmap
							</span>
							<img
								src={"/assets/images/n7jjhuqi_expires_30_days.png"} 
								className="w-3.5 h-3.5 rounded-lg object-fill"
							/>
						</button>
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
									src={"/assets/images/gu5zigdj_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/azzm9ukf_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/tw38n3li_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/xd7nrsfi_expires_30_days.png"} 
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