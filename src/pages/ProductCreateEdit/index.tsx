import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	const [input4, onChangeInput4] = useState('');
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
						<button className="flex flex-col shrink-0 items-start bg-[#FFF0EC] text-left py-[7px] px-4 rounded-3xl border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-[#FF6B4E] text-sm font-bold" >
								Products
							</span>
						</button>
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/VirtualVisit")}>`n<span className="text-gray-700 text-sm" >`nVirtual Visit`n</span>`n</button>
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/TeamActivities")}>`n<span className="text-gray-700 text-sm" >`nTeam Activities`n</span>`n</button>
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/RoadmapsListing")}>`n<span className="text-gray-700 text-sm" >`nRoadmaps`n</span>`n</button>
						<button className="flex flex-col shrink-0 items-start py-[7px] px-4 rounded-3xl border-0 bg-transparent" onClick={()=>navigate("/TechiesHub")}>`n<span className="text-gray-700 text-sm" >`nTechies`n</span>`n</button>
					</div>
					<button className="flex shrink-0 items-center bg-transparent text-left py-2 px-4 gap-2 rounded-[20px] border border-solid border-[#EDE9DF]"
						onClick={()=>alert("Feedback form would open here")}>
						<img
							src={"/assets/images/lnaj6kgf_expires_30_days.png"} 
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
							Products
						</span>
						<img
							src={"/assets/images/2oedwgpq_expires_30_days.png"} 
							className="w-3 h-3 object-fill"
						/>
					</div>
					<span className="text-[#FF6B4E] text-[13px] font-bold" >
						New Product
					</span>
				</div>
				<div className="flex flex-col items-start self-stretch pt-12 pr-20">
					<div className="flex flex-col items-start pr-5 mb-8 ml-20 gap-2">
						<span className="text-gray-900 text-[32px] font-bold" >
							Create New Product
						</span>
						<span className="text-gray-700 text-[15px] w-[620px]" >
							Introduce a new product to Foundations Gallery. Provide structural attributes, link active roadmaps, and set team owner visibility.
						</span>
					</div>
					<div className="flex items-start self-stretch mb-8 ml-20 gap-8">
						<div className="flex flex-1 flex-col gap-6">
							<div className="flex flex-col self-stretch bg-white p-8 gap-6 rounded-2xl border border-solid border-[#EDE9DF]">
								<div className="flex flex-col items-start self-stretch gap-2">
									<div className="flex items-center gap-[7px]">
										<span className="text-gray-700 text-sm font-bold" >
											Product Name
										</span>
										<span className="text-[#FF6B4E] text-sm font-bold" >
											*
										</span>
									</div>
									<input
										placeholder="e.g. ScyllaDB hot-node indexer"
										value={input1}
										onChange={(event)=>onChangeInput1(event.target.value)}
										className="self-stretch text-gray-400 bg-[#FDFBF7] text-sm py-[15px] px-3.5 rounded-lg border border-solid border-[#EDE9DF]"
									/>
								</div>
								<div className="flex flex-col items-start self-stretch gap-2">
									<div className="flex items-center gap-1.5">
										<span className="text-gray-700 text-sm font-bold" >
											1-Line Summary
										</span>
										<span className="text-[#FF6B4E] text-sm font-bold" >
											*
										</span>
									</div>
									<input
										placeholder="e.g. Real-time telemetry processing live micro-service events"
										value={input2}
										onChange={(event)=>onChangeInput2(event.target.value)}
										className="self-stretch text-gray-400 bg-[#FDFBF7] text-sm py-[15px] px-3.5 rounded-lg border border-solid border-[#EDE9DF]"
									/>
								</div>
								<div className="flex flex-col items-start self-stretch gap-2">
									<span className="text-gray-700 text-sm font-bold" >
										Long Description
									</span>
									<div className="self-stretch bg-[#FDFBF7] rounded-lg border border-solid border-[#EDE9DF]">
										<div className="flex items-center self-stretch bg-[#FDFBF7] py-2">
											<div className="flex shrink-0 items-center ml-3 mr-6 gap-2">
												<img
													src={"/assets/images/kms7kagb_expires_30_days.png"} 
													className="w-8 h-8 rounded-md object-fill"
												/>
												<img
													src={"/assets/images/dlbvpv3a_expires_30_days.png"} 
													className="w-8 h-8 rounded-md object-fill"
												/>
												<img
													src={"/assets/images/93hn32dy_expires_30_days.png"} 
													className="w-8 h-8 rounded-md object-fill"
												/>
												<img
													src={"/assets/images/i8nvgd9f_expires_30_days.png"} 
													className="w-8 h-8 rounded-md object-fill"
												/>
												<img
													src={"/assets/images/joka8p3y_expires_30_days.png"} 
													className="w-8 h-8 rounded-md object-fill"
												/>
												<img
													src={"/assets/images/fsqy1yo7_expires_30_days.png"} 
													className="w-8 h-8 rounded-md object-fill"
												/>
												<img
													src={"/assets/images/v9php67w_expires_30_days.png"} 
													className="w-8 h-8 rounded-md object-fill"
												/>
												<img
													src={"/assets/images/5la416ma_expires_30_days.png"} 
													className="w-8 h-8 rounded-md object-fill"
												/>
											</div>
											<span className="text-gray-400 text-xs" >
												Draft saved automatically
											</span>
										</div>
										<div className="flex flex-col self-stretch pt-3.5 pl-3.5 pr-9">
											<span className="text-gray-400 text-sm mb-[121px]" >
												Describe the capabilities, technical benefits, architecture diagram references, and operational deployment hooks...
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch bg-white py-8 pr-8 gap-6 rounded-2xl border border-solid border-[#EDE9DF]">
								<span className="text-gray-900 text-lg font-bold ml-8" >
									Classification &amp; Tags
								</span>
								<div className="flex items-center self-stretch ml-8 gap-5">
									<div className="flex flex-1 flex-col items-start gap-2">
										<div className="flex items-center gap-1.5">
											<span className="text-gray-700 text-sm font-bold" >
												Owner Dropdown
											</span>
											<span className="text-[#FF6B4E] text-sm font-bold" >
												*
											</span>
										</div>
										<input
											placeholder="Maya Lin (Principal Architect)"
											value={input3}
											onChange={(event)=>onChangeInput3(event.target.value)}
											className="self-stretch text-gray-400 bg-[#FDFBF7] text-sm py-[15px] px-3.5 rounded-lg border border-solid border-[#EDE9DF]"
										/>
									</div>
									<div className="flex flex-1 flex-col items-start gap-2">
										<span className="text-gray-700 text-sm font-bold" >
											Associated Roadmap
										</span>
										<input
											placeholder="Link to existing Product A Roadmap (Optional)"
											value={input4}
											onChange={(event)=>onChangeInput4(event.target.value)}
											className="self-stretch text-gray-400 bg-[#FDFBF7] text-sm py-[15px] px-3.5 rounded-lg border border-solid border-[#EDE9DF]"
										/>
									</div>
								</div>
								<div className="flex flex-col items-start self-stretch ml-8 gap-2.5">
									<span className="text-gray-700 text-[13px] font-bold" >
										Categorization Tags
									</span>
									<div className="flex items-center gap-2">
										<button className="flex flex-col shrink-0 items-start bg-teal-50 text-left py-1.5 px-3 rounded-xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-teal-600 text-xs font-bold" >
												Core Infrastructure
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-[#FFF0EC] text-left py-1.5 px-3 rounded-xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#FF6B4E] text-xs font-bold" >
												Analytics
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-teal-50 text-left py-1.5 px-3 rounded-xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-teal-600 text-xs font-bold" >
												Telemetry
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-gray-100 text-left py-1.5 px-3 rounded-xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-gray-700 text-xs font-bold" >
												Go Module
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-white text-left py-1.5 px-3 rounded-xl border border-solid border-[#EDE9DF]"
											onClick={()=>alert("Pressed!")}>
											<span className="text-gray-700 text-xs font-bold" >
												+ Add Tag
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col w-[380px] gap-6">
							<div className="flex flex-col items-start self-stretch bg-white py-6 pr-6 gap-4 rounded-2xl border border-solid border-[#EDE9DF]">
								<span className="text-gray-900 text-base font-bold ml-6" >
									Product Cover Image
								</span>
								<div className="flex flex-col items-center self-stretch bg-[#FDFBF7] py-8 ml-6 gap-3 rounded-lg border border-solid border-[#EDE9DF]">
									<img
										src={"/assets/images/3y5ml5tw_expires_30_days.png"} 
										className="w-8 h-8 rounded-lg object-fill"
									/>
									<span className="text-gray-700 text-[13px]" >
										Drag image here, or browse
									</span>
									<span className="text-gray-400 text-[11px]" >
										Supports PNG, JPEG up to 5MB
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch bg-white py-6 pr-6 gap-4 rounded-2xl border border-solid border-[#EDE9DF]">
								<span className="text-gray-900 text-base font-bold ml-6" >
									Visibility State
								</span>
								<div className="flex items-start self-stretch ml-6 gap-3">
									<img
										src={"/assets/images/c8suks8l_expires_30_days.png"} 
										className="w-[18px] h-[18px] rounded-[9px] object-fill"
									/>
									<div className="flex flex-1 flex-col items-start gap-0.5">
										<span className="text-gray-900 text-sm font-bold" >
											Public
										</span>
										<span className="text-gray-400 text-xs" >
											Visible to everyone inside the organization.
										</span>
									</div>
								</div>
								<div className="flex items-start self-stretch ml-6 gap-3">
									<div className="bg-white w-[18px] h-[18px] rounded-[9px] border border-solid border-[#EDE9DF]">
									</div>
									<div className="flex flex-1 flex-col items-start gap-0.5">
										<span className="text-gray-900 text-sm font-bold" >
											Internal Only
										</span>
										<span className="text-gray-400 text-xs" >
											Restricted to core engineering collectives.
										</span>
									</div>
								</div>
								<div className="flex items-start self-stretch ml-6 gap-3">
									<div className="bg-white w-[18px] h-[18px] rounded-[9px] border border-solid border-[#EDE9DF]">
									</div>
									<div className="flex flex-1 flex-col items-start gap-0.5">
										<span className="text-gray-900 text-sm font-bold" >
											Draft
										</span>
										<span className="text-gray-400 text-xs" >
											Only visible to product owners and editors.
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center self-stretch bg-gray-100 p-5 mb-8 ml-20 rounded-lg">
						<span className="text-gray-700 text-xs" >
							Created by: Maya Lin
						</span>
						<span className="text-gray-700 text-xs" >
							Created: Oct 24, 2025
						</span>
						<span className="text-gray-700 text-xs" >
							Last Modified: Just now
						</span>
						<span className="text-gray-700 text-xs" >
							Version: 1.0.0 (Read-only)
						</span>
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
									Publish Product
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
									src={"/assets/images/4u6wc4bk_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/zi7aehf6_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/mhxdtram_expires_30_days.png"} 
									className="w-9 h-9 rounded-[18px] object-fill"
								/>
								<img
									src={"/assets/images/7cc6noz9_expires_30_days.png"} 
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