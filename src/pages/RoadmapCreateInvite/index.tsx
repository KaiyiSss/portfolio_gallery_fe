import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
export default (props) => {
	const navigate = useNavigate();
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#FDFBF7] overflow-hidden">
				<div className="flex justify-between items-center self-stretch bg-white py-7 px-20">
					<div className="flex shrink-0 items-center gap-2.5">
						<button className="flex flex-col shrink-0 items-start bg-[#FF6B4E] text-left py-[5px] px-3 rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl border-0"
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
							src={"/assets/images/b6lfotlz_expires_30_days.png"} 
							className="w-4 h-4 rounded-[20px] object-fill"
						/>
						<span className="text-teal-600 text-[13px] font-bold" >
							Feedback
						</span>
					</button>
				</div>
				<div className="flex items-center self-stretch bg-[#F7F4EB] py-4">
					<div className="flex shrink-0 items-center ml-20 mr-2 gap-[11px]">
						<span className="text-gray-700 text-[13px]" >
							Roadmaps
						</span>
						<img
							src={"/assets/images/d0041gxd_expires_30_days.png"} 
							className="w-3 h-3 object-fill"
						/>
					</div>
					<span className="text-[#FF6B4E] text-[13px] font-bold" >
						New Roadmap
					</span>
				</div>
				<div className="flex flex-col items-start self-stretch pt-12 pr-20">
					<div className="flex flex-col items-start pr-[57px] mb-8 ml-20 gap-2">
						<span className="text-gray-900 text-[32px] font-bold" >
							Configure Product Roadmap
						</span>
						<span className="text-gray-700 text-[15px] w-[583px]" >
							Create structured boards for products to display current planning phases, dynamic deployment schedules, and completed rollouts.
						</span>
					</div>
					<div className="flex items-start self-stretch mb-8 ml-20 gap-8">
						<div className="flex flex-1 flex-col gap-6">
							<div className="flex items-center self-stretch bg-white p-8 gap-5 rounded-2xl border border-solid border-[#EDE9DF]">
								<div className="flex flex-1 flex-col items-start gap-2">
									<div className="flex items-center gap-1.5">
										<span className="text-gray-700 text-sm font-bold" >
											Target Product
										</span>
										<span className="text-[#FF6B4E] text-sm font-bold" >
											*
										</span>
									</div>
									<input
										placeholder="Product A — Infrastructure Analytics"
										value={input1}
										onChange={(event)=>onChangeInput1(event.target.value)}
										className="self-stretch text-gray-400 bg-[#FDFBF7] text-sm py-[15px] px-3.5 rounded-lg border border-solid border-[#EDE9DF]"
									/>
								</div>
								<div className="flex flex-col items-start w-[280px] gap-2">
									<span className="text-gray-700 text-sm font-bold" >
										Roadmap Owner
									</span>
									<div className="flex items-center self-stretch bg-[#FDFBF7] rounded-lg border border-solid border-[#EDE9DF]">
										<img
											src={"/assets/images/wbtyb4z3_expires_30_days.png"} 
											className="w-6 h-6 mx-3 rounded-xl object-fill"
										/>
										<input
											placeholder="Maya Lin (You)"
											value={input2}
											onChange={(event)=>onChangeInput2(event.target.value)}
											className="flex-1 self-stretch text-gray-900 bg-transparent text-[13px] font-bold py-4 mr-1 border-0"
										/>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch bg-white py-6 pr-6 gap-5 rounded-2xl border border-solid border-[#EDE9DF]">
								<span className="text-gray-900 text-lg font-bold ml-6" >
									Roadmap Board Stages
								</span>
								<div className="flex items-start self-stretch ml-6">
									<div className="flex flex-1 flex-col bg-[#FDFBF7] p-4 mr-4 gap-3 rounded-xl">
										<div className="flex justify-between items-center self-stretch">
											<div className="flex shrink-0 items-center gap-1.5">
												<img
													src={"/assets/images/v9wrn5vu_expires_30_days.png"} 
													className="w-2 h-2 object-fill"
												/>
												<span className="text-gray-900 text-sm font-bold" >
													Planning
												</span>
											</div>
											<div className="flex flex-col shrink-0 items-start bg-[#EDE9DF] py-0.5 px-1.5 rounded-[10px]">
												<span className="text-gray-700 text-[11px] font-bold" >
													1
												</span>
											</div>
										</div>
										<div className="flex flex-col items-start self-stretch bg-white py-4 pr-4 gap-3 rounded-lg border border-solid border-[#EDE9DF]">
											<span className="text-gray-900 text-[13px] font-bold ml-4" >
												Kafka Cluster Auto-scaling
											</span>
											<span className="text-gray-700 text-[11px] ml-4" >
												Process telemetry logs dynamically across 3 regions with zero downtime deployment...
											</span>
											<div className="flex justify-between items-center self-stretch ml-4">
												<div className="flex flex-col shrink-0 items-start bg-red-100 py-0.5 px-1.5 rounded">
													<span className="text-red-800 text-[10px] font-bold" >
														P0 High
													</span>
												</div>
												<span className="text-gray-400 text-[10px]" >
													Oct 28
												</span>
											</div>
										</div>
										<button className="flex flex-col items-center self-stretch bg-white text-left py-2.5 rounded-lg border border-solid border-[#EDE9DF]"
											onClick={()=>alert("Pressed!")}>
											<span className="text-gray-700 text-xs font-bold" >
												+ Add Requirement
											</span>
										</button>
									</div>
									<div className="flex flex-1 flex-col bg-[#FDFBF7] p-4 mr-[17px] gap-3 rounded-xl">
										<div className="flex justify-between items-center self-stretch">
											<div className="flex shrink-0 items-center gap-1.5">
												<img
													src={"/assets/images/v1rhejrs_expires_30_days.png"} 
													className="w-2 h-2 object-fill"
												/>
												<span className="text-gray-900 text-sm font-bold" >
													In Progress
												</span>
											</div>
											<div className="flex flex-col shrink-0 items-start bg-[#FFF0EC] py-0.5 px-1.5 rounded-[10px]">
												<span className="text-[#FF6B4E] text-[11px] font-bold" >
													0
												</span>
											</div>
										</div>
										<button className="flex flex-col items-center self-stretch bg-white text-left py-2.5 rounded-lg border border-solid border-[#EDE9DF]"
											onClick={()=>alert("Pressed!")}>
											<span className="text-gray-700 text-xs font-bold" >
												+ Add Requirement
											</span>
										</button>
									</div>
									<div className="flex flex-1 flex-col bg-[#FDFBF7] p-4 gap-3 rounded-xl">
										<div className="flex justify-between items-center self-stretch">
											<div className="flex shrink-0 items-center gap-1.5">
												<img
													src={"/assets/images/2mi9mlid_expires_30_days.png"} 
													className="w-2 h-2 object-fill"
												/>
												<span className="text-gray-900 text-sm font-bold" >
													Shipped
												</span>
											</div>
											<div className="flex flex-col shrink-0 items-start bg-teal-50 py-0.5 px-1.5 rounded-[10px]">
												<span className="text-teal-600 text-[11px] font-bold" >
													0
												</span>
											</div>
										</div>
										<button className="flex flex-col items-center self-stretch bg-white text-left py-2.5 rounded-lg border border-solid border-[#EDE9DF]"
											onClick={()=>alert("Pressed!")}>
											<span className="text-gray-700 text-xs font-bold" >
												+ Add Requirement
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-start bg-white w-[380px] p-6 gap-5 rounded-2xl border border-solid border-[#EDE9DF]">
							<div className="flex flex-col items-center gap-1">
								<span className="text-gray-900 text-base font-bold" >
									Invite Collaborators
								</span>
								<span className="text-gray-400 text-xs w-[148px]" >
									Give product leads access to update cards.
								</span>
							</div>
							<div className="flex items-center self-stretch bg-[#FDFBF7] rounded-md border border-solid border-[#EDE9DF]">
								<img
									src={"/assets/images/z1193jhh_expires_30_days.png"} 
									className="w-3.5 h-3.5 ml-3 mr-2 rounded-md object-fill"
								/>
								<input
									placeholder="Search teammates..."
									value={input3}
									onChange={(event)=>onChangeInput3(event.target.value)}
									className="flex-1 self-stretch text-gray-400 bg-transparent text-[13px] py-3 mr-1 border-0"
								/>
							</div>
							<div className="flex flex-col self-stretch gap-3">
								<div className="flex justify-between items-center self-stretch">
									<div className="flex shrink-0 items-center gap-2.5">
										<button className="flex flex-col shrink-0 items-start bg-[#FF6B4E] text-left py-[7px] px-[9px] rounded-[14px] border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-white text-[11px] font-bold" >
												C
											</span>
										</button>
										<span className="text-gray-900 text-[13px] font-bold" >
											Carlos Santana
										</span>
									</div>
									<div className="flex shrink-0 items-center gap-2.5">
										<span className="text-teal-600 text-xs" >
											Edit
										</span>
										<span className="text-[#FF6B4E] text-xs" >
											✕
										</span>
									</div>
								</div>
								<div className="flex justify-between items-center self-stretch">
									<div className="flex shrink-0 items-center gap-2.5">
										<button className="flex flex-col shrink-0 items-start bg-[#FF6B4E] text-left py-[7px] px-[9px] rounded-[14px] border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-white text-[11px] font-bold" >
												D
											</span>
										</button>
										<span className="text-gray-900 text-[13px] font-bold" >
											Dina Patel
										</span>
									</div>
									<div className="flex shrink-0 items-center gap-[9px]">
										<span className="text-teal-600 text-xs" >
											View Only
										</span>
										<span className="text-[#FF6B4E] text-xs" >
											✕
										</span>
									</div>
								</div>
							</div>
							<button className="flex flex-col items-center self-stretch bg-teal-600 text-left py-2.5 rounded-md border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-white text-[13px] font-bold" >
									Send Invitations
								</span>
							</button>
							<span className="text-gray-400 text-[11px] w-[295px]" >
								* Invited collaborators will receive an email and an in-app notification context digest.
							</span>
						</div>
					</div>
					<div className="flex justify-between items-center self-stretch mb-20 ml-20">
						<button className="flex flex-col shrink-0 items-start bg-white text-left py-3 px-6 rounded-lg border border-solid border-[#EDE9DF]"
							onClick={()=>alert("Pressed!")}>
							<span className="text-gray-700 text-sm font-bold" >
								Save Draft Board
							</span>
						</button>
						<button className="flex flex-col shrink-0 items-start bg-[#FF6B4E] text-left py-3 px-6 rounded-lg border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-sm font-bold" >
								Publish Roadmap
							</span>
						</button>
					</div>
				</div>
				<div className="self-stretch bg-gray-900 pt-20 px-20">
					<div className="flex justify-between items-start self-stretch mb-12">
						<div className="flex flex-col items-start w-80 pr-5 gap-4">
							<div className="flex items-center gap-2.5">
								<div className="flex flex-col shrink-0 items-start bg-[#FF6B4E] py-[3px] px-[9px] rounded-md">
									<span className="text-white text-sm font-bold" >
										F
									</span>
								</div>
								<span className="text-white text-lg" >
									Foundations Gallery
								</span>
							</div>
							<span className="text-gray-400 text-sm w-[300px]" >
								An active internal showcase of the products, missions, activities, and roadmaps driving our modern technology stack.
							</span>
						</div>
						<div className="flex flex-col shrink-0 items-start gap-3">
							<span className="text-white text-sm font-bold mr-[53px]" >
								Showcase
							</span>
							<span className="text-gray-400 text-sm mr-14" >
								All Products
							</span>
							<span className="text-gray-400 text-sm mr-[27px]" >
								Virtual Visit Map
							</span>
							<span className="text-gray-400 text-sm mr-[53px]" >
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
							<span className="text-gray-400 text-sm mr-3.5" >
								Techies Forum
							</span>
							<span className="text-gray-400 text-sm mr-[17px]" >
								Global Offices
							</span>
							<span className="text-gray-400 text-sm mr-[21px]" >
								Contributions
							</span>
						</div>
						<div className="flex flex-col items-start w-[280px] pr-[27px] gap-4">
							<span className="text-white text-sm font-bold" >
								Connect with us
							</span>
							<span className="text-gray-400 text-sm w-[253px]" >
								Have questions or want to host a roadmap presentation? Get in touch at foundations@gallery.internal
							</span>
							<div className="flex items-center gap-3">
								<img
									src={"/assets/images/jjn5r627_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/8lwi97l2_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/sdpcfxfq_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/kvtvo2gk_expires_30_days.png"} 
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