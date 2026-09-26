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
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/ProductsListing")}>`n<span className="text-gray-700 text-sm" >`nProducts`n</span>`n</button>
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/VirtualVisit")}>`n<span className="text-gray-700 text-sm" >`nVirtual Visit`n</span>`n</button>
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/TeamActivities")}>`n<span className="text-gray-700 text-sm" >`nTeam Activities`n</span>`n</button>
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/RoadmapsListing")}>`n<span className="text-gray-700 text-sm" >`nRoadmaps`n</span>`n</button>
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/TechiesHub")}>`n<span className="text-gray-700 text-sm" >`nTechies`n</span>`n</button>
					</div>
					<button className="flex shrink-0 items-center bg-transparent text-left py-2 px-4 gap-2 rounded-[20px] border border-solid border-[#EDE9DF]"
						onClick={()=>alert("Feedback form would open here")}>
						<img
							src={"/assets/images/i4k9kqlm_expires_30_days.png"} 
							className="w-4 h-4 rounded-[20px] object-fill"
						/>
						<span className="text-teal-600 text-[13px] font-bold" >
							Feedback
						</span>
					</button>
				</div>
				<div className="flex items-center self-stretch bg-[#F7F4EB] py-4">
					<div className="flex shrink-0 items-center ml-20 mr-2 gap-2.5">
						<span className="text-gray-700 text-[13px]" >
							Settings
						</span>
						<img
							src={"/assets/images/qa4uqomg_expires_30_days.png"} 
							className="w-3 h-3 object-fill"
						/>
					</div>
					<span className="text-[#FF6B4E] text-[13px] font-bold" >
						Permissions
					</span>
				</div>
				<div className="self-stretch pt-12 px-20">
					<div className="flex flex-col items-start self-stretch mb-10 gap-4">
						<div className="flex justify-between items-center self-stretch">
							<span className="text-gray-900 text-[32px] font-bold" >
								Permissions &amp; Access Control
							</span>
							<button className="flex flex-col shrink-0 items-start bg-gray-100 text-left py-1.5 px-4 rounded-xl border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-gray-700 text-[13px] font-bold" >
									View-only for non-admins
								</span>
							</button>
						</div>
						<span className="text-gray-700 text-[15px] w-[702px]" >
							Configure organizational governance, section access control lists (ACLs), and view the active audit log of registry changes.
						</span>
					</div>
					<div className="flex items-center self-stretch mb-10 gap-6">
						<div className="flex flex-col shrink-0 items-center py-2.5">
							<span className="text-[#FF6B4E] text-[15px] font-bold" >
								Access Matrix
							</span>
						</div>
						<div className="flex flex-col shrink-0 items-center py-2.5">
							<span className="text-gray-400 text-[15px]" >
								Visibility States
							</span>
						</div>
						<div className="flex flex-col shrink-0 items-center py-2.5">
							<span className="text-gray-400 text-[15px]" >
								Activity Log
							</span>
						</div>
					</div>
					<div className="flex flex-col items-start self-stretch bg-white py-8 pr-8 mb-10 gap-5 rounded-2xl border border-solid border-[#EDE9DF]">
						<span className="text-gray-900 text-lg font-bold ml-8" >
							Role-Based Access Control
						</span>
						<div className="flex items-start self-stretch pb-3 ml-8">
							<span className="text-gray-400 text-[13px] font-bold" >
								ACTION / PERMISSION
							</span>
							<div className="flex-1 self-stretch">
							</div>
							<span className="text-gray-400 text-[13px] font-bold mr-[59px]" >
								TEAM MEMBER
							</span>
							<span className="text-gray-400 text-[13px] font-bold mr-[63px]" >
								PRODUCT OWNER
							</span>
							<span className="text-gray-400 text-[13px] font-bold mr-[61px]" >
								DOC AUTHOR
							</span>
							<span className="text-gray-400 text-[13px] font-bold" >
								ALL USERS (VIEW)
							</span>
						</div>
						<div className="self-stretch ml-8">
							<div className="flex items-center self-stretch py-2">
								<div className="flex flex-1 flex-col items-start gap-1">
									<span className="text-gray-900 text-sm font-bold" >
										Edit/Publish Products
									</span>
									<span className="text-gray-400 text-xs" >
										Products (Core)
									</span>
								</div>
								<img
									src={"/assets/images/8uiqwui8_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
								<img
									src={"/assets/images/s6y5ul4l_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
								<img
									src={"/assets/images/1adg8lyf_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
								<img
									src={"/assets/images/df481vh1_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
							</div>
							<div className="flex items-center self-stretch py-2">
								<div className="flex flex-1 flex-col items-start gap-1">
									<span className="text-gray-900 text-sm font-bold" >
										View Private Products
									</span>
									<span className="text-gray-400 text-xs" >
										Products (Core)
									</span>
								</div>
								<img
									src={"/assets/images/t5b27v9d_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
								<img
									src={"/assets/images/89fc1egt_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
								<img
									src={"/assets/images/txh6eyct_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
								<img
									src={"/assets/images/3o241hs8_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
							</div>
							<div className="flex items-center self-stretch py-2">
								<div className="flex flex-1 flex-col items-start gap-1">
									<span className="text-gray-900 text-sm font-bold" >
										Write/Post Story
									</span>
									<span className="text-gray-400 text-xs" >
										Team Activities
									</span>
								</div>
								<img
									src={"/assets/images/ynkr1oxw_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
								<img
									src={"/assets/images/no5l1zay_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
								<img
									src={"/assets/images/31i1f4kb_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
								<img
									src={"/assets/images/o7ggnk4s_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
							</div>
							<div className="flex items-center self-stretch py-2">
								<div className="flex flex-1 flex-col items-start gap-1">
									<span className="text-gray-900 text-sm font-bold" >
										Comment on Stories
									</span>
									<span className="text-gray-400 text-xs" >
										Team Activities
									</span>
								</div>
								<img
									src={"/assets/images/8qqzoqc5_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
								<img
									src={"/assets/images/8iyug7gw_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
								<img
									src={"/assets/images/e6jy6soi_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
								<img
									src={"/assets/images/551680qi_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
							</div>
							<div className="flex items-center self-stretch py-2">
								<div className="flex flex-1 flex-col items-start gap-1">
									<span className="text-gray-900 text-sm font-bold" >
										Raise Requirement
									</span>
									<span className="text-gray-400 text-xs" >
										Roadmaps
									</span>
								</div>
								<img
									src={"/assets/images/08qcrc81_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
								<img
									src={"/assets/images/0du23j4c_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
								<img
									src={"/assets/images/pqvioqis_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
								<img
									src={"/assets/images/uiwtd0bm_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
							</div>
							<div className="flex items-center self-stretch py-2">
								<div className="flex flex-1 flex-col items-start gap-1">
									<span className="text-gray-900 text-sm font-bold" >
										Modify Roadmap Board
									</span>
									<span className="text-gray-400 text-xs" >
										Roadmaps
									</span>
								</div>
								<img
									src={"/assets/images/al53iiuy_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
								<img
									src={"/assets/images/ssxeti2c_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
								<img
									src={"/assets/images/doydm445_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
								<img
									src={"/assets/images/fbd8vz7i_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
							</div>
							<div className="flex items-center self-stretch py-2">
								<div className="flex flex-1 flex-col items-start gap-1">
									<span className="text-gray-900 text-sm font-bold" >
										Publish Docs &amp; Guides
									</span>
									<span className="text-gray-400 text-xs" >
										Techies Hub
									</span>
								</div>
								<img
									src={"/assets/images/3luyo6vm_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
								<img
									src={"/assets/images/fhjvfvwp_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
								<img
									src={"/assets/images/be39z0rl_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
								<img
									src={"/assets/images/vs41eavz_expires_30_days.png"} 
									className="w-40 h-12 object-fill"
								/>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-start self-stretch bg-white py-8 pr-8 mb-10 gap-6 rounded-2xl border border-solid border-[#EDE9DF]">
						<div className="flex flex-col items-start ml-8 gap-1.5">
							<span className="text-gray-900 text-lg font-bold mr-[361px]" >
								Global Visibility Definitions
							</span>
							<span className="text-gray-400 text-sm" >
								Every catalog resource is categorized under one of the following dynamic accessibility states:
							</span>
						</div>
						<div className="flex items-center self-stretch ml-8 gap-6">
							<div className="flex flex-1 flex-col items-start bg-[#FDFBF7] py-5 gap-3 rounded-xl border border-solid border-[#EDE9DF]">
								<div className="flex flex-col items-start bg-teal-50 py-1 px-2 ml-5 rounded">
									<span className="text-teal-600 text-[11px] font-bold" >
										Public State
									</span>
								</div>
								<span className="text-gray-700 text-[13px] w-[325px] ml-5" >
									Fully transparent. All logged-in teammates, clients, and cross-functional partners can review information, roadmaps, and requirements.
								</span>
							</div>
							<div className="flex flex-1 flex-col items-start bg-[#FDFBF7] py-5 gap-3 rounded-xl border border-solid border-[#EDE9DF]">
								<div className="flex flex-col items-start bg-amber-100 py-1 px-2 ml-5 rounded">
									<span className="text-amber-800 text-[11px] font-bold" >
										Internal Only
									</span>
								</div>
								<span className="text-gray-700 text-[13px] ml-5" >
									Restricted to organizational domain. Obscures sensitive telemetry and private architecture diagrams from external contractors.
								</span>
							</div>
							<div className="flex flex-1 flex-col items-start bg-[#FDFBF7] py-5 gap-3 rounded-xl border border-solid border-[#EDE9DF]">
								<div className="flex flex-col items-start bg-[#FFF0EC] py-1 px-2 ml-5 rounded">
									<span className="text-[#FF6B4E] text-[11px] font-bold" >
										Draft / Owner-only
									</span>
								</div>
								<span className="text-gray-700 text-[13px] w-[325px] ml-5" >
									Invisible to general members. Editorial workspaces reserved strictly for creators configuring new products and roadmaps.
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-start self-stretch bg-white py-8 pr-8 mb-20 gap-5 rounded-2xl border border-solid border-[#EDE9DF]">
						<span className="text-gray-900 text-lg font-bold ml-8" >
							Recent Admin Activity
						</span>
						<div className="flex flex-col self-stretch ml-8 gap-3">
							<div className="flex items-center self-stretch py-3">
								<div className="flex shrink-0 items-center gap-3">
									<img
										src={"/assets/images/jw7o3umo_expires_30_days.png"} 
										className="w-8 h-8 object-fill"
									/>
									<span className="text-gray-900 text-sm font-bold" >
										Maya Lin
									</span>
								</div>
								<span className="text-gray-700 text-sm" >
									Published Product I (Telemetry Prototype)
								</span>
								<div className="flex-1 self-stretch">
								</div>
								<div className="flex flex-col shrink-0 items-start bg-gray-100 py-[3px] px-2 mr-[141px] rounded">
									<span className="text-gray-700 text-[11px] font-bold" >
										Products
									</span>
								</div>
								<span className="text-gray-400 text-xs" >
									2 hours ago
								</span>
							</div>
							<div className="flex items-center self-stretch py-3">
								<div className="flex shrink-0 items-center gap-3">
									<img
										src={"/assets/images/yxgiajxw_expires_30_days.png"} 
										className="w-8 h-8 object-fill"
									/>
									<span className="text-gray-900 text-sm font-bold" >
										Carlos Santana
									</span>
								</div>
								<span className="text-gray-700 text-sm" >
									Raised requirement (Cluster auto-scaling)
								</span>
								<div className="flex-1 self-stretch">
								</div>
								<div className="flex flex-col shrink-0 items-start bg-gray-100 py-[3px] px-2 mr-[105px] rounded">
									<span className="text-gray-700 text-[11px] font-bold" >
										Roadmaps
									</span>
								</div>
								<span className="text-gray-400 text-xs" >
									Oct 28, 10:30 AM
								</span>
							</div>
							<div className="flex items-center self-stretch py-3">
								<div className="flex shrink-0 items-center gap-3">
									<img
										src={"/assets/images/gu4qk7ai_expires_30_days.png"} 
										className="w-8 h-8 object-fill"
									/>
									<span className="text-gray-900 text-sm font-bold" >
										Dina Patel
									</span>
								</div>
								<span className="text-gray-700 text-sm" >
									Updated central walkthrough schedules
								</span>
								<div className="flex-1 self-stretch">
								</div>
								<div className="flex flex-col shrink-0 items-start bg-gray-100 py-[3px] px-2 mr-[101px] rounded">
									<span className="text-gray-700 text-[11px] font-bold" >
										Virtual Visit
									</span>
								</div>
								<span className="text-gray-400 text-xs" >
									Oct 24, 03:15 PM
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
									src={"/assets/images/5lxlm4j1_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/9z05iwc7_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/y2s2yxok_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/t0qu7v23_expires_30_days.png"} 
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