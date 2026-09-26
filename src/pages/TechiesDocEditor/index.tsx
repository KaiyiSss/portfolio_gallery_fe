import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
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
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/ProductsListing")}>`n<span className="text-gray-700 text-sm" >`nProducts`n</span>`n</button>
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/VirtualVisit")}>`n<span className="text-gray-700 text-sm" >`nVirtual Visit`n</span>`n</button>
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/TeamActivities")}>`n<span className="text-gray-700 text-sm" >`nTeam Activities`n</span>`n</button>
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/RoadmapsListing")}>`n<span className="text-gray-700 text-sm" >`nRoadmaps`n</span>`n</button>
						<button className="flex flex-col shrink-0 items-start bg-[#FFF0EC] text-left py-[7px] px-4 rounded-3xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#FF6B4E] text-sm font-bold" >
								Techies
							</span>
						</button>
					</div>
					<button className="flex shrink-0 items-center bg-transparent text-left py-2 px-4 gap-2 rounded-[20px] border border-solid border-[#EDE9DF]"
						onClick={()=>alert("Feedback form would open here")}>
						<img
							src={"/assets/images/5o77cqyg_expires_30_days.png"} 
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
							Techies
						</span>
						<img
							src={"/assets/images/0zkhb08f_expires_30_days.png"} 
							className="w-3 h-3 object-fill"
						/>
					</div>
					<span className="text-[#FF6B4E] text-[13px] font-bold" >
						New Document
					</span>
				</div>
				<div className="flex flex-col items-start self-stretch pt-12 pr-20">
					<div className="flex flex-col items-start pr-[22px] mb-8 ml-20 gap-2">
						<span className="text-gray-900 text-[32px] font-bold" >
							Create Technical Document
						</span>
						<span className="text-gray-700 text-[15px] w-[618px]" >
							Publish markdown guides, telemetry architectures, Go micro-module documentation, or troubleshooting guides.
						</span>
					</div>
					<div className="flex items-start self-stretch mb-8 ml-20 gap-8">
						<div className="flex flex-1 flex-col gap-6">
							<div className="flex flex-col self-stretch bg-white p-8 gap-6 rounded-2xl border border-solid border-[#EDE9DF]">
								<div className="flex flex-col items-start self-stretch gap-2">
									<div className="flex items-center gap-[7px]">
										<span className="text-gray-700 text-sm font-bold" >
											Document Title
										</span>
										<span className="text-[#FF6B4E] text-sm font-bold" >
											*
										</span>
									</div>
									<input
										placeholder="e.g. ScyllaDB dynamic memory indexing thresholds troubleshooting guide"
										value={input1}
										onChange={(event)=>onChangeInput1(event.target.value)}
										className="self-stretch text-gray-400 bg-[#FDFBF7] text-sm py-[15px] px-3.5 rounded-lg border border-solid border-[#EDE9DF]"
									/>
								</div>
								<div className="flex items-center self-stretch gap-5">
									<div className="flex flex-1 flex-col items-start gap-2">
										<div className="flex items-center gap-[5px]">
											<span className="text-gray-700 text-sm font-bold" >
												Category
											</span>
											<span className="text-[#FF6B4E] text-sm font-bold" >
												*
											</span>
										</div>
										<input
											placeholder="Troubleshooting / Best-Practice"
											value={input2}
											onChange={(event)=>onChangeInput2(event.target.value)}
											className="self-stretch text-gray-400 bg-[#FDFBF7] text-sm py-[15px] px-3.5 rounded-lg border border-solid border-[#EDE9DF]"
										/>
									</div>
									<div className="flex flex-1 flex-col items-start gap-2">
										<span className="text-gray-700 text-sm font-bold" >
											Difficulty Level
										</span>
										<div className="flex items-center py-1.5 gap-2">
											<button className="flex flex-col shrink-0 items-start bg-white text-left py-2.5 px-4 rounded-lg border border-solid border-[#EDE9DF]"
												onClick={()=>alert("Pressed!")}>
												<span className="text-gray-700 text-[13px] font-bold" >
													Beginner
												</span>
											</button>
											<button className="flex flex-col shrink-0 items-start bg-teal-50 text-left py-2.5 px-4 rounded-lg border border-solid border-teal-600"
												onClick={()=>alert("Pressed!")}>
												<span className="text-teal-600 text-[13px] font-bold" >
													Intermediate
												</span>
											</button>
											<button className="flex flex-col shrink-0 items-start bg-white text-left py-2.5 px-4 rounded-lg border border-solid border-[#EDE9DF]"
												onClick={()=>alert("Pressed!")}>
												<span className="text-gray-700 text-[13px] font-bold" >
													Advanced
												</span>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch bg-white py-8 pr-8 gap-6 rounded-2xl border border-solid border-[#EDE9DF]">
								<span className="text-gray-900 text-lg font-bold ml-8" >
									Technical Content
								</span>
								<div className="self-stretch ml-8 rounded-lg border border-solid border-[#EDE9DF]">
									<div className="flex items-center self-stretch bg-[#FDFBF7] py-2">
										<div className="flex shrink-0 items-center ml-3 mr-6 gap-2">
											<img
												src={"/assets/images/gqq1xs1e_expires_30_days.png"} 
												className="w-8 h-8 rounded-md object-fill"
											/>
											<img
												src={"/assets/images/y0j5n17n_expires_30_days.png"} 
												className="w-8 h-8 rounded-md object-fill"
											/>
											<img
												src={"/assets/images/bs9nek3a_expires_30_days.png"} 
												className="w-8 h-8 rounded-md object-fill"
											/>
											<img
												src={"/assets/images/m9vqiv3k_expires_30_days.png"} 
												className="w-8 h-8 rounded-md object-fill"
											/>
											<img
												src={"/assets/images/kx369jq7_expires_30_days.png"} 
												className="w-8 h-8 rounded-md object-fill"
											/>
											<img
												src={"/assets/images/j2dnfb9g_expires_30_days.png"} 
												className="w-8 h-8 rounded-md object-fill"
											/>
											<img
												src={"/assets/images/c1wrceln_expires_30_days.png"} 
												className="w-8 h-8 rounded-md object-fill"
											/>
											<img
												src={"/assets/images/8ajihoza_expires_30_days.png"} 
												className="w-8 h-8 rounded-md object-fill"
											/>
										</div>
										<span className="text-gray-400 text-xs" >
											Draft saved automatically
										</span>
									</div>
									<div className="flex flex-col items-start self-stretch bg-[#FDFBF7] pt-6 pr-6">
										<span className="text-gray-900 text-sm mb-4 ml-6" >
											To configure our dynamic telemetry index threshold limits inside ScyllaDB, add the following telemetry module definition to your proxy orchestrator.
										</span>
										<div className="flex flex-col items-start self-stretch bg-gray-900 py-4 pr-4 mb-4 ml-6 gap-2 rounded-md">
											<div className="flex justify-between items-center self-stretch ml-4">
												<span className="text-gray-400 text-[11px]" >
													telemetry_config.go
												</span>
												<span className="text-teal-600 text-[11px]" >
													Go
												</span>
											</div>
											<span className="text-green-400 text-xs w-[326px] ml-4" >
												package telemetry\n\nimport &quot;github.com/foundations/gallery/core&quot;\n\nfunc SetupThresholdHooks() &#123;\n    core.RegisterHook(core.ThresholdConfig&#123;\n        NodeLimit: 100000, // rapid hot-node burst threshold\n        Interval:  &quot;5s&quot;,\n    &#125;)\n&#125;
											</span>
										</div>
										<span className="text-gray-400 text-sm mb-[50px] ml-6" >
											Type more markdown documentation here...
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col w-[380px] gap-6">
							<div className="flex flex-col items-start self-stretch bg-white py-6 pl-6 gap-4 rounded-2xl border border-solid border-[#EDE9DF]">
								<span className="text-gray-900 text-base font-bold" >
									Document Author
								</span>
								<div className="flex items-center gap-3">
									<img
										src={"/assets/images/raldgfz3_expires_30_days.png"} 
										className="w-10 h-10 rounded-[20px] object-fill"
									/>
									<div className="flex flex-col shrink-0 items-start gap-0.5">
										<span className="text-gray-900 text-sm font-bold mr-[46px]" >
											Maya Lin
										</span>
										<span className="text-gray-400 text-xs" >
											Principal Architect
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col self-stretch bg-white p-6 gap-4 rounded-2xl border border-solid border-[#EDE9DF]">
								<div className="flex justify-between items-center self-stretch">
									<span className="text-gray-900 text-base font-bold" >
										Version History
									</span>
									<span className="text-teal-600 text-xs font-bold" >
										View All
									</span>
								</div>
								<div className="flex flex-col self-stretch gap-4">
									<div className="flex items-center self-stretch gap-3">
										<img
											src={"/assets/images/i70ulcxw_expires_30_days.png"} 
											className="w-4 h-11 object-fill"
										/>
										<div className="flex flex-1 flex-col items-start gap-0.5">
											<span className="text-gray-900 text-[13px] font-bold" >
												v1.0.0 (Current)
											</span>
											<span className="text-gray-700 text-[11px]" >
												Initial architecture documentation blueprint.
											</span>
											<span className="text-gray-400 text-[10px]" >
												Oct 24, 2025 • 2:15 PM
											</span>
										</div>
									</div>
									<div className="flex items-start self-stretch gap-3">
										<img
											src={"/assets/images/tijjcwzg_expires_30_days.png"} 
											className="w-4 h-2 object-fill"
										/>
										<div className="flex flex-1 flex-col items-start gap-0.5">
											<span className="text-gray-900 text-[13px] font-bold" >
												Draft 2
											</span>
											<span className="text-gray-700 text-[11px]" >
												Added threshold Go snippet configuration.
											</span>
											<span className="text-gray-400 text-[10px]" >
												Oct 24, 2025 • 4:00 PM
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center self-stretch mb-20 ml-20">
						<button className="flex flex-col shrink-0 items-start bg-white text-left py-3 px-6 rounded-lg border border-solid border-[#EDE9DF]"
							onClick={()=>alert("Pressed!")}>
							<span className="text-gray-700 text-sm font-bold" >
								Save as Draft
							</span>
						</button>
						<div className="flex shrink-0 items-center gap-3">
							<button className="flex flex-col shrink-0 items-start bg-white text-left py-3 px-6 rounded-lg border border-solid border-teal-600"
								onClick={()=>alert("Pressed!")}>
								<span className="text-teal-600 text-sm font-bold" >
									Preview
								</span>
							</button>
							<button className="flex flex-col shrink-0 items-start bg-[#FF6B4E] text-left py-3 px-6 rounded-lg border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-white text-sm font-bold" >
									Publish Guide
								</span>
							</button>
						</div>
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
									src={"/assets/images/ggpt823u_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/aflj4jnm_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/nw5n47uc_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/202yml89_expires_30_days.png"} 
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